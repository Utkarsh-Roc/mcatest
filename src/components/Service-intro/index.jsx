 import react from "react";
import Split from "../Split";

 const ServiceIntro = ()  => {
    return(
        <section className="intro-section section-padding1 call-action">
      <div className="container">
        <div className="row">
          <div className="mb-3">
            <div className="content sm-mb30">
              <Split>
              <h6 className="wow words chars splitting" data-splitting>
                  Services
                </h6>
            {/* <span className="mb-3">Services</span> */}
              <h2 className="mb-3   wow words  chars splitting" data-splitting>MCA <b>WorldWide</b> .</h2>
              <p className="wow txt words chars splitting " data-splitting>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                </Split>
            </div> 
          </div>    
        </div>
   </div>
    </section>
    )
 }

 export default ServiceIntro;