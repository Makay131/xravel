import { forwardRef } from "react";
import ServiceItem from "../interface/ServiceItem";

import config from "../config/homepage.json";

const ServicesSection = (props, ref) => {
    return (
        <section className="home-section" ref={ref}>
            <h1 className="section-heading">Services</h1>
            <div className="box-container-grid gap-5">
                {config?.services.map(item => <ServiceItem key={item.title} data={item} />)}
            </div>
        </section>
    )
}

export const Services = forwardRef(ServicesSection);
