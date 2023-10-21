function ServiceItem({data}) {
    return (
        <div className="box rounded-[0.5rem] p-[1rem] text-center hover:shadow-xravel-shadow-1">
            <span>{data.icon}</span>
            <h3 className="text-[2.5rem] text-xravel-color-black-6">{data.title}</h3>
            <p className="text-[1.5rem] text-xravel-color-black-7 py-[1rem]">{data.description}</p>
        </div>
    )
}

export default ServiceItem
