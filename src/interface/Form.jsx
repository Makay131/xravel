import { AiOutlineClose } from "react-icons/ai";
import Signup from "./Signup";
import Login from "./Login";
import { useState } from "react";
import Reset from "./Reset";

import {getUsers, signupUser} from "../services/index";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function Form({onShowModal}) {
    const [activeForm, setActiveForm] = useState('login');
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [fullname, setFullname] = useState("");

    const navigate = useNavigate();

    async function handleFormSubmit(e) {
      setError(false)
      setIsLoading(true);
      e.preventDefault();
      let result = {};
      if(activeForm === 'login') {
        if(!email.length || !password.length) {
          setIsLoading(false);
          return;
        }
        const users = await getUsers();
        if(users?.filter(user => user.email === email && user.password === password)?.length) {
            setIsLoading(false);
            setError(false);
            //TODO: setActiveUser as the newly created user
            navigate('/app/locations')
          } else {
            setError(true);
            setIsLoading(false)
          }
      }
      if(activeForm === 'signup') {
        if(!email.length || !password.length || !rePassword.length || !fullname.length) return;
        if(password !== rePassword) {
          setError(true);
          setIsLoading(false);
          return;
        }
        result = {...result, email, password, fullname};
        const newUser = await signupUser(result);
        if(newUser.id) {
          //TODO: setActiveUser as the newly created user
          navigate('/app/locations');
        }
        setIsLoading(false);
      }
      if(activeForm === 'reset') {
        if(!email.length) {
          setIsLoading(false);
          return;
        }
        const users = await getUsers();
        if(users?.filter(user => user.email === email)?.length) {
          setIsLoading(false);
          toast.success("Check your email, and login again!")
          setActiveForm('login');
          setError(false)
        } else {
          setIsLoading(false);
          setError(true)
        }
      }
      
    }
    return (
        <form className="m-2 py-[1.5rem] px-[2rem] rounded-[0.5rem] max-w-[50rem] bg-white relative" onSubmit={handleFormSubmit}>
          <span className="absolute top-5 right-5 text-3xl cursor-pointer" onClick={() => onShowModal(false)}><AiOutlineClose/></span>       
          <h3 className="text-[3rem] text-xravel-color-black-1 text-center uppercase mb-5">{activeForm}</h3>
          {activeForm === 'login' && 
          <>
            <Login onInputChange={{email: setEmail, password: setPassword}} email={email} password={password} error={error} isLoading={isLoading} />
            <div className="flex mt-5 items-center gap-2">
              <input className="" type="checkbox" id="remember" />
              <label className="text-[1.4rem]" htmlFor="remember">Remember me</label>
            </div>
            <div className="text-xravel-color-black-7 text-[1.5rem] mt-5">
              <p className="py-[0.5rem] ">Forgot password? <span className="text-xravel-color-orange-1 cursor-pointer" onClick={() => setActiveForm('reset')}>Click here!</span></p>
              <p className="">Don't have an account yet? <span className="text-xravel-color-orange-1 cursor-pointer" onClick={() => setActiveForm('signup')}>Register now!</span></p>  
            </div>
          </>
          }
          {activeForm === 'signup' && <Signup onInputChange={{email: setEmail, password: setPassword, rePassword: setRePassword, fullname: setFullname}} email={email} password={password} rePassword={rePassword} fullname={fullname} error={error} isLoading={isLoading} />}
          {activeForm === 'reset' && <Reset onInputChange={setEmail} error={error} isLoading={isLoading} />}
        </form>
    )
}

export default Form
