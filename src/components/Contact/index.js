import { Link } from 'react-router-dom';
import './style.css'
const Contact = () => {
    return (
        <>
            <section id="contact" className="section1">
                <div className="container1">
                    <div className="contactInfo1">
                        <div>
                            <h2>Contact Info</h2>
                            <ul className="info">
                                <li>
                                    <span><img src="/images/location.png" alt='' /></span>
                                    <span>Beside Barshal Water Tank,<br />
                                        Manpur, Barhanti,<br />
                                        West Bengal 723156</span>
                                </li>
                                <li>
                                    <span><img src="/images/mail.png" alt='' /></span>
                                    <span><Link to="mailto: kkghosh0099@gmail.com">kkghosh0099@gmail.com</Link></span>
                                </li>
                                <li>
                                    <span><img src="/images/call.png" alt='' /></span>
                                    <span><Link to="tel:+919007062180"> +91 9007062180 </Link></span>
                                </li>
                            </ul>
                        </div>
                        <ul className="sci">
                            <li><Link to="#"><img src="/images/1.png" alt='' /></Link></li>
                            <li><Link to="https://www.instagram.com/kingsukhguesthouse/" target="_blank"><img src="/images/3.png" alt=''/></Link></li>
                            <li><Link to="#"><img src="/images/2.png" alt='' /></Link></li>
                            <li><Link to="#"><img src="/images/5.png" alt=''/></Link></li>
                        </ul>
                    </div>
                    <div className="contactForm1">
                        <h2>Send Link Message</h2>
                        <div className="formBox1">
                            <div className="inputBox1 w50">
                                <input type="text" name required />
                                <span>First Name</span>
                            </div>
                            <div className="inputBox1 w50">
                                <input type="text" required />
                                <span>Last Name</span>
                            </div>
                            <div className="inputBox1 w50">
                                <input type="email" required />
                                <span>Email Address</span>
                            </div>
                            <div className="inputBox1 w50">
                                <input type="text" required />
                                <span>Mobile Number</span>
                            </div>
                            <div className="inputBox1 w100">
                                <textarea required defaultValue={""} />
                                <span>Write your message here...</span>
                            </div>
                            <div className="inputBox1 w100">
                                <input type="submit" defaultValue="Send" />
                            </div>
                        </div>
                    </div>
                </div></section>

        </>
    )
}
export default Contact;