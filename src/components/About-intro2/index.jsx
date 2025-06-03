import React from "react";
import Split from "../Split";

const AboutIntro2 = () => {
    return (
        <section className="intro-section section-padding pb-0" style={{paddingTop:"30px"}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="htit sm-mb30">
                  
                <span className="mb-3">MCA Worldwide</span>
                  <h4>Why Choose Us ?</h4>
                  <p className="wow txt words chars splitting" data-splitting>
                  We assist brands with on-ground activation ideas that drive consumer action through brand interaction and experience which aims to get consumers to act and to bring brands to life.
                    </p>
                    <span style={{borderBottom:"2px solid orange", width:"50px"}}></span>
                </div>
              </div>

              <div className="col-lg-6 col-md-6" style={{display:"flex", alignItems:'center'}}>
                  <img src="/img/AboutUs/3.jpg" style={{borderRadius:"15px"}} alt="img" />
              </div>
            </div>
    
            
          </div>
        </section>
      );
};

export default AboutIntro2;
