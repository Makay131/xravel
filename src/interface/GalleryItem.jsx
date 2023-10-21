function GalleryItem({data}) {
    return (
        <div className="box-gallery overflow-hidden shadow-xravel-shadow-1 border-[1rem] border-white rounded-[0.5rem] h-[25rem] relative">
            <img className="h-full w-full object-cover" src={data.src} alt="" />
            <div className="gallery-content absolute -top-full left-0 h-full w-full text-center bg-xravel-color-overlay-1 p-[2rem] pt-[3.8rem] duration-300">
                <h3 className="text-[2.5rem] text-xravel-color-orange-1">{data.title}</h3>
                <p className="text-[1.5rem] text-[#eee] py-[0.5rem]">{data.description}</p>
                <a href="">See more</a>
            </div>
        </div>
    )
}

export default GalleryItem
