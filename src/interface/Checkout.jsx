function Checkout({onChangeInput, purchaseData, isLoading}) {
    return (
        <div className="w-[70%]">
            <label htmlFor="card">Card Number</label>
            <input className="w-full p-[1rem] mb-5 normal-casetext-[1.7rem] text-xravel-color-black-6 normal-case border-[0.1rem] border-xravel-color-overlay-2 focus:border-xravel-color-orange-1" type="text" id="card" maxLength="16" placeholder="enter your card number" value={purchaseData.card} onChange={(e) => onChangeInput(e, 'card')}  />  
            <label htmlFor="name">Name on Card</label>
            <input className="w-full p-[1rem] normal-casetext-[1.7rem] text-xravel-color-black-6 normal-case border-[0.1rem] border-xravel-color-overlay-2 focus:border-xravel-color-orange-1" type="text" id="name" placeholder="enter your name on card" value={purchaseData.name} onChange={(e) => onChangeInput(e, 'name')} />  
            
            <div className="flex items-center gap-4 flex-wrap mt-5">
                <div className="w-full">
                    <label htmlFor="date">Exp. Date</label>
                    <input className="w-full p-[1rem] normal-casetext-[1.7rem] text-xravel-color-black-6 normal-case border-[0.1rem] border-xravel-color-overlay-2 focus:border-xravel-color-orange-1" type="text" id="date" placeholder="02/27" value={purchaseData.date} onChange={(e) => onChangeInput(e, 'date')} />
                </div>        
                <div className="w-full">
                    <label htmlFor="cvv">Cvv</label>
                    <input className="w-full p-[1rem] normal-casetext-[1.7rem] text-xravel-color-black-6 normal-case border-[0.1rem] border-xravel-color-overlay-2 focus:border-xravel-color-orange-1" type="text" id="cvv" maxLength="3" placeholder="978" value={purchaseData.cvv} onChange={(e) => onChangeInput(e, 'cvv')} />
                </div>        
            </div>
            <input className="block w-full mt-[1rem] bg-xravel-color-orange-1 text-white py-[0.8rem] px-[3rem] border-[0.2rem] border-xravel-color-orange-1 cursor-pointer hover:bg-xravel-color-orange-2 hover:text-xravel-color-orange-1" type="submit" value={isLoading ? "PURCHASING" : "BUY"} />
        </div>
    )
}

export default Checkout
