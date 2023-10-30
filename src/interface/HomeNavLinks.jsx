export default function HomeNavLinks({showMenu, onScrollTo}) {
  return (
    <nav className={`text-white ${showMenu ? 'active' : ''}`}>
        <span className="header-nav-link" onClick={() => onScrollTo('home')}>Home</span>
        <span className="header-nav-link" onClick={() => onScrollTo('locations')}>Locations</span>
        <span className="header-nav-link" onClick={() => onScrollTo('services')}>Services</span>
        <span className="header-nav-link" onClick={() => onScrollTo('gallery')}>Gallery</span>
    </nav>
  )
}

