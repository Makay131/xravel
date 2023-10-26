import { forwardRef } from "react";
import GalleryItem from "../interface/GalleryItem";

const dummyData = [
    {
        src: './pics/antarctica.jpg',
        id: 1,
        slideList: [
            './pics/dubai.jpg',
            './pics/hawaii.jpg',
            './pics/iceland.jpg',
        ]
    },
    {
        src: './pics/dubai.jpg',
        id: 2,
        slideList: [
            './pics/california.jpg',
            './pics/belize.webp',
            './pics/iceland.jpg',
        ]
    },
    {
        src: './pics/hawaii.jpg',
        id: 3,
        slideList: [
            './pics/belize.webp',
            './pics/iceland.jpg',
            './pics/antarctica.jpg',
        ]
    },
    {
        src: './pics/iceland.jpg',
        id: 4,
        slideList: [
            './pics/dubai.jpg',
            './pics/hawaii.jpg',
            './pics/iceland.jpg',
        ]
    },
    {
        src: './pics/california.jpg',
        id: 5,
        slideList: [
            './pics/california.jpg',
            './pics/belize.webp',
            './pics/iceland.jpg',
        ]
    },
    {
        src: './pics/belize.webp',
        id: 6,
        slideList: [
            './pics/california.jpg',
            './pics/belize.webp',
            './pics/iceland.jpg',
        ]
    },
];

const GallerySection = (props, ref) => {
    return (
        <section className="home-section" ref={ref}>
            <h1 className="section-heading">Gallery</h1>
            <div className="box-container-grid gap-5">
                {dummyData.map(item => <GalleryItem key={item.id} data={item} />)}
            </div>
        </section>
    )
}

export const Gallery = forwardRef(GallerySection)
