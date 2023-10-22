function GalleryItem({data}) {
    return (
        <div className="box-gallery overflow-hidden shadow-xravel-shadow-1 border-[1rem] border-white rounded-[0.5rem] h-[25rem] relative">
            <img className="h-full w-full object-cover" src={data.src} alt="" />
            <div className="gallery-content absolute -top-full left-0 h-full w-full flex items-center justify-center bg-xravel-color-overlay-1 p-[2rem] pt-[3.8rem] duration-300">
                <span>See more</span>
            </div>
        </div>
    )
}

export default GalleryItem
