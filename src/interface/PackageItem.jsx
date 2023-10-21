import { FaLocationDot } from "react-icons/fa6";

function PackageItem({data}) {
    return (
        <div className="box rounded-[0.5rem] overflow-hidden shadow-xravel-shadow-1">
            <img src={data.imageUrl} alt={`Picture of ${data.name}`} className="h-[25rem] w-full object-cover" />
            <div className="content p-[2rem]">
                <h3 className="text-[2rem] text-xravel-color-black-6"><FaLocationDot /> {data.name}</h3>
                <p className="text-[1.7rem] py-[1rem] text-xravel-color-black-7">{data.description}</p>
                <div className="stars">{data.starsCount} stars</div>
                <div className="price text-[2rem] pt-[1rem] text-xravel-color-black-6">{`$${data.generalPrice}`} <span className="text-xravel-color-black-7 text-[1.5rem] line-through">{`$${data.discountPrice}`}</span></div>
                <a href="#">Book now</a>
            </div>
        </div>
    )
}

export default PackageItem
