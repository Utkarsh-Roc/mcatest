import React from "react";
import Split from "../Split";

const AboutIntro1 = () => {
    return (
        <section className="intro-section section-padding pb-0" style={{paddingTop:"30px"}}>
          <div className="container">
            <div className="row">
              
    
              <div className="col-lg-6 col-md-6" style={{display:"flex", alignItems:'center'}}>
                  <img src="/img/AboutUs/2.jpg" style={{borderRadius:"15px"}} alt="img" />
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="htit sm-mb30">
                <span className="mb-3">MCA Worldwide</span>
                  <h4>What We Do ?</h4>
                  <p className="wow txt words chars splitting" data-splitting>
                  We help with the integration of Brands with events on the basis of geographical locations, age demographic, brand requirements, etc. This in turn will help the brand create more awareness about its product/services.
                    </p>
                    <span style={{borderBottom:"2px solid orange", width:"50px"}}></span>
                </div>
              </div>
            </div>
    
            
          </div>
        </section>
      );
};

export default AboutIntro1;
