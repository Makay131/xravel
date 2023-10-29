function Checkout() {
    return (
        <div className="w-[70%]">
            <label htmlFor="card">Card Number</label>
            <input className="w-full p-[1rem] mb-5 normal-casetext-[1.7rem] text-xravel-color-black-6 normal-case border-[0.1rem] border-xravel-color-overlay-2 focus:border-xravel-color-orange-1" type="text" id="card" placeholder="enter your card number"  />  
            <label htmlFor="name">Name on Card</label>
            <input className="w-full p-[1rem] normal-casetext-[1.7rem] text-xravel-color-black-6 normal-case border-[0.1rem] border-xravel-color-overlay-2 focus:border-xravel-color-orange-1" type="text" id="name" placeholder="enter your name on card" />  
            
            <div className="flex items-center gap-4 flex-wrap mt-5">
                <div className="w-full">
                    <label htmlFor="date">Exp. Date</label>
                    <input className="w-full p-[1rem] normal-casetext-[1.7rem] text-xravel-color-black-6 normal-case border-[0.1rem] border-xravel-color-overlay-2 focus:border-xravel-color-orange-1" type="text" id="date" placeholder="02/27" />
                </div>        
                <div className="w-full">
                    <label htmlFor="cvv">Cvv</label>
                    <input className="w-full p-[1rem] normal-casetext-[1.7rem] text-xravel-color-black-6 normal-case border-[0.1rem] border-xravel-color-overlay-2 focus:border-xravel-color-orange-1" type="text" id="cvv" placeholder="978" />
                </div>        
            </div>
            <input className="block w-full mt-[1rem] bg-xravel-color-orange-1 text-white py-[0.8rem] px-[3rem] border-[0.2rem] border-xravel-color-orange-1 cursor-pointer hover:bg-xravel-color-orange-2 hover:text-xravel-color-orange-1" type="submit" value="BUY" />
        </div>
    )
}

export default Checkout
