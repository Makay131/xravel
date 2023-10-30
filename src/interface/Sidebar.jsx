import { Link } from "react-router-dom";

import Logo from "../assets/logo/Logo";
import UserCard from "../components/UserCard";

import { AiFillEnvironment, AiFillIdcard, AiTwotoneApi } from "react-icons/ai";
import AppConfig from "../config/application.json";

const linkClass = "flex items-center gap-4 text-white hover:text-xravel-color-orange-1 transition";

function Sidebar() {
    const elements = {
        gps: <AiFillEnvironment />,
        card: <AiFillIdcard />,
        plug: <AiTwotoneApi />
    }
    return (
        <nav className="p-6">
            <div className="flex justify-center mb-14">
                <Logo />
            </div>
            
            <UserCard />

            <div className="mt-4 relative overflow-y-auto overflow-x-hidden h-[85vh]">
                <div className="px-4 my-5 mb-12 border-b border-xravel-color-orange-1"></div>
                <ul className="space-y-8 mb-12 px-4 mt-8">
                    {AppConfig.sidebar?.map(item => (
                        <li key={item.name}>
                            {item.type ? 
                                <Link to={item.path}>
                                    <span className={linkClass}>
                                        {elements[item.element]}
                                        {item.name}
                                    </span>
                                </Link> :
                                    <span className={`${linkClass} cursor-pointer`}>
                                        {elements[item.element]}
                                        Logout
                                    </span>
                            }
                        </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar