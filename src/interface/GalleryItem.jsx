import { useState } from "react"
import BaseButton from "./BaseButton"
import { createPortal } from "react-dom";
import ModalContent from "../components/ModalContent";
import SwiperComponent from "../components/SwiperComponent";

function GalleryItem({data}) {
    const [showSlides, setShowSlides] = useState(false);
    return (
        <div className="box-gallery overflow-hidden shadow-xravel-shadow-1 border-[1rem] border-white rounded-[0.5rem] h-[25rem] relative">
            <img className="h-full w-full object-cover" src={data.src} alt="//TODO:" />
            <div className="gallery-content absolute -top-full left-0 h-full w-full flex items-center justify-center bg-xravel-color-overlay-1 p-[2rem] pt-[3.8rem] duration-300">
                <BaseButton onButtonClicked={() => setShowSlides(true)}>See More</BaseButton>
            </div>
            {showSlides && createPortal(<ModalContent>
                <SwiperComponent slideList={data.slideList} onShowSlides={setShowSlides} />
            </ModalContent>, document.body)}
        </div>
    )
}

export default GalleryItem
