import { AiOutlineClose } from "react-icons/ai";
import Signup from "./Signup";
import Login from "./Login";
import { useState } from "react";
import Reset from "./Reset";

import {getUsers} from "../services/index";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function Form({onShowModal}) {
    const [activeForm, setActiveForm] = useState('login');

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [fullname, setFullname] = useState("");

    const navigate = useNavigate();

    async function handleFormSubmit(e) {
      e.preventDefault();
      let result = {};
      if(activeForm === 'login') {
        if(!email.length || !password.length) return;
        result = {...result, email, password};
        const response = await getUsers();
        if(response.data.filter(res => res.email === email)) {
            navigate('/app')
          }
      }
      if(activeForm === 'signup') {
        if(!email.length || !password.length || !rePassword.length || !fullname.length) return;
        if(password !== rePassword) return; //TODO: show error here
        result = {...result, email, password, fullname};
        console.log(result);
      }
      if(activeForm === 'reset') {
        if(!email.length) return;
        //TODO: show check your email message
        setActiveForm('login');
      }
      
    }
    return (
        <form className="m-2 py-[1.5rem] px-[2rem] rounded-[0.5rem] max-w-[50rem] bg-white relative" onSubmit={handleFormSubmit}>
          <span className="absolute top-5 right-5 text-3xl cursor-pointer" onClick={() => onShowModal(false)}><AiOutlineClose/></span>       
          <h3 className="text-[3rem] text-xravel-color-black-1 text-center uppercase mb-5">{activeForm}</h3>
          {activeForm === 'login' && 
          <>
            <Login onInputChange={{email: setEmail, password: setPassword}} email={email} password={password} />
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
          {activeForm === 'signup' && <Signup onInputChange={{email: setEmail, password: setPassword, rePassword: setRePassword, fullname: setFullname}} email={email} password={password} rePassword={rePassword} fullname={fullname} />}
          {activeForm === 'reset' && <Reset onActiveForm={setActiveForm} onInputChange={setEmail} />}
        </form>
    )
}

export default Form
