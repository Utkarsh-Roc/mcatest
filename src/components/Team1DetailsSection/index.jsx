/* eslint-disable @next/next/no-img-element */
import React from "react";
import team1Data from "../../data/sections/team1.json";

const Team1DetailsSection = () => {
  return (
    <section className="team-details section-padding">
      <div className="container">
        <div className="row">
          {team1Data.map((member, index) => (
            <div
              className="col-lg-12 mb-60"
              key={index}
              id={"team-detail-" + member.id} // Add id for scrolling target
            >
              <div className="row align-items-center">
                <div className="col-md-3 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-circle mb-3"
                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  />
                  <div>
                    <h6 className="mb-0">{member.name}</h6>
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2"
                        style={{ color: "#C13584" }}
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    )}
                  </div>
                </div>
                <div className="col-md-9">
                  <h4 className="mb-1">{member.name}</h4>
                  <h6 className="text-muted mb-2">{member.title}</h6>
                  <p>{member.desc}</p>
                  {member.youtube && (
                    <a
                      href={member.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-primary mt-2"
                    >
                      Watch Performance
                    </a>
                  )}
                </div>
              </div>
              <hr className="mt-4 mb-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team1DetailsSection;
