/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import Split from "../Split";

SwiperCore.use([Navigation, Pagination]);

const Works2Slider = ({ subBG }) => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    });
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/ionicons.min.css" />
      </Head>
      <section
        className={`work-carousel section-padding caroul ${
          subBG ? "sub-bg" : ""
        } position-re`}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 no-padding">
              {/* <div className="swiper-container"> */}
                <div className="swiper-container">
                  {!load ? (
                    <Swiper
                      style={{paddingBottom:'25px'}}
                      speed={1000}
                      loop={true}
                      spaceBetween={0}
                      pagination={{
                        dynamicBullets: true,
                      }}
                      modules={[Pagination]}
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 0,
                        },
                        767: {
                          slidesPerView: 2,
                          spaceBetween: 0,
                        },
                        991: {
                          slidesPerView: 3,
                          spaceBetween: 0,
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 0,
                        },
                      }}
                      navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                      }}
                      onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl =
                          navigationPrevRef.current;
                        swiper.params.navigation.nextEl =
                          navigationNextRef.current;
                      }}
                      onSwiper={(swiper) => {
                        setTimeout(() => {
                          swiper.params.navigation.prevEl =
                            navigationPrevRef.current;
                          swiper.params.navigation.nextEl =
                            navigationNextRef.current;

                          swiper.navigation.destroy();
                          swiper.navigation.init();
                          swiper.navigation.update();
                        });
                      }}
                      className="swiper-wrapper"
                      slidesPerView={1}
                    >
                      <SwiperSlide className="swiper-slide">
                        <a href="https://mumbaitimes.online/chhatrapati-shivaji-maharaj-park-art-festival-2024-promises-four-days-of-art-and-entertainment-pnn-digital/" target="_blank" rel="noreferrer">
                          <div
                            className="content wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div
                              className="item-img bg-img wow imago"
                              style={{
                                backgroundImage: "url(/img/portfolio/curs/dadarCSMParkFestival.jpg)",
                              }}
                            ></div>
                            <div className="cont bgbox" >
                              <div className="d-flex justify-content-between align-items-center">
                                <h6 style={{marginBottom: "0px"}}>
                                    Art &amp; Entertainment
                                </h6>
                                <a>
                                  <span className="icon">
                                    <i className="fas fa-arrow-right"></i>
                                  </span>
                                </a>
                              </div>
                              <h4>
                                  <a>CHHATRAPATI SHIVAJI MAHARAJ PARK ART FESTIVAL 2024 PROMISES FOUR DAYS OF ART AND ENTERTAINMENT</a>
                              </h4>
                            </div>
                          </div>
                        </a>
                      </SwiperSlide> {/*dadar chattrapati shivaji maharaj park festival mumbai times*/}
                      <SwiperSlide className="swiper-slide">
                      <a href="https://www.republicworld.com/initiatives/sunil-arora-former-chief-election-commissioner-of-india-to-inaugurate-cmpl-expo-in-new-delhi/" target="_blank" rel="noreferrer">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/CMPLExpo.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox" >
                            <div className="d-flex justify-content-between align-items-center">
                              <h6 style={{marginBottom: "0px"}}>
                                  Grand Opening
                              </h6>
                              <a>
                                <span className="icon">
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </a>
                            </div>
                            <h4>
                                <a>Sunil Arora, Former Chief Election Commissioner of India to inaugurate CMPL Expo in New Delhi</a>
                            </h4>
                          </div>
                        </div>
                      </a>
                      </SwiperSlide> {/*CMPL Expo republic world*/}
                      <SwiperSlide className="swiper-slide">
                      <a href="https://deccanexpress.co.in/index.php/2024/01/16/darshan-ravals-unforgettable-show-on-january-14th-garnering-praise-from-5000-enthusiastic-fans-credits-american-pride-soda-as-powered-by-partner/" target="_blank" rel="noreferrer">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/DarshanRavalPune.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox" >
                            <div className="d-flex justify-content-between align-items-center">
                              <h6 style={{marginBottom: "0px"}}>
                                  Music &amp; Concert
                              </h6>
                              <a>
                                <span className="icon">
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </a>
                            </div>
                            <h4>
                                <a>Darshan Raval’s Unforgettable Show on January 14th, Garnering Praise from 5000+ Enthusiastic Fans, Credits American Pride Soda as Powered by Partner</a>
                            </h4>
                          </div>
                        </div>
                      </a>
                      </SwiperSlide> {/*darshan raval pune deccan express*/}
                      <SwiperSlide className="swiper-slide">
                      <a href="https://www.freepressjournal.in/viral/ganeshotsav-2022-heritage-turns-vanilla-milkshake-tetra-packs-into-6-feet-tall-modak" target="_blank" rel="noreferrer">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/heritageModak.png)",
                            }}
                          ></div>
                          <div className="cont bgbox" >
                            <div className="d-flex justify-content-between align-items-center">
                              <h6 style={{marginBottom: "0px"}}>
                                  Arts &amp; Culture
                              </h6>
                              <a>
                                <span className="icon">
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </a>
                            </div>
                            <h4>
                                <a>Ganeshotsav 2022: Heritage turns vanilla milkshake tetra packs into 6 feet-tall modak in Hyderabad</a>
                            </h4>
                          </div>
                        </div>
                      </a>
                      </SwiperSlide> {/*heritage modak hyderabad free press journal*/}
                      <SwiperSlide className="swiper-slide">
                      <a href="https://www.mid-day.com/brand-media/article/in-exclusive-conversation-with-rohit-jaiswal-founder-of-an-activation-agency--23330242" target="_blank" rel="noreferrer">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/CEOInterview.jpg)",
                              backgroundSize: "contain",
                              backgroundPosition: "center bottom"
                            }}
                          ></div>
                          <div className="cont bgbox" >
                            <div className="d-flex justify-content-between align-items-center">
                              <h6 style={{marginBottom: "0px"}}>
                                  Business
                              </h6>
                              <a>
                                <span className="icon">
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </a>
                            </div>
                            <h4>
                                <a>In Exclusive Conversation with Rohit Jaiswal, Founder of an activation agency MCA Worldwide</a>
                            </h4>
                          </div>
                        </div>
                      </a>
                      </SwiperSlide> {/*CEO Interview mid day*/}
                      <SwiperSlide className="swiper-slide">
                      <a href="https://www.lokmattimes.com/business/milkmaid-and-chef-ranveer-brar-bring-new-modak-recipes-for-bappas-prasad/" target="_blank" rel="noreferrer">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/milkmaid.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox" >
                            <div className="d-flex justify-content-between align-items-center">
                              <h6 style={{marginBottom: "0px"}}>
                                    Culinary Creations
                              </h6>
                              <a>
                                <span className="icon">
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </a>
                            </div>
                            <h4>
                                <a>MILKMAID and Chef Ranveer Brar bring new modak recipes for Bappa’s prasad!</a>
                            </h4>
                          </div>
                        </div>
                      </a>
                      </SwiperSlide> {/*Milkmaid 1 lokmat times*/}
                      <SwiperSlide className="swiper-slide">
                      <a href="https://www.lokmattimes.com/business/experience-nestle-milkmaid-modaks-at-lalbaughcha-raja/" target="_blank" rel="noreferrer">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/milkmaid2.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox" >
                            <div className="d-flex justify-content-between align-items-center">
                              <h6 style={{marginBottom: "0px"}}>
                              Festival Feasts
                              </h6>
                              <a>
                                <span className="icon">
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </a>
                            </div>
                            <h4>
                                <a>Experience Nestlé MILKMAID modaks at Lalbaughcha Rajamodak recipes for Bappa’s prasad!</a>
                            </h4>
                          </div>
                        </div>
                      </a>
                      </SwiperSlide> {/*Milkmaid 2 lokmat times*/}
                      <SwiperSlide className="swiper-slide">
                      <a href="https://news9network.com/cultural-delight-chhatrapati-shivaji-maharaj-park-art-festival-2024-promises-four-days-of-art-and-entertainment/" target="_blank" rel="noreferrer">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/dadarCSMParkFestival.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox" >
                            <div className="d-flex justify-content-between align-items-center">
                              <h6 style={{marginBottom: "0px"}}>
                                  Art &amp; Entertainment
                              </h6>
                              <a>
                                <span className="icon">
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </a>
                            </div>
                            <h4>
                                <a>CHHATRAPATI SHIVAJI MAHARAJ PARK ART FESTIVAL 2024 PROMISES FOUR DAYS OF ART AND ENTERTAINMENT</a>
                            </h4>
                          </div>
                        </div>
                      </a>
                      </SwiperSlide> {/*dadar chattrapati shivaji maharaj park festival news9network*/}
                      <SwiperSlide className="swiper-slide">
                      <a href="https://www.lokmattimes.com/business/sunil-arora-the-former-chief-election-commissioner-of-india-to-inaugurate-cmpl-expo-in-new-delhi/" target="_blank" rel="noreferrer">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/CMPLExpo.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox" >
                            <div className="d-flex justify-content-between align-items-center">
                              <h6 style={{marginBottom: "0px"}}>
                              Grand Opening
                              </h6>
                              <a>
                                <span className="icon">
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </a>
                            </div>
                            <h4>
                                <a>Sunil Arora, Former Chief Election Commissioner of India to inaugurate CMPL Expo in New Delhi</a>
                            </h4>
                          </div>
                        </div>
                      </a>
                      </SwiperSlide> {/*CMPL Expo lokmatt times*/}
                      <SwiperSlide className="swiper-slide">
                      <a href="https://thenationtimes.co.in/index.php/2024/01/16/darshan-ravals-unforgettable-show-on-january-14th-garnering-praise-from-5000-enthusiastic-fans-credits-american-pride-soda-as-powered-by-partner/" target="_blank" rel="noreferrer">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/DarshanRavalPune.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox" >
                            <div className="d-flex justify-content-between align-items-center">
                              <h6 style={{marginBottom: "0px"}}>
                                  Music &amp; Concert
                              </h6>
                              <a>
                                <span className="icon">
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </a>
                            </div>
                            <h4>
                                <a>Darshan Raval’s Unforgettable Show on January 14th, Garnering Praise from 5000+ Enthusiastic Fans, Credits American Pride Soda as Powered by Partner</a>
                            </h4>
                          </div>
                        </div>
                      </a>
                      </SwiperSlide> {/*darshan raval pune the nation times*/}
                      <SwiperSlide className="swiper-slide">
                      <a href="https://www.blogarama.com/business-blogs/1396977-business-news-blog/45516131-ganeshotsav-2022-heritage-turns-vanilla-milkshake-tetra-packs-into-feet-tall-modak-hyderabad" target="_blank" rel="noreferrer">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/heritageModak.png)",
                            }}
                          ></div>
                          <div className="cont bgbox" >
                            <div className="d-flex justify-content-between align-items-center">
                              <h6 style={{marginBottom: "0px"}}>
                                  arts &amp; culture
                              </h6>
                              <a>
                                <span className="icon">
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </a>
                            </div>
                            <h4>
                                <a>Ganeshotsav 2022: Heritage turns vanilla milkshake tetra packs into 6 feet-tall modak in Hyderabad</a>
                            </h4>
                          </div>
                        </div>
                      </a>
                      </SwiperSlide> {/*heritage modak hyderabad blogarama*/}
                      <SwiperSlide className="swiper-slide">
                      <a href="https://www.inquilab.com/brand-media/articles/in-exclusive-conversation-with-rohit-jaiswal-founder-of-an-activation-agency--23330242" target="_blank" rel="noreferrer">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/CEOInterview.jpg)",
                              backgroundSize: "contain",
                              backgroundPosition: "center bottom"
                            }}
                          ></div>
                          <div className="cont bgbox" >
                            <div className="d-flex justify-content-between align-items-center">
                              <h6 style={{marginBottom: "0px"}}>
                                    Business
                              </h6>
                              <a>
                                <span className="icon">
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </a>
                            </div>
                            <h4>
                                <a>In Exclusive Conversation with Rohit Jaiswal, Founder of an activation agency MCA Worldwide</a>
                            </h4>
                          </div>
                        </div>
                      </a>
                      </SwiperSlide> {/*CEO Interview Inquilab*/}
                      <SwiperSlide className="swiper-slide">
                      <a href="https://m.dailyhunt.in/news/india/english/loktej+english-epaper-loktejen/milkmaid+and+chef+ranveer+brar+bring+new+modak+recipes+for+bappas+prasad-newsid-n540224636?sm=Y" target="_blank" rel="noreferrer">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/milkmaid.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox" >
                            <div className="d-flex justify-content-between align-items-center">
                              <h6 style={{marginBottom: "0px"}}>
                              Culinary Creations
                              </h6>
                              <a>
                                <span className="icon">
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </a>
                            </div>
                            <h4>
                                <a>MILKMAID and Chef Ranveer Brar bring new modak recipes for Bappa’s prasad!</a>
                            </h4>
                          </div>
                        </div>
                      </a>
                      </SwiperSlide> {/*Milkmaid 1 dailyhunt*/}
                      <SwiperSlide className="swiper-slide">
                      <a href="https://www.sangritoday.com/spotlight/experience-nestle-milkmaid-modaks-at-lalbaughcha-raja" target="_blank" rel="noreferrer">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/milkmaid2.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox" >
                            <div className="d-flex justify-content-between align-items-center">
                              <h6 style={{marginBottom: "0px"}}>
                              Festival Feasts
                              </h6>
                              <a>
                                <span className="icon">
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </a>
                            </div>
                            <h4>
                                <a>Experience Nestlé MILKMAID modaks at Lalbaughcha Rajamodak recipes for Bappa’s prasad!</a>
                            </h4>
                          </div>
                        </div>
                      </a>
                      </SwiperSlide> {/*Milkmaid 2 sangri today*/}
                    </Swiper>  
                  ) : null}
                  <div
                    ref={navigationNextRef}
                    className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
                  >
                    <i className="ion-ios-arrow-right"></i>
                  </div>
                  <div
                    ref={navigationPrevRef}
                    className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
                  >
                    <i className="ion-ios-arrow-left"></i>
                  </div>
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works2Slider;
