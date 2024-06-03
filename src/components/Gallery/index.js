import './style.css'
const Gallery = () => {
  return (
    <>
      <section id="gallary">
        <div className="about__content">
          <p className="section__subheader" style={{ textAlign: 'center', visibility: 'visible', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 1s cubic-bezier(0.5, 0, 0, 1) 0.5s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0.5s' }} data-sr-id={5}>GALLARY</p> </div>
        <br />
        <div className="container11">
          <div className="box11 a"><img src={"./img/out.jpg"} alt ='invalid path' /></div>
          <div className="box11 b"><img src={"./img/ayodhya.webp"} alt ='invalid path' /></div>
          <div className="box11 c"><img src={"./img/large.jpg"} alt ='invalid path' /></div>
          <div className="box11 d"><img src={"./img/palash.webp"} alt ='invalid path' /></div>
          <div className="box11 e"><img src={"./img/small.jpg"} alt ='invalid path' /></div>
          <div className="box11 f"><img src={"./img/baranti.webp"} alt ='invalid path' /></div>
          <div className="box11 g"><img src={"./img/recep.jpg"} alt ='invalid path' /></div>
          <div className="box11 h"><img src={"./img/flower.jpg"} alt ='invalid path' /></div>
          <div className="box11 j"><img src={"./img/room1.jpg"} alt ='invalid path' /></div>
          <div className="box11 i"><img src={"./img/mithonDam.webp"} alt ='invalid path' /></div>
        </div>
      </section>

    </>
  )
}
export default Gallery;