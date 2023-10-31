import { getSingleLocation } from "../../services";

export async function singleLocationLoader({req}) {
    const location = await getSingleLocation(req.params.id);
    return location;
}