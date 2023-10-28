import { AiFillEnvironment, AiFillIdcard, AiTwotoneApi } from "react-icons/ai";
import Logo from "../assets/logo/Logo";
import SwitchButton from "../interface/SwitchButton";
import { Link, Outlet } from "react-router-dom";

function Application() {
    return (
        <div className="flex px-4 pb-6 relative">
            <SwitchButton />

            <div className="z-20 h-screen fixed top-0 -left-[280px] lg:left-0 w-[280px] bg-xravel-color-black-3 shadow-2xl peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                <nav className="p-6">
                    <div className="flex justify-center mb-14">
                        <Logo />
                    </div>

                    <div className="mt-4 relative overflow-y-auto overflow-x-hidden h-[85vh]">
                    <div className="px-4 my-5 mb-12 border-b border-xravel-color-orange-1"></div>
                    <ul className="space-y-8 mb-12 px-4 mt-8">
                        <li>
                            <Link to="locations">
                                <span className="flex items-center gap-4 text-white hover:text-xravel-color-orange-1 transition">
                                    <AiFillEnvironment />
                                    Locations
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="mylocations">
                                <span className="flex items-center gap-4 text-white hover:text-xravel-color-orange-1 transition">
                                    <AiFillIdcard />
                                    My Packages
                                </span>
                            </Link>
                        </li>
                        <li>
                                <span className="flex cursor-pointer items-center gap-4 text-white hover:text-xravel-color-orange-1 transition">
                                    <AiTwotoneApi />
                                    Logout
                                </span>
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>
            <div className="lg:pl-[280px]">
                <Outlet />
            </div>

            <div className="z-10 lg:hidden fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-30 opacity-0 peer-focus:opacity-100 peer:transition duration-200"></div>
        </div>
    )
}

export default Application;