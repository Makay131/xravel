import { forwardRef } from "react";
import PackageItem from "../interface/PackageItem";
import { useLocation, useNavigate } from "react-router-dom";
import useApp from "../hooks/useApp";

const dummyData = [
    {
        name: 'Antarctica',
        imageUrl: '/pics/antarctica.jpg',
        description: 'Embrace the endless ice adventure with penguins and much more!',
        starsCount: 5,
        generalPrice: 120,
        discountPrice: 90,
        id: 1,
    },
    {
        name: 'Dubai',
        imageUrl: '/pics/dubai.jpg',
        description: "Dive into Dubai's dazzling dreams such as ziplining and dessert trips!",
        starsCount: 4,
        generalPrice: 120,
        discountPrice: 90,
        id: 2,
    },
    {
        name: 'Hawaii',
        imageUrl: '/pics/hawaii.jpg',
        description: "Hawaiian paradise awaits you with its extreme waves!",
        starsCount: 5,
        generalPrice: 120,
        discountPrice: 90,
        id: 3,
    },
    {
        name: 'Iceland',
        imageUrl: '/pics/iceland.jpg',
        description: "Icelandic wonders beckon by natural beauties and volcanoes!",
        starsCount: 5,
        generalPrice: 120,
        discountPrice: 90,
        id: 4,
    },
    {
        name: 'California',
        imageUrl: '/pics/california.jpg',
        description: "Conquer the desert's fiery heart with a death staring heat!",
        starsCount: 3,
        generalPrice: 120,
        discountPrice: 90,
        id: 5,
    },
    {
        name: 'Belize',
        imageUrl: '/pics/belize.webp',
        description: "Nature's hidden gem. You are being summoned by deep waters!",
        starsCount: 4,
        generalPrice: 120,
        discountPrice: 90,
        id: 6,
    },
];
const PackagesSection = (props, ref) => {
    const navigate = useNavigate();
    const appOptions = useApp();
    return (
        <section className="home-section" ref={ref}>
            <h1 className="section-heading">packages</h1>
            <div className={`${appOptions.isApp ? 'box-container-grid-app gap-5' : 'box-container-grid gap-5'}`}>
                {dummyData.map(data => <PackageItem key={data.id} data={data} appOptions={appOptions} navigate={navigate} />)}
            </div>
        </section>
    )
}

export const Packages = forwardRef(PackagesSection);
