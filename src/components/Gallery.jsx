import { forwardRef } from "react";
import GalleryItem from "../interface/GalleryItem";

const dummyData = [
    {
        src: 'https://drive.google.com/uc?export=download&id=1UAEF_6-D-LXN_6wrcnY3z2R05ZscqRlq',
        id: 1,
        slideList: [
            'https://drive.google.com/uc?export=download&id=1g3X2eY1XPjFAydDm4UMRQ0FrzUV0HZSR',
            'https://drive.google.com/uc?export=download&id=1gd4pp_h_XoPCMbT4_ZzPdA4Bd1wo_JsF',
            'https://drive.google.com/uc?export=download&id=1gUfG8Zx84SAoecwG2rhDZ5gjNJBQDp6j',
        ]
    },
    {
        src: 'https://drive.google.com/uc?export=download&id=1g3X2eY1XPjFAydDm4UMRQ0FrzUV0HZSR',
        id: 2,
        slideList: [
            'https://drive.google.com/uc?export=download&id=1YbKgD3k2Kn3DPhi0Q0L2nle1v1G9fRMF',
            'https://drive.google.com/uc?export=download&id=1mTogruaNnlC6PKXUCp4_IzMkT7oBVzM7',
            'https://drive.google.com/uc?export=download&id=1gUfG8Zx84SAoecwG2rhDZ5gjNJBQDp6j',
        ]
    },
    {
        src: 'https://drive.google.com/uc?export=download&id=1gd4pp_h_XoPCMbT4_ZzPdA4Bd1wo_JsF',
        id: 3,
        slideList: [
            'https://drive.google.com/uc?export=download&id=1mTogruaNnlC6PKXUCp4_IzMkT7oBVzM7',
            'https://drive.google.com/uc?export=download&id=1gUfG8Zx84SAoecwG2rhDZ5gjNJBQDp6j',
            'https://drive.google.com/uc?export=download&id=1UAEF_6-D-LXN_6wrcnY3z2R05ZscqRlq',
        ]
    },
    {
        src: 'https://drive.google.com/uc?export=download&id=1gUfG8Zx84SAoecwG2rhDZ5gjNJBQDp6j',
        id: 4,
        slideList: [
            'https://drive.google.com/uc?export=download&id=1g3X2eY1XPjFAydDm4UMRQ0FrzUV0HZSR',
            'https://drive.google.com/uc?export=download&id=1gd4pp_h_XoPCMbT4_ZzPdA4Bd1wo_JsF',
            'https://drive.google.com/uc?export=download&id=1gUfG8Zx84SAoecwG2rhDZ5gjNJBQDp6j',
        ]
    },
    {
        src: 'https://drive.google.com/uc?export=download&id=1YbKgD3k2Kn3DPhi0Q0L2nle1v1G9fRMF',
        id: 5,
        slideList: [
            'https://drive.google.com/uc?export=download&id=1YbKgD3k2Kn3DPhi0Q0L2nle1v1G9fRMF',
            'https://drive.google.com/uc?export=download&id=1mTogruaNnlC6PKXUCp4_IzMkT7oBVzM7',
            'https://drive.google.com/uc?export=download&id=1gUfG8Zx84SAoecwG2rhDZ5gjNJBQDp6j',
        ]
    },
    {
        src: 'https://drive.google.com/uc?export=download&id=1mTogruaNnlC6PKXUCp4_IzMkT7oBVzM7',
        id: 6,
        slideList: [
            'https://drive.google.com/uc?export=download&id=1YbKgD3k2Kn3DPhi0Q0L2nle1v1G9fRMF',
            'https://drive.google.com/uc?export=download&id=1mTogruaNnlC6PKXUCp4_IzMkT7oBVzM7',
            'https://drive.google.com/uc?export=download&id=1gUfG8Zx84SAoecwG2rhDZ5gjNJBQDp6j',
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
