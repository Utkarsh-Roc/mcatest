import react from "react";

const ServiceSectionHeader4 = () =>{
    return(
        <header  
        className="pages-header bg-img valign parallaxie"
        style={{ backgroundImage: "url(/img/slid/service5.jpg)" }}
        data-overlay-dark="5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cont text-center">
                <h1 style={{fontSize:"55px"}}>Exibition / 3D design</h1>
                <div className="path">
                  <a href="#0">Services</a>
                  <span>/</span>
                  <a href="#0" className="active">
                    Exibition-Stall-Fabricators-&-3D-Design
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}

export default ServiceSectionHeader4;