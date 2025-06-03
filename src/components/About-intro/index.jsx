import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0" style={{paddingTop:"50px"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="htit sm-mb30">
              <span className="mb-3">MCA Worldwide</span>
              <h4>Who We Are ?</h4>
              <p className="wow txt words chars splitting" data-splitting>
              We help brands instrument ATL & BTL advertising that can help reach a wider audience in order to inform customers about the product, focus on the target group of consumers, direct mail marketing drafted according to the needs of each brand, sponsorships, and tailor-made marketing strategies.
                </p>
                <span style={{borderBottom:"2px solid orange", width:"50px"}}></span>
            </div>
          </div>

          <div className="col-lg-6 col-md-6" style={{display:"flex", alignItems:'center'}}>
            
              <img src="/img/AboutUs/1.jpg" style={{borderRadius:"15px"}} alt="img" />
           
          </div>
          {/* <div className="col-lg-6 offset-lg-1 col-md-6">
            <div className="text col-lg-8 col-md-8">
              <div className="row">     
                <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  We develop creative solutions for small and big brands alike,
                  build authentic product identities and much more.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit sit non facilisis
                  vitae eu. Ultrices ut diam morbi risus dui, nec eget at lorem
                  in id tristique in elementum leo nisi eleifend placerat magna
                  lacus elementum ornare vehicula odio posuere quisque ultrices
                  tempus cras id blandit maecenas in ornare quis dolor tempus
                  risus vitae feugiat fames aliquet sede
                </p>
                
              </Split>
                
              </div>
            </div>
          </div> */}
        </div>

        
      </div>
    </section>
  );
};

export default AboutIntro;
