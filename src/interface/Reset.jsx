function Reset({onInputChange, error, isLoading}) {
    return (
        <>
          <input className="w-full p-[1rem] mb-5 normal-casetext-[1.7rem] w-[250px] md:w-[400px] text-xravel-color-black-6 normal-case border-[0.1rem] border-xravel-color-overlay-2 focus:border-xravel-color-orange-1" type="email" placeholder="enter your email" onChange={e => onInputChange(e.target.value)} /> 
          {error && <p className="text-lg text-red-500 mt-1">Email doesn't exist. Signup or try again</p>} 
          <input className="block w-full mt-[1rem] text-center bg-xravel-color-orange-1 text-white py-[0.8rem] px-[3rem] border-[0.2rem] border-xravel-color-orange-1 cursor-pointer hover:bg-xravel-color-orange-2 hover:text-xravel-color-orange-1" type="submit" value={isLoading ? 'Requesting...' : 'Request Password'} />
        </>
    )
}

export default Reset
