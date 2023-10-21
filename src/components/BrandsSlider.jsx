const dummyData = [
    {
        src: "./svgs/dude-perfect-1.svg"
    },
    {
        src: "./svgs/dude-wipes.svg"
    },
    {
        src: "./svgs/extreme.svg"
    },
    {
        src: "./svgs/go-pro.svg"
    },
    {
        src: "./svgs/new-england-patriots.svg"
    },
    {
        src: "./svgs/pepsi.svg"
    },
    {
        src: "./svgs/red-bull.svg"
    },
]

function BrandsSlider() {
    return (
        <section className="py-[3rem] lg:py-[4rem] 2xl:py-[5rem] overflow-hidden relative">
            <div className="absolute top-0 left-0 w-[100px] h-full z-[2] bg-gradient-to-l from-[rgba(255,255,255,0)] to-white"></div>
            <div className="absolute top-0 right-0 w-[100px] h-full z-[2] bg-gradient-to-r from-[rgba(255,255,255,0)] to-white"></div>
            <div className="logos overflow-hidden py-14 whitespace-nowrap">
                <div className="logos-slide inline-block whitespace-nowrap animate-slide-brand">
                    {dummyData.map(item => <img className="h-12 sm:h-16 md:h-28 mx-20 inline-block" key={item.src} src={item.src} />)}
                    {dummyData.map(item => <img className="h-12 sm:h-16 md:h-28 mx-20 inline-block" key={item.src} src={item.src} />)}
                    {dummyData.map(item => <img className="h-12 sm:h-16 md:h-28 mx-20 inline-block" key={item.src} src={item.src} />)}
                    {dummyData.map(item => <img className="h-12 sm:h-16 md:h-28 mx-20 inline-block" key={item.src} src={item.src} />)}
                </div>
            </div>
        </section>
    )
}

export default BrandsSlider
