import GalleryItem from "../interface/GalleryItem";

const dummyData = [
    {
        src: './pics/antarctica.jpg',
        id: 1
    },
    {
        src: './pics/dubai.jpg',
        id: 2
    },
    {
        src: './pics/hawaii.jpg',
        id: 3
    },
    {
        src: './pics/iceland.jpg',
        id: 4
    },
    {
        src: './pics/california.jpg',
        id: 5
    },
    {
        src: './pics/belize.webp',
        id: 6
    },
];

function Gallery() {
    return (
        <section className="home-section">
            <h1 className="section-heading">Gallery</h1>
            <div className="box-container-grid gap-5">
                {dummyData.map(item => <GalleryItem key={item.id} data={item} />)}
            </div>
        </section>
    )
}

export default Gallery
