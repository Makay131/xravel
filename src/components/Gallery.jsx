import { forwardRef } from "react";
import GalleryItem from "../interface/GalleryItem";

const GallerySection = ({data}, ref) => {
    return (
        <section className="home-section" ref={ref}>
            <h1 className="section-heading">Gallery</h1>
            <div className="box-container-grid gap-5">
                {data?.map(item => <GalleryItem key={item.id} data={item} />)}
            </div>
        </section>
    )
}

export const Gallery = forwardRef(GallerySection)
