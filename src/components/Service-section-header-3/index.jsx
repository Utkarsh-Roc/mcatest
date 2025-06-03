import react from "react";

const ServiceSectionHeader3 = () =>{
    return(
        <header  
        className="pages-header bg-img valign parallaxie"
        style={{ backgroundImage: "url(/img/slid/service4.jpg)" }}
        data-overlay-dark="5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cont text-center">
                <h1>Motorsports Events</h1>
                <div className="path">
                  <a href="#0">Services</a>
                  <span>/</span>
                  <a href="#0" className="active">
                    Motorsports-Events
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}

export default ServiceSectionHeader3;