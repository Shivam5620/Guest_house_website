import { Link } from "react-router-dom"

const Room = () => {
    return (
        <>
            <section className="section__container room__container" id="rooms">
                <p className="section__subheader">OUR LIVING ROOM</p>
                <h2 className="section__header">The Most Memorable Rest Time Starts Here.</h2>
                <div className="room__grid">
                    <div className="room__card" data-sr-id={10} style={{ visibility: 'visible', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 1s cubic-bezier(0.5, 0, 0, 1) 0s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0s' }}>
                        <div className="room__card__image">
                            <img src="./img/small.jpg" alt="room" />
                            <div className="room__card__icons">
                                <span><i className="ri-heart-fill" /></span>
                                <span><i className="ri-paint-fill" /></span>
                                <span><i className="ri-shield-star-line" /></span>
                            </div>
                        </div>
                        <div className="room__card__details">
                            <h4>Cozy Haven Room</h4>
                            <p>
                                Escape to comfort in our Cozy Haven Room, Link snug retreat designed for intimate relaxation.
                            </p>
                            <h5>Starting from <span>Rs. 1000/night</span></h5>
                            <Link to="https://wa.link/at5ion">
                                <button className="btn">BOOK NOW</button>
                            </Link>
                        </div>
                    </div>
                    <div className="room__card" data-sr-id={11} style={{ visibility: 'visible', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 1s cubic-bezier(0.5, 0, 0, 1) 0s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0s' }}>
                        <div className="room__card__image">
                            <img src="./img/large.jpg" alt="room" />
                            <div className="room__card__icons">
                                <span><i className="ri-heart-fill" /></span>
                                <span><i className="ri-paint-fill" /></span>
                                <span><i className="ri-shield-star-line" /></span>
                            </div>
                        </div>
                        <div className="room__card__details">
                            <h4>Spacious Serenity Suite</h4>
                            <p>
                                Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.
                            </p>
                            <h5>Starting from <span>Rs. 1500/night</span></h5>
                            <Link to="https://wa.link/at5ion">
                                <button className="btn">BOOK NOW</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Room;