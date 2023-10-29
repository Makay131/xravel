import { FaLocationDot } from "react-icons/fa6";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import BaseButton from "./BaseButton";

function PackageItem({data, appOptions, booked, navigate}) {

    const handleButtonClicked = () => {
        if(appOptions.isApp) navigate(`${appOptions.goToPath !== null ? (appOptions.goToPath + '/' + data.id) : data.id}`);
        else console.log('TODO: open login form')
    }

    const filledStars = Array.from({length: data.starsCount}, (v, i) => i);
    const outlineStars = Array.from({length: 5 - data.starsCount}, (v, i) => i);

    return (
        <div className="box rounded-[0.5rem] overflow-hidden shadow-xravel-shadow-1">
            <img src={data.imageUrl} alt={`Picture of ${data.name}`} className="w-full h-[25rem] object-cover object-center hover:scale-105 duration-300" />
            <div className="content p-[2rem]">
                <h3 className="text-[2rem] flex items-center gap-2 text-xravel-color-black-6"><span className="text-xravel-color-orange-1"><FaLocationDot /></span> {data.name}</h3>
                <p className="text-[1.7rem] py-[1rem] text-xravel-color-black-7 min-h-auto sm:min-h-[100px]">{data.description}</p>
                <div className="stars flex items-center text-4xl">{filledStars.map(item => <span className="text-xravel-color-orange-1" key={item}><AiFillStar /></span>)}{outlineStars.length > 0 && outlineStars.map(item => <span className="text-xravel-color-orange-1" key={item}><AiOutlineStar /></span>)}</div>
                <div className="price text-[2.5rem] mt-2 mb-5 pt-[1rem] text-xravel-color-black-6"><span className= "font-semibold">{`$${data.generalPrice}`}</span> <span className="text-xravel-color-black-7 text-[1.8rem] line-through">{`$${data.discountPrice}`}</span></div>
                <div className="flex justify-end">
                        {!booked && <BaseButton onButtonClicked={handleButtonClicked}>Book now</BaseButton>}
                        {booked && <BaseButton disabled={booked}>Booked</BaseButton>}
                </div>
            </div>
        </div>
    )
}

export default PackageItem
