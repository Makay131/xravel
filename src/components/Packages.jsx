import { forwardRef } from "react";
import PackageItem from "../interface/PackageItem";
import { useNavigate } from "react-router-dom";
import useApp from "../hooks/useApp";

const dummyData = [
    {
        name: 'Antarctica',
        imageUrl: 'https://drive.google.com/uc?export=download&id=1UAEF_6-D-LXN_6wrcnY3z2R05ZscqRlq',
        description: 'Embrace the endless ice adventure with penguins and much more!',
        starsCount: 5,
        generalPrice: 120,
        discountPrice: 90,
        id: 1,
    },
    {
        name: 'Dubai',
        imageUrl: 'https://drive.google.com/uc?export=download&id=1g3X2eY1XPjFAydDm4UMRQ0FrzUV0HZSR',
        description: "Dive into Dubai's dazzling dreams such as ziplining and dessert trips!",
        starsCount: 4,
        generalPrice: 120,
        discountPrice: 90,
        id: 2,
    },
    {
        name: 'Hawaii',
        imageUrl: 'https://drive.google.com/uc?export=download&id=1gd4pp_h_XoPCMbT4_ZzPdA4Bd1wo_JsF',
        description: "Hawaiian paradise awaits you with its extreme waves!",
        starsCount: 5,
        generalPrice: 120,
        discountPrice: 90,
        id: 3,
    },
    {
        name: 'Iceland',
        imageUrl: 'https://drive.google.com/uc?export=download&id=1gUfG8Zx84SAoecwG2rhDZ5gjNJBQDp6j',
        description: "Icelandic wonders beckon by natural beauties and volcanoes!",
        starsCount: 5,
        generalPrice: 120,
        discountPrice: 90,
        id: 4,
    },
    {
        name: 'California',
        imageUrl: 'https://drive.google.com/uc?export=download&id=1YbKgD3k2Kn3DPhi0Q0L2nle1v1G9fRMF',
        description: "Conquer the desert's fiery heart with a death staring heat!",
        starsCount: 3,
        generalPrice: 120,
        discountPrice: 90,
        id: 5,
    },
    {
        name: 'Belize',
        imageUrl: 'https://drive.google.com/uc?export=download&id=1mTogruaNnlC6PKXUCp4_IzMkT7oBVzM7',
        description: "Nature's hidden gem. You are being summoned by deep waters!",
        starsCount: 4,
        generalPrice: 120,
        discountPrice: 90,
        id: 6,
    },
];
const PackagesSection = ({dataDummy, booked = false, onShowModal}, ref) => {
    const navigate = useNavigate();
    const appOptions = useApp();
    return (
        <section className="home-section" ref={ref}>
            <h1 className="section-heading">packages</h1>
            <div className={`${appOptions.isApp ? 'box-container-grid-app gap-5' : 'box-container-grid gap-5'}`}>
                {(dataDummy ? dataDummy : dummyData).map(data => <PackageItem key={data.id} onShowModal={onShowModal} data={data} appOptions={appOptions} booked={booked} navigate={navigate} />)}
            </div>
        </section>
    )
}

export const Packages = forwardRef(PackagesSection);
