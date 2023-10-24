function BaseButton({children, onButtonClicked, type = "primary"}) {
    const types = {
        primary: 'px-5 border-2 border-xravel-color-orange-1 py-3 bg-xravel-color-orange-1 text-white rounded-lg font-semibold hover:bg-transparent hover:text-xravel-color-orange-1 duration-300 outline-none',
        big: 'px-8 py-4 border-2 border-xravel-color-orange-1 bg-xravel-color-orange-1 text-[2rem] text-white rounded-2xl font-semibold hover:bg-transparent hover:text-xravel-color-orange-1 duration-300',
    }
    return (
        <button className={`${types[type]}`} onClick={onButtonClicked}>
            {children}
        </button>
    )
}

export default BaseButton
