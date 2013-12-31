/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { Button, Row, Col } from "react-bootstrap";

export const AboutUsSection = () => {
  return (
    <section className="about add_before">
      <div className="container">
        <div className="about-us-section">
          <Row style={{ marginTop: 50 }}>
            <Col md={6} style={{ marginTop: 30 }}>
              <p style={{ color: "#ED213A", fontSize: 22, fontWeight: "600" }}>
                What We Stand For
              </p>
              <h2 style={{ color: "white" }}>
                The Most Creative Studio Agency In The Global Market
              </h2>
              <h3 className="mt-4" style={{ color: "white" }}>
                What We Stand For The Most Creative Studio Agency In The Global
                Market What was once a small, competing digital agency in 2018
                is now one of the leading digital hubs that has helped countless
                start-up businesses to stand up on their feet across the globe.
                We don’t make logos; we create brand identities; we don’t make
                websites; we make an online presence. With a flexible, capable
                and experienced team of digital players working in a creative
                studio, our game-changing deliveries give our clients the direct
                path to prosperity and success in these extraordinarily
                competitive times.
              </h3>
              <div className="text-center mt-5">
                <div className="">
                  <Button className="btn-lg mx-1 mb-5">Start Project</Button>{" "}
                  <Button className="btn-xlg mx-1 mb-5">Our Portfolio</Button>
                </div>
              </div>
            </Col>
            <Col md={6} className="text-center mt-5">
              <div style={{ justifyContent: "center" }}>
                <img src={"tag.png"} className="img-fluid mb-3" />
                <h3 className="mt-4" style={{ color: "white" }}>
                  RaloxSoft helps you reach your target audience and connect
                  with them like never before. Every project we work on is
                  created from scratch by our talented team of designers,
                  Developers, and creatives. We can create anything your
                  business needs to rise above the competition and make a real
                  impact. Traditional ways are passe: Today's digital world
                  requires unconventional designs that work across every
                  platform and attract the customers you want to reach: Our
                  creative team is well versed in the latest UX design trends
                  and is ready to build the perfect experience for your brand.
                  Create compelling experiences that turn your customers into
                  raving fans. At RaloxSoft, we believe that experience
                  is everything.
                </h3>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
