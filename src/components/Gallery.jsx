import GalleryItem from "../interface/GalleryItem";

const dummyData = [
    {
        src: './pics/antarctica.jpg',
    },
    {
        src: './pics/dubai.jpg',
    },
    {
        src: './pics/hawaii.jpg',
    },
    {
        src: './pics/iceland.jpg',
    },
    {
        src: './pics/california.jpg',
    },
    {
        src: './pics/belize.webp',
    },
];

function Gallery() {
    return (
        <section className="home-section">
            <h1 className="section-heading">Gallery</h1>
            <div className="box-container-grid gap-5">
                {dummyData.map(item => <GalleryItem key={item.title} data={item} />)}
            </div>
        </section>
    )
}

export default Gallery
