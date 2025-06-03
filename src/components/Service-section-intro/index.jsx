import react from "react";
import Split from "../Split";

const ServiceSectionIntro = ({ data }) => {
  return (
    <section className="intro-section section-padding1 call-action">
      <div className="container">
        <div className="row">
          <div className="mb-3">
            <div className="content sm-mb30">
              <h6 className="wow words chars splitting" data-splitting>
                Services
              </h6>
              {/* <span className="mb-3">Services</span> */}
              <h2 className="mb-3 wow words chars splitting" data-splitting>{data.serviceStrokeText} <b className="myStroke">{data[0].serviceText}</b> .</h2>
              
              <p className="wow txt words chars splitting mb-3" data-splitting>
                {data[0].serviceDetails}
              </p>
              <p className="wow txt words chars splitting mb-3" data-splitting>
                {data[0].serviceDetails2 ? data[0].serviceDetails2 : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSectionIntro;