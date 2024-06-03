import { Link } from "react-router-dom"

const Footer=()=>{
    return(
        <>
        <footer className="footer">
  <div className="section__container footer__container">
    <div className="footer__col">
      <div className="logo">
        <Link to ="#home"> <h4>Kingsukh Guest House</h4></Link>
      </div>
      <p className="section__description">
        Discover Link world of comfort, luxury, and adventure as you explore
        our curated selection of hotels, making every moment of your getaway
        truly extraordinary.
      </p>
      <Link to ="https://wa.link/at5ion">
        <button className="btn">BOOK NOW</button>
      </Link>
    </div>
    <div className="footer__col">
      <h4>QUICK LINKS</h4>
      <ul className="footer__links">
        <li><Link to ="#">Browse Destinations</Link></li>
        <li><Link to ="#">Special Offers &amp; Packages</Link></li>
        <li><Link to ="#">Room Types &amp; Amenities</Link></li>
        <li><Link to ="#">Customer Reviews &amp; Ratings</Link></li>
        <li><Link to ="#">Travel Tips &amp; Guides</Link></li>
      </ul>
    </div>
    <div className="footer__col">
      <h4>OUR SERVICES</h4>
      <ul className="footer__links">
        <li><Link to ="#">Concierge Assistance</Link></li>
        <li><Link to ="#">Flexible Booking Options</Link></li>
        <li><Link to ="#">Airport Transfers</Link></li>
        <li><Link to ="#">Wellness &amp; Recreation</Link></li>
      </ul>
    </div>
    <div className="footer__col">
      <h4>CONTACT US</h4>
      <ul className="footer__links">
        <li><Link to ="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</Link></li>
        <li><Link to ="mailto: kkghosh0099@gmail.com">kkghosh0099@gmail.com</Link></li>
        <li><Link to ="tel:+919007062180">+91 9007062180 </Link></li>
      </ul>
      <div className="footer__socials">
        <Link to ="#"><img src="assets/facebook.png" alt="facebook" /></Link>
        <Link to ="https://www.instagram.com/kingsukhguesthouse/" target="_blank"><img src="assets/instagram.png" alt="instagram" /></Link>
        <Link to ="#"><img src="assets/youtube.png" alt="youtube" /></Link>
        <Link to ="#"><img src="assets/twitter.png" alt="twitter" /></Link>
      </div>
    </div>
  </div>
  <div className="footer__bar">
    Copyright © 2024 Kingsukh Guest House. All rights reserved.
  </div>
</footer>

        </>
    )

}
export default Footer;