function ModalContent({children}) {
    return (
        <div className="fixed top-0 left-0 min-h-screen w-full bg-xravel-color-overlay-1 flex items-center justify-center z-[10000]">
            {children}
        </div>
    )
}

export default ModalContent
