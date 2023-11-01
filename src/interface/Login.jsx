function Login({ onInputChange, email, password, error, isLoading }) {
    return (
        <>
          <input className="w-full p-[1rem] mb-5 normal-casetext-[1.7rem] text-xravel-color-black-6 normal-case border-[0.1rem] border-xravel-color-overlay-2 focus:border-xravel-color-orange-1" type="email" placeholder="enter your email" value={email} onChange={e => onInputChange.email(e.target.value)} />  
          <input className="w-full p-[1rem] normal-casetext-[1.7rem] text-xravel-color-black-6 normal-case border-[0.1rem] border-xravel-color-overlay-2 focus:border-xravel-color-orange-1" type="password" placeholder="enter your password" value={password} onChange={e => onInputChange.password(e.target.value)}/>  
          {error && <p className="text-lg text-red-500 mt-1">Email or password is wrong. Signup or try again</p>}
          <input className="block w-full mt-[1rem] bg-xravel-color-orange-1 text-white py-[0.8rem] px-[3rem] border-[0.2rem] border-xravel-color-orange-1 cursor-pointer hover:bg-xravel-color-orange-2 hover:text-xravel-color-orange-1" type="submit" value={isLoading ? "Logging in..." : "Login Now"} />
        </>
    )
}

export default Login;
