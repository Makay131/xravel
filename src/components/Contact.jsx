import { useReducer, useState } from "react";
import { contactsReducer, initialContacts } from "../reducers/contactsReducer";
import BaseButton from "../interface/BaseButton"
import toast from "react-hot-toast";
import { submitMessage } from "../services";


function Contact() {
    const [{name, email, number, subject, message}, dispatch] = useReducer(contactsReducer, initialContacts);
    const [loading,setLoading] = useState(false);
    function handleChangeInput(e, type) {
            dispatch({type: 'updateInputs', payload: {field: type, value: e.target.value}});
    }
    async function handleSubmit(e) {
        setLoading(true)
        e.preventDefault();
        if(!name || !email || !number || !subject || !message) {
            toast.error("Please fill all the fields!")
            setLoading(false)
            return;
        }
        const result = {name, email, number, subject, message};
        await submitMessage(result);
        setLoading(false)
        dispatch({type: "resetInputs"})
    }
    return (
        <section className="home-section">
            <h1 className="section-heading">Contact</h1>
            <div className="row flex items-center flex-wrap gap-[1.5rem]">
                <div className="image grow shrink basis-[35rem]">
                    <img className="w-full" src="/pics/travel.svg" alt="" />
                </div>
                <form className="grow shrink basis-[50rem] p-[2rem] shadow-xravel-shadow-1 rounded-[0.5rem]" onSubmit={handleSubmit}>
                    <div className="input-box">
                        <input className="contact-field" type="text" placeholder="Name" value={name} onChange={(e) => handleChangeInput(e, 'name')} />
                        <input className="contact-field" type="email" placeholder="Email" value={email} onChange={(e) => handleChangeInput(e, 'email')} />
                    </div>
                    <div className="input-box">
                        <input className="contact-field" type="tel" placeholder="Number" value={number} onChange={(e) => handleChangeInput(e, 'number')} />
                        <input className="contact-field" type="text" placeholder="Subject" value={subject} onChange={(e) => handleChangeInput(e, 'subject')} />
                    </div>
                    <textarea className="contact-field h-[20rem] resize-none w-full" name="" id="" cols="30" rows="10" placeholder="Your message..." value={message} onChange={(e) => handleChangeInput(e, 'message')}></textarea>
                    <BaseButton>{loading ? 'Sending...' : 'Send Message'}</BaseButton>
                </form>
            </div>
        </section>
    )
}

export default Contact
