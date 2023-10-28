import { AiOutlineMenu } from "react-icons/ai"

function SwitchButton() {
    return (
        <button className="z-30 fixed right-5 bottom-5 lg:hidden flex items-center text-white justify-center peer h-14 w-14 rounded-full bg-xravel-color-orange-1 transition">
            <AiOutlineMenu />
        </button>
    )
}

export default SwitchButton
