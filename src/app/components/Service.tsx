export const Service = () => {
  return (
    <>
      <div className="service-tour">
        <div className="text-service">LAYANAN KAMI</div>
      </div>
      <div className="service-container">
        <div className="card-container">
          {/* Card 1 */}
          <a href="#tourbmt" className="card-frame-tour">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="rectangle-card"></div>
                <div className="text-container">
                  <div className="search-wrapper">
                    <p>Search Tour & Places Hire our most popular destination</p>
                  </div>
                  <div className="text-wrapper">Show</div>
                </div>
              </div>
            </div>
          </a>

          {/* Card 2 */}
          <a href="https://wa.me/6285117289188" target="_blank" className="card-frame-flight">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="rectangle-card"></div>
                <div className="text-container">
                  <div className="search-wrapper">
                    <p>Search Flight & Places Hire our most popular destination</p>
                  </div>
                  <div className="text-wrapper">Show</div>
                </div>
              </div>
            </div>
          </a>

          {/* Card 3 */}
          <a href="https://wa.me/6285117289188" target="_blank" className="card-frame-hotel">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="rectangle-card"></div>
                <div className="text-container">
                  <div className="search-wrapper">
                    <p>Search Hotels & Places Hire our most popular destination</p>
                  </div>
                  <div className="text-wrapper">Show</div>
                </div>
              </div>
            </div>
          </a>

          {/* Card 4 */}
          <a href="https://wa.me/6285117289188" target="_blank" className="card-frame-transport">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="rectangle-card"></div>
                <div className="text-container">
                  <div className="search-wrapper">
                    <p>Search Transportation & Places Hire our most popular destination</p>
                  </div>
                  <div className="text-wrapper">Show</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Service;
