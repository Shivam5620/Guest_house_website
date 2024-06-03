import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <header className="header">
        <nav>
          <div className="nav__bar">
            <div className="logo">
              <Link to="/"><span style={{ color: 'aliceblue' }}>Kingsukh Guest House</span></Link>
            </div>
            <div className="nav__menu__btn" id="menu-btn">
              <i className="ri-menu-line" />
            </div>
          </div>
          <ul className="nav__links" id="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Services</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/gallary">Gallary</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          {/* <button class="btn nav__btn">Book Now</button> */}
          <Link to ="https://wa.link/at5ion">
            <button className="btn nav__btn">BOOK NOW</button>
          </Link>
        </nav>
        <div className="section__container header__container" id="home">
          <p data-sr-id={0} style={{ visibility: 'visible', opacity: '0.6', transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 1s cubic-bezier(0.5, 0, 0, 1) 0s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0s' }}>Simple - Unique - Friendly</p>
          <h1 data-sr-id={2} style={{ visibility: 'visible', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 1s cubic-bezier(0.5, 0, 0, 1) 0.5s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0.5s' }}>Make Yourself At Home<br />In Our <span>Guest House</span>.</h1>
        </div>
      </header>

    </>
  )

}
export default Header;