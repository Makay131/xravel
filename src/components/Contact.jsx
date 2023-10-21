function Contact() {
    return (
        <section className="home-section">
            <h1 className="section-heading">Contact</h1>
            <div className="row flex items-center flex-wrap gap-[1.5rem]">
                <div className="image grow shrink basis-[35rem]">
                    <img className="w-full" src="./pics/antarctica.jpg" alt="" />
                </div>
                <form className="grow shrink basis-[50rem] p-[2rem] shadow-xravel-shadow-1 rounded-[0.5rem]">
                    <div className="input-box">
                        <input className="contact-field" type="text" placeholder="Name" />
                        <input className="contact-field" type="email" placeholder="Email" />
                    </div>
                    <div className="input-box">
                        <input className="contact-field" type="tel" placeholder="Number" />
                        <input className="contact-field" type="text" placeholder="Subject" />
                    </div>
                    <textarea className="contact-field h-[20rem] resize-none w-full" name="" id="" cols="30" rows="10" placeholder="Your message..."></textarea>
                    <button>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
