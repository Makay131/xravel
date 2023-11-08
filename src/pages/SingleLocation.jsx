import { useLoaderData, useNavigate } from "react-router-dom"
import Checkout from "../interface/Checkout";
import BaseButton from "../interface/BaseButton"
import { useReducer, useState } from "react";
import { initialPurchaseData, purchaseReducer } from "../reducers/purchaseReducer";
import { buyPackage } from "../services";
import { useAuth } from "../contexts/AuthContext";

function SingleLocation() {
    const [showCheckout, setShowCheckout] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [purchaseData ,dispatch] = useReducer(purchaseReducer, initialPurchaseData);

    const { name, id } = useLoaderData();
    const {onlineUser, setOnlineUser} = useAuth();
    const navigate = useNavigate()

    function handleChangeInput(e, type) {
        dispatch({type: 'updateInputs', payload: {field: type, value: e.target.value}});
    }
    async function handlePurchaseSubmit(e) {
        setIsLoading(true)
        e.preventDefault();
        if(!purchaseData.card ||
            !purchaseData.name ||
            !purchaseData.date ||
            !purchaseData.cvv) {
                setIsLoading(false)
                return;
        };
        const newPackages = [...onlineUser.packages, id]
        setOnlineUser({...onlineUser, packages: newPackages})
        await buyPackage(onlineUser.id, {packages: newPackages})
        setIsLoading(false);
        navigate("/app/mylocations");
    }
    return (
        <section className="home-section">
            <h1 className="section-heading">showing results of {name}</h1>
            <div className="min-h-[400px] max-w-[500px] flex flex-col justify-between mb-12">
                Package details are shown here.
                <BaseButton onButtonClicked={() => setShowCheckout(true)}>Purchase</BaseButton>
            </div>
            
            
            {showCheckout && 
                <form onSubmit={handlePurchaseSubmit}>
                    <div className="grid place-items-center">
                        <Checkout onChangeInput={handleChangeInput} purchaseData={purchaseData} isLoading={isLoading} />
                    </div>     
                </form>
            }
        </section>
    )
}

export default SingleLocation
