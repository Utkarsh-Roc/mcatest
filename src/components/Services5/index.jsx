import React from "react";
import Split from "../Split";
import services5Data from "../../data/sections/services5.json";

const Services5 = ({ withBG, withPadding, halfBG, withOutTitle }) => {
  return (
    <section
      className={`services ${withPadding ? "section-padding" : ""} ${
        withBG ? "sub-bg" : ""
      }`} 
    >
      <div className="container">
        {!withOutTitle && (
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              Best Features
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Services.
              </h3>
            </Split>
            <span className="tbg">Services</span>
          </div>
        )}
        <div className="row">
          {services5Data.map((item, index) => (
            <div className="col-lg-6"  key={item.id} >
              <div
                className={`item ${
                  index != services5Data.length - 1 ? "md-mb50" : ""
                } wow fadeInUp`}
                data-wow-delay={
                  item.id == 1 ? ".5s" : item.id == 2 ? ".3s" : ".8s"
                } style={{padding:"0px", borderRadius:"15px", overflow:"hidden"}} 
              >
                
                <div className="img wow imago">
                      <img src={item.image} alt="img" style={{height: "300px", objectFit: "cover"}}/>
                    </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {halfBG && <div className="half-bg bottom"></div>}
    </section>
  );
};

export default Services5;
