/* eslint-disable @next/next/no-img-element */
import React from "react";
import Clients1Data from "../../data/sections/clients1.json";
import Split from "../Split";

const Clients1 = ({ theme, subBG }) => {
  var first = Clients1Data.slice(0, 4);
  var second = Clients1Data.slice(4, 8);
  var third = Clients1Data.slice(9, 11);
  return (
    <section className={`clients section-padding ${subBG ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign">
            <div className="sec-head custom-font mb-0">
              <h6>Clients</h6>
              <h3>
                {" "}
                Our <br /> Clients{" "}
              </h3>
            </div>
          </div>
          <div className="col-lg-8">
            <div>
              <div className="row bord">
                {first.map((item) => (
                  <div key={item.id} className="col-md-3 col-6 brands">
                    <div className="item wow fadeIn" data-wow-delay={`${ item.id == 1   ? ".3"   : item.id == 2   ? ".6"   : item.id == 3   ? ".8"   : item.id == 4   ? ".3"   : ""}s`} >
                      <div className="img"> {theme === "light" ? (<img src={item.lightImage} alt="ClientImage" />) : (<img src={item.darkImage} alt="ClientImage" />)}
                        <Split>
                          <a href={`${item.url}`} className="link words chars splitting" data-splitting target="_blank" rel="noreferrer">{item.url}
                          </a>
                        </Split>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                {second.map((item) => (
                  <div key={item.id} className={`${item.id == 5  ? "col-md-3 col-6 brands sm-mb30"  : item.id == 6  ? "col-md-3 col-6 brands sm-mb30"  : item.id == 7  ? "col-md-3 col-6 brands"  : item.id == 8  ? "col-md-3 col-6 brands sm-mb30"  : item.id == 9}`}>
                    <div className="item wow fadeIn" data-wow-delay={`${item.id == 1  ? ".4"  : item.id == 2  ? ".7"  : item.id == 3  ? ".5"  : item.id == 4  ? ".3"  : "" }s`} >
                      <div className="img"> {theme === "light" ? ( <img src={item.lightImage} alt="ClientImage" />) : (<img src={item.darkImage} alt="ClientImage" />)}
                        <Split>
                          <a href={`${item.url}`} className="link words chars splitting" target="_blank" data-splitting rel="noreferrer"> {item.url}</a>
                        </Split>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row">
                {third.map((item) => (
                  <div key={item.id} className={`${item.id == 9  ? "col-md-3 col-6 brands sm-mb30"  : item.id == 10  ? "col-md-3 col-6 brands sm-mb30"  : item.id == 11  ? "col-md-3 col-6 brands"  : item.id == 12  ? "col-md-3 col-6 brands sm-mb30"  : item.id == 13}`}>
                    <div className="item wow fadeIn" data-wow-delay={`${item.id == 1  ? ".9"  : item.id == 2  ? ".7"  : item.id == 3  ? ".5"  : item.id == 4  ? ".3"  : "" }s`} >
                      <div className="img"> {theme === "light" ? ( <img src={item.lightImage} alt="ClientImage" />) : (<img src={item.darkImage} alt="ClientImage" />)}
                        <Split>
                          <a href={`${item.url}`} className="link words chars splitting" target="_blank" data-splitting rel="noreferrer"> {item.url}</a>
                        </Split>
                      </div>
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

export default Clients1;
