import { useLoaderData } from "react-router-dom"
import Checkout from "../interface/Checkout";
import BaseButton from "../interface/BaseButton"
import { useReducer, useState } from "react";
import { initialPurchaseData, purchaseReducer } from "../reducers/purchaseReducer";

function SingleLocation() {
    const [showCheckout, setShowCheckout] = useState(false);

    const [purchaseData ,dispatch] = useReducer(purchaseReducer, initialPurchaseData);

    const { name } = useLoaderData();

    function handleChangeInput(e, type) {
        dispatch({type: 'updateInputs', payload: {field: type, value: e.target.value}});
    }
    function handlePurchaseSubmit(e) {
        e.preventDefault();
        console.log(purchaseData)
        //TODO: fill every input, send data as put request to the user's packages property as one id, redirect to my loc
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
                        <Checkout onChangeInput={handleChangeInput} purchaseData={purchaseData} />
                    </div>     
                </form>
            }
        </section>
    )
}

export default SingleLocation
