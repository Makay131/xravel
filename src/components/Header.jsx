import { useState } from "react"
import { createPortal } from "react-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import ModalContent from "./ModalContent";
import Form from "../interface/Form";

function Header() {
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
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="100" 
                height="30" viewBox="0 0 3187.5 984.0685514113698">
                
                <g transform="scale(9.375) translate(10, 10)">
                    <defs id="SvgjsDefs1552"><linearGradient id="SvgjsLinearGradient1557"><stop id="SvgjsStop1558" stopColor="#ffa500" offset="0"></stop><stop id="SvgjsStop1559" stopColor="#ffa500" offset="1"></stop></linearGradient></defs><g id="SvgjsG1553" transform="matrix(1.2218631772768052,0,0,1.2218631772768052,-13.369602890738554,-15.868905692656366)" fill="url(#SvgjsLinearGradient1557)"><g xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M27.722,22.228c-1.856,0.951-3.599,2.092-5.193,3.41c1.414-0.594,2.814-1.193,2.944-1.291   C25.606,24.248,26.558,23.248,27.722,22.228z"></path><path d="M48.315,75.162c0.083-0.09,0.166-0.182,0.246-0.299c0.814-1.185,1.48-2.925,1.961-3.257   c0.481-0.333,0.851,0.556,0.813-0.409c-0.035-0.959-0.738-3.365-1.665-3.401c-0.925-0.039-1.85-1.406-2.073-1.851   c-0.222-0.444-1.517-2.998-1.887-2.294l-0.481,2.923c-0.148-0.037-1.74-0.741-1.629-1.11c0.111-0.371,0.026-0.666-0.005-0.815   c-0.032-0.148-1.253-1.307-1.772-0.617c-0.518,0.692-1.109,1.47-1.22,1.32c-0.11-0.147-1.406,0.149-1.48,0.26   c-0.074,0.111-1.776,1.775-1.776,1.775s-2.554,2.073-2.554,2.442c0,0.371,0.074,3.33,1.185,3.812c1.11,0.482,1.961-0.591,3.516,0   c1.555,0.593,4.699,0.443,5.218,0.963c0.511,0.512,1.595,0.877,1.837,0.993c-1.891,0.396-3.849,0.606-5.856,0.606   c-14.305,0-26.185-10.575-28.236-24.318c0.783,0.617,6.527,1.572,6.527,1.953c0,0.404,2.821,4.379,3.764,5.827   c0.943,1.447,1.077-0.338,1.077-0.338s0.268-2.133,0.503-3.076c0.236-0.941,2.154-2.051,3.063-2.354   c0.909-0.303,0.573,0.572,0.909,1.682c0.336,1.111,1.48,0.438,1.48,0.539c0,0.1-0.168,1.65-0.201,1.986   c-0.034,0.336,1.145,1.616,1.245,2.052c0.101,0.438-0.842-0.739-1.783-1.345c-0.943-0.606-0.438,4.104,5.316,5.485   c5.755,1.38,5.688-0.438,4.981-0.472c-0.706-0.033-5.89-0.773-6.26-1.178c-0.37-0.403-0.976-1.11-1.212-1.312   c-0.235-0.204,0-1.28-1.346-2.93c-1.346-1.649,1.818-0.368,2.423-0.57c0.605-0.203,0.875-1.684,0.572-2.087   c-0.303-0.405-1.313-1.279,1.245-1.819c2.559-0.538,3.298-3.533,3.265-3.969c-0.034-0.438-0.438-1.212-0.067-1.65   c0.37-0.438-0.034-0.673-0.673-0.706c-0.64-0.034-0.336-0.371,0.472-0.471c0.807-0.101,1.379,0.1,1.312,0.673   c-0.067,0.573-0.27,2.121,0.808,1.514c1.077-0.605,0.31-2.154,0.31-2.154s-1.05-1.008,1.71-1.816   c2.759-0.808,3.467-6.185,2.458-6.723c-1.009-0.539,1.242-1.556,2.186-1.69c0.942-0.135,2.625-1.347,2.692-0.607   c0.067,0.741,0.382,2.658,0.382,2.658s0.897,2.525,1.974,0.035c1.077-2.49,5.048-5.317,5.52-5.856s3.433-0.942,3.77-1.683   c0.335-0.741-5.856-3.298-6.582-3.029c-0.726,0.269-5.129-0.404-6.476-2.289c-1.347-1.884-3.837-1.077-3.702-0.067   c0.135,1.009-5.722-1.414-6.059-1.481c-0.336-0.067-3.298-2.288-3.23-3.029c0.044-0.49-0.656-1.149-1.696-1.466   c2.41-0.663,4.943-1.024,7.561-1.024c10.395,0,19.507,5.586,24.501,13.911c0.212-0.408,0.446-0.791,0.699-1.145   c-5.269-8.38-14.592-13.966-25.201-13.966c-16.405,0-29.752,13.347-29.752,29.752s13.347,29.752,29.752,29.752   c5.342,0,10.452-1.49,14.791-3.965c-0.339-0.786-0.124-1.125-0.078-1.375C54.032,72.774,50.406,74.582,48.315,75.162z    M27.722,22.228c-1.164,1.02-2.116,2.02-2.249,2.12c-0.13,0.098-1.53,0.697-2.944,1.291C24.123,24.32,25.866,23.179,27.722,22.228z   "></path><path d="M92.463,52.327l-20.085-5.753l0.375-7.572c0-2.13-1.729-7.556-3.857-7.556c-0.801,0-1.544,0.767-2.159,1.838   c-0.237,0.411-0.452,0.869-0.646,1.343c-0.647,1.576-1.047,3.354-1.047,4.375l0.375,7.72l-20.09,5.605   c-0.152,0.045-0.272,0.166-0.311,0.322c-0.039,0.155,0.009,0.319,0.126,0.429l3.877,3.686c0.083,0.075,0.195,0.119,0.307,0.119   c0.016,0,0.036,0,0.057-0.004c0.119-0.014,10.869-1.359,16.432-1.993l0.281,5.747l0.112,2.299l0.335,6.857l-9.384,2.837   c-0.15,0.045-0.265,0.169-0.301,0.323c-0.038,0.15,0.007,0.311,0.117,0.422l2.02,1.971c0.085,0.079,0.197,0.127,0.312,0.127   c0.034,0,0.066-0.01,0.102-0.015c0.058-0.015,5.145-1.201,7.924-1.631c0.387,1.011,0.911,1.875,1.562,1.875   c0.654,0,1.183-0.89,1.566-1.919c2.638,0.394,7.928,1.66,7.985,1.674c0.036,0.006,0.072,0.016,0.104,0.016   c0.118,0,0.232-0.049,0.317-0.134l1.949-1.968c0.108-0.114,0.153-0.272,0.113-0.422c-0.037-0.15-0.15-0.273-0.298-0.319   l-9.393-2.919l0.731-14.88c5.242,0.598,16.449,2.038,16.569,2.052c0.021,0.004,0.042,0.004,0.058,0.004   c0.117,0,0.229-0.045,0.314-0.128l3.74-3.681c0.112-0.111,0.158-0.276,0.118-0.428C92.733,52.492,92.614,52.371,92.463,52.327z"></path></g></g><g id="SvgjsG1554" transform="matrix(2.970885000602917,0,0,2.970885000602917,119.99999787505746,-33.98692599352113)" fill="#f9f8eb"><path d="M11.52 17.44 l-3.76 11.72 l3.44 10.76 l-3.96 0 l-1.48 -4.56 l-1.48 4.56 l-4 0 l3.48 -10.76 l-3.76 -11.72 l4 0 l1.76 5.48 l1.76 -5.48 l4 0 z M19.32 18.28 c2.72 0 4.92 2.16 4.92 4.88 l0 1.92 l-3.8 0 l0 -1.92 c0 -0.64 -0.48 -1.12 -1.12 -1.12 l-0.84 0 c-0.6 0 -1.12 0.48 -1.12 1.12 l-0.08 16.88 l-3.76 0 l0.08 -16.88 l0 -5.76 l3.76 0 l0 1 c0.36 -0.08 0.76 -0.12 1.12 -0.12 l0.84 0 z M35.6 32.76 l0 7.2 l-3.68 0 l0 -0.12 c-0.36 0.08 -0.72 0.12 -1.12 0.12 c-2.8 0 -5.04 -2.24 -5.04 -5.04 l0 -4.28 c0 -1.12 0.44 -2.16 1.24 -2.96 c0.76 -0.76 1.8 -1.2 2.92 -1.2 l1.92 0 l0 -4.32 c0 -0.6 -0.52 -1.12 -1.12 -1.12 l-0.2 0 c-0.64 0 -1.12 0.52 -1.12 1.12 l0 3.04 l-3.72 0 l0 -3.04 c0 -2.68 2.16 -4.84 4.84 -4.84 l0.2 0 c2.68 0 4.84 2.16 4.84 4.84 z M30.800000000000004 36.24 c0.6 0 1.12 -0.48 1.12 -1.08 l-0.04 -4.92 l-1.96 -0.04 c-0.16 0 -0.24 0.08 -0.32 0.12 c-0.04 0.08 -0.12 0.16 -0.12 0.32 l0 4.28 c0 0.72 0.6 1.32 1.32 1.32 z M39.96 39.96 c-0.4 -3.4 -0.96 -6.8 -1.48 -10.12 c-0.6 -3.88 -1.28 -8.28 -1.72 -12.36 l3.88 0 c0.32 3.12 0.76 6.24 1.24 9.28 c0.04 -0.2 0.08 -0.4 0.08 -0.56 c0.16 -1.6 0.36 -3.12 0.52 -4.56 c0.2 -1.4 0.36 -2.76 0.48 -4.08 l3.8 0 c-0.12 1.44 -0.28 3.2 -0.48 4.6 s-0.36 2.88 -0.52 4.4 l0 0.16 c-0.44 2.76 -0.8 5.48 -1.16 8.12 c-0.2 1.68 -0.44 3.44 -0.68 5.16 l-3.96 0 l0 -0.04 z M53.68 39.92 c-2.88 0 -5.2 -2.36 -5.2 -5.24 l0 -12.48 c0 -2.64 2.16 -4.8 4.8 -4.8 l0.84 0 c2.64 0 4.8 2.16 4.8 4.8 l0 5.24 l-6.72 0.12 l0 7.12 c0 0.84 0.64 1.52 1.48 1.52 s1.52 -0.68 1.52 -1.52 l0 -2.48 l3.72 0 l0 2.48 c0 2.88 -2.36 5.24 -5.24 5.24 z M54.12 21.08 l-0.84 0 c-0.6 0 -1.08 0.52 -1.08 1.12 l0 1.68 l3 -0.08 l0 -1.6 c0 -0.6 -0.48 -1.12 -1.08 -1.12 z M67.32 36.16 l0 3.8 l-1.16 0 c-2.88 0 -5.24 -2.36 -5.24 -5.24 l0 -23.28 l3.8 0 l0 23.28 c0 0.76 0.64 1.44 1.44 1.44 l1.16 0 z"></path></g>
                </g>
                </svg>
            </a>

            <nav className={`text-white ${showMenu ? 'active' : ''}`}>
                <a className="mr-7" href="#">Home</a>
                <a className="mr-7" href="#">Locations</a>
                <a className="mr-7" href="#">Services</a>
                <a className="mr-7" href="#">Gallery</a>
            </nav>

            <div className="text-white" onClick={handleModalClick}>
                Book Now
            </div>

            {showModal && createPortal(
                <ModalContent>
                    <Form onShowModal={setShowModal}/>
                </ModalContent>
            , document.body)}
        </header>
    )
}

export default Header
