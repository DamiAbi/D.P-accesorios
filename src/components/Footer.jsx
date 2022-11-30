import React from "react";
import "font-awesome/css/font-awesome.css";
import "../css/footer.css";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer= () => {
  return (
    <>
      <div className="footer__container">
        <Row className="FooterRow ">
          <Col className="FooterColMail col-md-12">
            <a className="text-dark" href="">
              Copyright © 2022 All rights reserved | ®DPcompany |
             damithapam@gmail.com
            </a>
          </Col>

         
        </Row>
      </div>
    </>
  );
};

export default Footer;