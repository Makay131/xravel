import { useReducer } from "react";
import { contactsReducer } from "../reducers/contactsReducer";
import BaseButton from "../interface/BaseButton"

const initialContacts = {
    name: '',
    email: '',
    number: '',
    subject: '',
    message: '',
}
function Contact() {
    const [{name, email, number, subject, message}, dispatch] = useReducer(contactsReducer, initialContacts);
    function handleChangeInput(e, type) {
            dispatch({type: 'updateInputs', payload: {field: type, value: e.target.value}});
    }
    function handleSubmit(e) {
        e.preventDefault();
        if(!name || !email || !number || !subject || !message) return; //TODO: show error here according to which field is empty
        const result = {name, email, number, subject, message};
        console.log(result);
        //TODO: return initial state if the process is ok
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
                    <BaseButton>Send Message</BaseButton>
                </form>
            </div>
        </section>
    )
}

export default Contact
