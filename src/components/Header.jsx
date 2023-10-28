import { useState } from "react"
import { createPortal } from "react-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import ModalContent from "./ModalContent";
import Form from "../interface/Form";
import BaseButton from "../interface/BaseButton";
import Logo from "../assets/logo/Logo";

function Header({onScrollTo}) {
    const [showModal, setShowModal] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    function handleModalClick() {
        setShowModal(true)
    }
    function handleMenuClick() {
        setShowMenu(!showMenu)
    }
    return (
        <header className="fixed top-0 left-0 right-0 bg-xravel-color-black-3 z-[1000] flex items-center justify-between py-[2rem] px-[9%]">
            <div className="text-white text-[3rem] mr-5 cursor-pointer md:hidden" onClick={handleMenuClick}>
                {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
            
            <a className="mr-auto" href="#">
                <Logo />
            </a>

            <nav className={`text-white ${showMenu ? 'active' : ''}`}>
                <span className="header-nav-link" onClick={() => onScrollTo('home')}>Home</span>
                <span className="header-nav-link" onClick={() => onScrollTo('locations')}>Locations</span>
                <span className="header-nav-link" onClick={() => onScrollTo('services')}>Services</span>
                <span className="header-nav-link" onClick={() => onScrollTo('gallery')}>Gallery</span>
            </nav>


            <BaseButton onButtonClicked={handleModalClick}>Book Now</BaseButton>

            {showModal && createPortal(
                <ModalContent>
                    <Form onShowModal={setShowModal}/>
                </ModalContent>
            , document.body)}
        </header>
    )
}

export default Header
