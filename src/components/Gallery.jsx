import GalleryItem from "../interface/GalleryItem";

const dummyData = [
    {
        title: 'affordable hotels',
        src: './pics/antarctica.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, eaque!',
    },
    {
        title: 'food and drinks',
        src: './pics/antarctica.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, eaque!',
    },
    {
        title: 'safety measures',
        src: './pics/antarctica.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, eaque!',
    },
    {
        title: 'around the world',
        src: './pics/antarctica.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, eaque!',
    },
    {
        title: 'affordable flights',
        src: './pics/antarctica.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, eaque!',
    },
    {
        title: 'extreme adventures',
        src: './pics/antarctica.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, eaque!',
    },
];

function Gallery() {
    return (
        <section className="home-section">
            <h1 className="section-heading">Gallery</h1>
            <div className="box-container flex flex-wrap gap-[1.5rem]">
                {dummyData.map(item => <GalleryItem key={item.title} data={item} />)}
            </div>
        </section>
    )
}

export default Gallery
