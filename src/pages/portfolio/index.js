import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  featuredProjects,
  sideProjects,
  meta,
} from "../../content_option";

function ProjectGrid({ projects }) {
  return (
    <div className="mb-5 po_items_ho">
      {projects.map((data, i) => {
        const isExternal = data.link.includes(".so") || data.link.includes(".io");
        const isPrivate = data.link.includes("private");
        return (
          <div key={i} className="po_item">
            <img src={data.img} alt="" />
            <div className="content">
              <p>{data.description}</p>
              {isPrivate ? (
                <a href="#">Private project</a>
              ) : (
                <a href={data.link} rel="noreferrer" target="_blank">
                  {isExternal ? "View live" : "View project"}
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Projects | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Projects</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4">Featured</h3>
            <ProjectGrid projects={featuredProjects} />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4">Side Projects & Experiments</h3>
            <ProjectGrid projects={sideProjects} />
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
