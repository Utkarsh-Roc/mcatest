/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import influencerTeamData from "../../data/sections/influencerTeam.json";
import Link from "next/link";

class InfluencerTeam extends React.Component {
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
      <section className="team section-padding pt">
        <div className="container">
          <div className="row">
            {/* Left column: Title, arrows, Read More */}
            <div className="col-lg-4 valign">
              <div className="full-width">
                <div className="sec-head custom-font mb-0">
                  <h6>Influencers</h6>
                  <h3>Our Influencers.</h3>
                </div>

                {this.renderArrows()}

                {/* <div style={{ marginTop: "10px" }}>
                  <Link href="/influencer-marketing">
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
                </div> */}
              </div>
            </div>

            {/* Right column: Slider */}
            <div className="col-lg-8">
              <Slider
                className="team-container"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: false,
                  infinite: true,
                  arrows: false, 
                  autoplay: true,
                  speed: 300,
                  autoplaySpeed: 1200,
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
                {influencerTeamData.map((member) => (
                  <div
                    className="item wow fadeInUp"
                    data-wow-delay=".3s"
                    key={member.id}
                    style={{ cursor: "pointer" }}
                    onClick={() => onMemberClick(member.id)}
                  >
                    <div className="img wow imago">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="info">
                      <h5>{member.name}</h5>
                      <span>{member.title}</span>
                      <div className="social">
                        {member.instagram && (
                          <a
                            href={member.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            style={{ color: "#C13584" }}
                          >
                            <i
                              className="fab fa-instagram"
                              style={{ fontSize: "28px" }}
                            ></i>
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

export default InfluencerTeam;
