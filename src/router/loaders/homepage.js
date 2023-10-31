import { getGallery, getPackages } from "../../services";

export async function homepageLoader() {
    const packages = await getPackages();
    const gallery = await getGallery();
    return { packages, gallery };
}