import React from 'react'
import ServiceData from '../../data/sections/about-us1.json'

const ProjectDetailsHeader = ({data}) => {
    return (
      <section className="page-header proj-det">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-9">
              <div className="cont">
                <h6>{data.tagline}</h6>
                <h2>{data.title}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ProjectDetailsHeader
