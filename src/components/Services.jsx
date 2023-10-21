import ServiceItem from "../interface/ServiceItem";

const dummyData = [
    {
        title: 'affordable hotels',
        icon: './pics/antarctica.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, eaque!',
    },
    {
        title: 'food and drinks',
        icon: './pics/antarctica.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, eaque!',
    },
    {
        title: 'safety measures',
        icon: './pics/antarctica.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, eaque!',
    },
    {
        title: 'around the world',
        icon: './pics/antarctica.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, eaque!',
    },
    {
        title: 'affordable flights',
        icon: './pics/antarctica.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, eaque!',
    },
    {
        title: 'extreme adventures',
        icon: './pics/antarctica.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, eaque!',
    },
];

function Services() {
    return (
        <section className="home-section">
            <h1 className="section-heading">Services</h1>
            <div className="box-container-grid gap-5">
                {dummyData.map(item => <ServiceItem key={item.title} data={item} />)}
            </div>
        </section>
    )
}

export default Services
