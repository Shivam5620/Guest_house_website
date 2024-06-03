const Service = () => {
  return (
    <>
      <section className="service" id="service">
        <div className="section__container service__container">
          <div className="service__content">
            <p className="section__subheader">SERVICES</p>
            <h2 className="section__header">Strive Only For The Best.</h2>
            <ul className="service__list">
              <li data-sr-id={13} style={{ visibility: 'visible', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 1s cubic-bezier(0.5, 0, 0, 1) 0s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0s' }}>
                <span><i className="ri-shield-star-line" /></span>
                High Class Security
              </li>
              <li data-sr-id={14} style={{ visibility: 'visible', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 1s cubic-bezier(0.5, 0, 0, 1) 0s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0s' }}>
                <span><i className="ri-24-hours-line" /></span>
                24 Hours Room Service
              </li>
              <li data-sr-id={15} style={{ visibility: 'visible', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 1s cubic-bezier(0.5, 0, 0, 1) 0s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0s' }}>
                <span><i className="ri-restaurant-2-fill" /></span>
                Restaurant
              </li>
              <li data-sr-id={16} style={{ visibility: 'visible', opacity: 0, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 50, 0, 0, 1)' }}>
                <span><i className="ri-map-2-line" /></span>
                Tourist Guide Support
              </li>
            </ul>
          </div>
        </div>
      </section>

    </>
  )
}
export default Service;