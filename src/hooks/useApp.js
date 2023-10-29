import { useLocation } from "react-router-dom";

export default function useApp() {
    const {pathname} = useLocation();
    const isApp = pathname.includes('app');

    return {isApp, goToPath: pathname.includes('location') ? null : '/app/locations'};
}

