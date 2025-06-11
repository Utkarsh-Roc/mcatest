const BrandsMarquee = () => {
  const logos = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg",
    "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg",
  ];

  // Duplicate logos for seamless looping
  const repeatedLogos = [...logos, ...logos];

  return (
    <section className="brands-section">
      <div className="container">
        <div className="row justify-content-center">
          {/* Optional Heading */}
          {/* <div className="col-md-12">
            <h2>Brands we've <span>worked</span> with</h2>
          </div> */}
          <div className="col-md-12 text-center">
            <div className="marquee">
              <div className="track">
                {repeatedLogos.map((logo, index) => (
                  <div className="text -r" key={index}>
                    <div className="brands__logo">
                      <img
                        src={`/img/brands/${logo}`}
                        alt={logo.split('.')[0]}
                        className="brands__logo-img"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsMarquee;
