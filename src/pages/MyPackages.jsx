import {Packages} from "../components/Packages"

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

const ids= [1,4];

const finalDummyData = dummyData.filter(item => ids.includes(item.id))

function MyPackages() {
    return (
        <Packages dataDummy={finalDummyData} booked={true} />
    )
}

export default MyPackages