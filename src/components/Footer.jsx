function Footer() {
    return (
        <section className="home-section bg-xravel-color-black-6">
            <div className="box-container flex flex-wrap gap-[2rem]">
                <div className="footer-box">
                    <h3 className="footer-heading">about us</h3>
                    <p className="text-[1.5rem] py-[0.7rem] pr-5 text-xravel-color-white-2">At Xravel, our mission is to create memories that last a lifetime. We are committed to delivering safe, exhilarating, and unforgettable experiences to all our adventurers.</p>
                </div>
                <div className="footer-box">
                    <h3 className="footer-heading">branch locations</h3>
                    <a href="#">Türkiye</a>
                    <a href="#">US</a>
                    <a href="#">Sri Lanka</a>
                    <a href="#">Canada</a>
                </div>
                <div className="footer-box">
                    <h3 className="footer-heading">quick links</h3>
                    <a href="#">Home</a>
                    <a href="#">Locations</a>
                    <a href="#">Services</a>
                    <a href="#">Gallery</a>
                </div>
                <div className="footer-box">
                    <h3 className="footer-heading">follow us</h3>
                    <a href="#">Instagram</a>
                    <a href="#">X</a>
                    <a href="#">Facebook</a>
                    <a href="#">LinkedIn</a>
                </div>
            </div>
                <h1 className="text-center py-[2rem] px-[1rem] mt-4 text-[1.5rem] sm:text-[1.8rem] font-normal text-white border-t-[0.1rem] border-xravel-color-white-3 "><span className="text-xravel-color-orange-1">Xravel</span> - since 2018 | &copy; All rights reserved.</h1>
        </section>
    )
}

export default Footer
