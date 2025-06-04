/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import team1Data from "../../data/sections/team1.json";
import Link from 'next/link';

class Team1 extends React.Component {
  constructor(props) {
    super(props);
  }

  renderArrows = () => {
    return (
      <div className="navs mt-30 wow fadeInUp" data-wow-delay=".3s">
        <span
          className="prev cursor-pointer"
          onClick={() => this.slider.slickPrev()}
        >
          <i className="fas fa-chevron-left"></i>
        </span>
        <span
          className="next cursor-pointer"
          onClick={() => this.slider.slickNext()}
        >
          <i className="fas fa-chevron-right"></i>
        </span>
      </div>
    );
  };

  render() {
    const { onMemberClick } = this.props; // Accept onMemberClick prop

    return (
      <section className="team section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 valign">
              <div className="full-width">
                <div className="sec-head custom-font mb-0">
                  <h6>Artists</h6>
                  <h3>Our Artists.</h3>
                </div>
                {this.renderArrows()}

                {/* Read More link below arrows */}
                <div style={{ marginTop: "10px" }}>
                  <Link href="/artistdetails">
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#007bff",
                        textDecoration: "none",
                        display: "inline-block",
                        cursor: "pointer",
                      }}
                    >
                      Read More...
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <Slider
                className="team-container"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: false,
                  infinite: true,
                  arrows: true,
                  autoplay: true,
                  slidesToScroll: 1,
                  slidesToShow: 4,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 4,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 2,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                      },
                    },
                  ],
                }}
              >
                {team1Data.map((item) => (
                  <div
                    className="item wow fadeInUp"
                    data-wow-delay=".3s"
                    key={item.id}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.location.href = "/artistdetails";
                    }}
                  >
                    <div className="img wow imago">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="info">
                      <h5>{item.name}</h5>
                      <span>{item.title}</span>
                      {/* <span>{item.desc}</span> */}
                      <div className="social">
                        {item.instagram && (
                          <a
                            href={item.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#C13584" }}
                          >
                            <i className="fab fa-instagram " style={{ fontSize: "28px" }}></i>
                          </a>
                        )}
                      </div>

                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team1;
