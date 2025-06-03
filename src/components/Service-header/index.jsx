import react from "react";

const ServiceHeader = () =>{
    return(
        <header
        className="pages-header bg-img valign parallaxie"
        style={{ backgroundImage: "url(/img/slid/service.jpg)" }}
        data-overlay-dark="5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cont text-center">
                <h1>Services</h1>
                <div className="path">
                  <a href="#0">Home</a>
                  <span>/</span>
                  <a href="#0" className="active">
                    Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}

export default ServiceHeader;