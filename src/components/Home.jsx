import { useState } from "react";

const vidBTNClass = `w-[1.5rem] h-[1.5rem] inline-block rounded-[50%] bg-white cursor-pointer my-0 mx-[2rem]`;
const vidBTNActiveClass = `bg-xravel-color-orange-1`
const dummyData = [
    {
        name: "first",
        src: 'first.mp4'
    },
    {
        name: "second",
        src: 'second.mp4'
    },
    {
        name: "third",
        src: 'third.mp4'
    },
    {
        name: "fourth",
        src: 'fourth.mp4'
    },
    {
        name: "fifth",
        src: 'fifth.mp4'
    },
];
const arrayLength = dummyData.length;
function Home() {
    const [activeIndex, setActiveIndex] = useState(0);
    const videoButtons = Array.from({length: arrayLength}, (_, i) => i + 1);

    function handleVideoBtnClick(index) {
        setActiveIndex(index);
    }
    return (
        <section className="home-section min-h-screen flex items-center justify-center flex-col relative z-0">
            <div className="text-center">
                <h3 className="text-[4.5rem] lg:text-8xl font-bold text-xravel-color-orange-1 uppercase [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">adventure is worthwile</h3>
                <p className="text-[2.5rem] lg:mt-3 lg:text-5xl capitalize text-white py-[0.5rem] px-0 mb-5 sm:mb-6 lg:mb-10 drop-shadow-[1px_1px_10px_rgba(255,255,299)]">discover new places with us, adventure awaits</p>
                <span>discover more</span>
            </div>

            <div className="p-[0.8rem] rounded-[5rem] bg-xravel-color-overlay-1 relative top-[10rem]">
                {videoButtons.map((btn,index) => <span key={index} className={`${vidBTNClass} ${index === activeIndex ? vidBTNActiveClass : ''} `} onClick={() => handleVideoBtnClick(index)}></span>)}
            </div>

            <div>
                <video className="absolute top-0 left-0 z-[-1] w-full h-full object-cover" src={dummyData[activeIndex].src} loop autoPlay muted></video>
            </div>
        </section>
    )
}

export default Home
