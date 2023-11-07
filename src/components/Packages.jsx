import { forwardRef } from "react";
import PackageItem from "../interface/PackageItem";
import { useLoaderData, useNavigate } from "react-router-dom";
import useApp from "../hooks/useApp";

const PackagesSection = ({data, booked = false, onShowModal}, ref) => {
    const navigate = useNavigate();
    const appOptions = useApp();
    const onlyArrayData = useLoaderData();
    const computedData = Array.isArray(onlyArrayData) ? onlyArrayData : data;
    return (
        <section className="home-section" ref={ref}>
            <h1 className="section-heading">packages</h1>
            <div className={`${appOptions.isApp ? 'box-container-grid-app gap-5' : 'box-container-grid gap-5'}`}>
                {computedData?.map(item => <PackageItem key={item.id} onShowModal={onShowModal} data={item} appOptions={appOptions} booked={booked} navigate={navigate} />)}
            </div>
        </section>
    )
}

export const Packages = forwardRef(PackagesSection);
