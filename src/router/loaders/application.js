import { getPackages, getSingleLocation } from "../../services";

export async function singleLocationLoader({req}) {
    const location = await getSingleLocation(req.params.id);
    return location;
}
export async function getPackagesLoader() {
    const packages = await getPackages();
    return packages;
}