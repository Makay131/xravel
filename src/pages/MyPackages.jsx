import { useLoaderData } from "react-router-dom";
import {Packages} from "../components/Packages"
import { useAuth } from "../contexts/AuthContext";

function MyPackages() {
    const { onlineUser } = useAuth();
    const packagesData = useLoaderData();
    const mappedData = packagesData.filter(item => onlineUser?.packages.includes(item.id));
    return (
        <Packages data={mappedData} booked={true} key={onlineUser.id} />
    )
}

export default MyPackages
