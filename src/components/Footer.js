import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer ">
        <main>
          <Row className="pt-3">
            <Col>
              <h3>
                <Link
                  to="/home"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Nanny Network
                </Link>
              </h3>
              <h5>
                &#169; 2023 Created by{" "}
                <a style={{ textDecoration: "none", color: "white" }}
                  href="https://www.linkedin.com/in/serjayparks/"
                  class="effect-shine"
                >
                  Serjay Parks
                </a>{" "}
              </h5>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <h5>
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  About Us
                </Link>
              </h5>
              <h5>
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Contact Us
                </Link>
              </h5>
            </Col>
          </Row>
        </main>
      </footer>
    </>
  );
}
