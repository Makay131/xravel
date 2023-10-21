import PackageItem from "../interface/PackageItem";

const dummyData = [
    {
        name: 'Antarctica',
        imageUrl: './pics/antarctica.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, eaque!',
        starsCount: 5,
        generalPrice: 120,
        discountPrice: 90,
        id: 1,
    },
    {
        name: 'Antarctica',
        imageUrl: './pics/antarctica.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, eaque!',
        starsCount: 5,
        generalPrice: 120,
        discountPrice: 90,
        id: 2,
    },
    {
        name: 'Antarctica',
        imageUrl: './pics/antarctica.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, eaque!',
        starsCount: 5,
        generalPrice: 120,
        discountPrice: 90,
        id: 3,
    },
    {
        name: 'Antarctica',
        imageUrl: './pics/antarctica.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, eaque!',
        starsCount: 5,
        generalPrice: 120,
        discountPrice: 90,
        id: 4,
    },
    {
        name: 'Antarctica',
        imageUrl: './pics/antarctica.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, eaque!',
        starsCount: 5,
        generalPrice: 120,
        discountPrice: 90,
        id: 5,
    },
    {
        name: 'Antarctica',
        imageUrl: './pics/antarctica.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, eaque!',
        starsCount: 5,
        generalPrice: 120,
        discountPrice: 90,
        id: 6,
    },
];
function Packages() {
    return (
        <section className="home-section">
            <h1 className="section-heading">packages</h1>
            <div className="box-container flex flex-wrap gap-[2rem]">
                {dummyData.map(data => <PackageItem key={data.id} data={data} />)}
            </div>
        </section>
    )
}

export default Packages
