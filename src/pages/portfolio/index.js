import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Project | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Project </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            if (data.link.includes(".io")) {
              return (
                <div key={i} className="po_item">
                  <img src={data.img} alt="" />
                  <div className="content">
                    <p>{data.description}</p>
                    <a href={data.link} rel="noreferrer" target="_blank">
                      View live demo
                    </a>
                  </div>
                </div>
              );
            }
            if (data.link.includes("private")) {
              return (
                <div key={i} className="po_item">
                  <img src={data.img} alt="" />
                  <div className="content">
                    <p>{data.description}</p>
                    <a href={"#"}>Private project</a>
                  </div>
                </div>
              );
            }
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link} rel="noreferrer" target="_blank">
                    View project
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
