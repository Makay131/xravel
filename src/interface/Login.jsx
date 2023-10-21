import { AiOutlineClose } from "react-icons/ai"

function Login({onShowModal}) {
    return (
        <form className="m-2 py-[1.5rem] px-[2rem] rounded-[0.5rem] max-w-[50rem] bg-white relative">
          <span className="absolute top-1 right-1 cursor-pointer" onClick={() => onShowModal(false)}><AiOutlineClose/></span>
          
          <h3 className="text-[3rem] text-xravel-color-black-1 text-center uppercase mb-5">login</h3>
          <input className="w-full p-[1rem] mb-5 normal-casetext-[1.7rem] text-xravel-color-black-6 normal-case border-[0.1rem] border-xravel-color-overlay-2 focus:border-xravel-color-orange-1" type="email" placeholder="enter your email" />  
          <input className="w-full p-[1rem] normal-casetext-[1.7rem] text-xravel-color-black-6 normal-case border-[0.1rem] border-xravel-color-overlay-2 focus:border-xravel-color-orange-1" type="password" placeholder="enter your password" />  
          <input className="block w-full mt-[1rem] bg-xravel-color-orange-1 text-white py-[0.8rem] px-[3rem] border-[0.2rem] border-xravel-color-orange-1 cursor-pointer hover:bg-xravel-color-orange-2 hover:text-xravel-color-orange-1" type="submit" value="login now" />
          <input className="mt-[2rem]" type="checkbox" id="remember" />
          <label className="text-[1.5rem]" htmlFor="remember">remember me</label>
          <p className="py-[0.5rem] text-[1.5rem] text-xravel-color-black-7">forgot password? <a>click here</a></p>
          <p>dont have an account yet? <a href="#">register now</a></p>  
        </form>
    )
}

export default Login
