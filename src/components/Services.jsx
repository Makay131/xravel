import { forwardRef } from "react";
import ServiceItem from "../interface/ServiceItem";

const dummyData = [
    {
        title: 'affordable hotels',
        icon: './svgs/service-icons/hotel.svg',
        description: 'Discover budget-friendly accommodations that prioritize comfort and convenience, ensuring a pleasant stay without breaking the bank.',
    },
    {
        title: 'food and drinks',
        icon: './svgs/service-icons/food.svg',
        description: 'Indulge in a diverse culinary journey with our delectable offerings, ranging from local delicacies to international cuisines, satisfying every palate.',
    },
    {
        title: 'safety measures',
        icon: './svgs/service-icons/safety.svg',
        description: ' Your safety is our top priority; rest assured as we implement stringent safety protocols, ensuring a worry-free and secure travel experience for all.',
    },
    {
        title: 'around the world',
        icon: './svgs/service-icons/world.svg',
        description: 'Embark on a global odyssey and explore diverse cultures, breathtaking landscapes, and historical landmarks, creating unforgettable memories worldwide.',
    },
    {
        title: 'affordable flights',
        icon: './svgs/service-icons/flight.svg',
        description: 'Travel affordably without compromising on quality; find budget-friendly flight options that take you to your dream destinations, making travel dreams a reality.',
    },
    {
        title: 'extreme adventures',
        icon: './svgs/service-icons/adventure.svg',
        description: 'For adrenaline enthusiasts, experience the thrill of a lifetime with our extreme adventures, offering heart-pounding activities in the most exhilarating destinations on the planet.',
    },
];

const ServicesSection = (props, ref) => {
    return (
        <section className="home-section" ref={ref}>
            <h1 className="section-heading">Services</h1>
            <div className="box-container-grid gap-5">
                {dummyData.map(item => <ServiceItem key={item.title} data={item} />)}
            </div>
        </section>
    )
}

export const Services = forwardRef(ServicesSection);
