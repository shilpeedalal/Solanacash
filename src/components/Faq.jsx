import React from "react";
import {Container, Accordion } from "react-bootstrap";

const FAQ = () => {

  return (
    <>
      
      <Container>
        <Container style ={{ marginBottom: "205px"}}>
          <h1 className="text-center mt-5 p-2 pt-md-2 fw-bolder text-info" >Frequently Asked Questions</h1>
          <p
            Listen and hear what others are also asking about
          ></p>
          <div style={{ minHeight: "80vh" }}>
          <Accordion
            defaultActiveKey="0"
            flush="0"
            style={{ maxWidth: "1440px", marginTop: "50px" }}
          >
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{backgroundColor: "#1E1F23"}}>
            <p>
            Is Solanacash safe? 
            </p>
        </Accordion.Header>
        <Accordion.Body>
        P2P stands for Peer-to-Peer. With P2P trading users buy and sell cryptocurrency between themselves without a third party or intermediary. Since there is no involvement of any third party, users can directly trade with each other more efficiently, profitably and securely.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header style={{backgroundColor: "#1E1F23"}}>
            <p>Accordion Item #2</p></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
          </div>
        </Container>
      </Container>
    </>
  );
};
export default FAQ;