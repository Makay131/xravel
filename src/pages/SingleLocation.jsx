import { Form, useParams } from "react-router-dom"
import Checkout from "../interface/Checkout";
import BaseButton from "../interface/BaseButton"
import { useState } from "react";

function SingleLocation() {
    const [showCheckout, setShowCheckout] = useState(false);
    const { id } = useParams();
    return (
        <section className="home-section">
            <h1 className="section-heading">showing results of {id}</h1>
            <div className="min-h-[400px] max-w-[500px] flex flex-col justify-between mb-12">
                Package details are shown here.
                <BaseButton onButtonClicked={() => setShowCheckout(true)}>Purchase</BaseButton>
            </div>
            
            
            {showCheckout && 
                <Form>
                    <div className="grid place-items-center">
                        <Checkout />
                    </div>     
                </Form>
            }
        </section>
    )
}

export default SingleLocation
