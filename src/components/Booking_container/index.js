import { Link } from "react-router-dom";

const Booking = () => {
    return (
        <>
            <section className="section__container booking__container">
                <div className="booking__form">
                    <div className="input__group input__btn">
                        <Link to ="https://wa.link/at5ion">
                            <button className="btn">BOOK NOW</button>
                        </Link>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Booking;