import { Link } from "react-router-dom"

const About=()=>{
    return(
        <>
       <section className="section__container about__container" id="about">
  <div className="about__image">
    <img src="./img/out.jpg" alt="about" data-sr-id={3} style={{visibility: 'visible', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 1s cubic-bezier(0.5, 0, 0, 1) 0s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0s'}} />
  </div>
  <div className="about__content">
    <p className="section__subheader" data-sr-id={4} style={{visibility: 'visible', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 1s cubic-bezier(0.5, 0, 0, 1) 0.5s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0.5s'}}>ABOUT US</p>
    <h2 className="section__header" data-sr-id={6} style={{visibility: 'visible', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 1s cubic-bezier(0.5, 0, 0, 1) 1s, transform 1s cubic-bezier(0.5, 0, 0, 1) 1s'}}>The Best Holidays Start Here!</h2>
    <p className="section__description" data-sr-id={7} style={{visibility: 'visible', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 1s cubic-bezier(0.5, 0, 0, 1) 1.5s, transform 1s cubic-bezier(0.5, 0, 0, 1) 1.5s'}}>
      Embark on Link tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising Link harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay. <br />
    </p><h4><Link to="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</Link></h4>
    <h4><Link to="tel:+919007062180"> Contact us: +91 9007062180 </Link></h4>
    <br />
    <p />
    <div className="about__btn" data-sr-id={8} style={{visibility: 'visible', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 1s cubic-bezier(0.5, 0, 0, 1) 2s, transform 1s cubic-bezier(0.5, 0, 0, 1) 2s'}}>
      <Link to="https://wa.link/at5ion">
        <button className="btn">BOOK NOW</button>
      </Link>
    </div>
  </div>
</section>

        </>
    )
}
export default About;