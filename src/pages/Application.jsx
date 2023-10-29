import SwitchButton from "../interface/SwitchButton";
import { Outlet } from "react-router-dom";
import Sidebar from "../interface/Sidebar";

function Application() {
    return (
        <div className="px-4 pb-6 relative grid place-items-center">
            <SwitchButton />
            <div className="z-20 h-screen fixed top-0 -left-[280px] lg:left-0 w-[280px] bg-xravel-color-black-3 shadow-2xl peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                <Sidebar />
            </div>
            <div className="lg:pl-[280px]">
                <Outlet />
            </div>

            <div className="z-10 lg:hidden fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-30 opacity-0 peer-focus:opacity-100 peer:transition duration-200"></div>
        </div>
    )
}

export default Application;