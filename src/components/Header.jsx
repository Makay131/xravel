import { useState } from "react"
import { createPortal } from "react-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import ModalContent from "./ModalContent";
import Form from "../interface/Form";
import BaseButton from "../interface/BaseButton";
import Logo from "../assets/logo/Logo";
import HomeNavLinks from "../interface/HomeNavLinks";

function Header({onScrollTo, showModal, onShowModal}) {
    
    const [showMenu, setShowMenu] = useState(false);
    function handleModalClick() {
        onShowModal(true)
    }
    function handleMenuClick() {
        setShowMenu(!showMenu)
    }
    return (
        <header className="fixed top-0 left-0 right-0 bg-xravel-color-black-3 z-[1000] flex items-center justify-between py-[2rem] px-[9%]">
            <div className="text-white text-[3rem] mr-5 cursor-pointer md:hidden" onClick={handleMenuClick}>
                {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
            
            <span className="mr-auto cursor-pointer">
                <Logo />
            </span>

            <HomeNavLinks showMenu={showMenu} onScrollTo={onScrollTo} />
            <BaseButton onButtonClicked={handleModalClick}>Book Now</BaseButton>

            {showModal && createPortal(
                <ModalContent>
                    <Form onShowModal={onShowModal}/>
                </ModalContent>
            , document.body)}
        </header>
    )
}

export default Header
