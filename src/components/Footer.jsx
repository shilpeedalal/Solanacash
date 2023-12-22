import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  
  return (
    <>
      <Container className="Footer pb-50 pt-80">
       <Row className="text-center justify-content-center">
        <h2 className="headingSmallDevice fw-bold text-center my-auto fs-40">

         Join Our Community
        </h2>
        <p className="pb-50">
        We are always looking forward to your feedback in our community, join our community so you can help contribute in making Solanacash better. We’d love to hear from you!
        </p>
        <div className="pb-50"> 
        <FaInstagramSquare size={50} style={{marginRight: "10px"}}/>
        <FaTelegram  size={50} style={{marginRight: "10px"}}/>
        <FaSquareTwitter  size={50} style={{marginRight: "10px"}}/>
        <FaGithubSquare size={50}/>
        </div>
       </Row>
       <div className="border" style={{border: "1px solid white"}}>

       </div>
      <div
        className="d-flex justify-content-center align-items-center Footer pt-50"
      >
        © 2021 Solanacash. All Rights Reserved.
      </div>
      </Container>
    </>
  );
};

export default Footer;
