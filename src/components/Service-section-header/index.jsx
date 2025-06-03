import react from "react";

const ServiceSectionHeader = ({data}) =>{
    return(
        <header 
        className="pages-header bg-img valign parallaxie"
        style={{ backgroundImage: `url(${data[0].serviceBg})`, backgroundPosition: "bottom"}}
        data-overlay-dark="5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cont text-center">
                <h1>{data[0].serviceTitle}</h1>
                <div className="path">
                  <a className="active">Home</a>
                  <span>/</span>
                  <a href="#0">Services</a>
                  <span>/</span>
                  {data[0].serviceLink }
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}

export default ServiceSectionHeader;