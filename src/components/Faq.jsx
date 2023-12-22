import React from "react";
import {Container, Accordion } from "react-bootstrap";

const FAQ = () => {

  return (
   
        <Container className="pb-50 pt-50" >
          <div className="Faq">
          <h1 className="fw-bolder fs-40" >Frequently Asked Questions</h1>
          <p>
            Listen and hear what others are also asking about
          </p>

          </div>
          <div style={{ minHeight: "60vh" }}>
          <Accordion
            flush
            style={{ maxWidth: "1440px", marginTop: "50px", backgroundColor: "#1E1F23" }}
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
      <Accordion.Item eventKey="2">
        <Accordion.Header style={{backgroundColor: "#1E1F23"}}>
            <p>
            Is Solanacash safe? 
            </p>
        </Accordion.Header>
        <Accordion.Body>
        P2P stands for Peer-to-Peer. With P2P trading users buy and sell cryptocurrency between themselves without a third party or intermediary. Since there is no involvement of any third party, users can directly trade with each other more efficiently, profitably and securely.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
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
      <Accordion.Item eventKey="4">
        <Accordion.Header style={{backgroundColor: "#1E1F23"}}>
            <p>
            Is Solanacash safe? 
            </p>
        </Accordion.Header>
        <Accordion.Body>
        P2P stands for Peer-to-Peer. With P2P trading users buy and sell cryptocurrency between themselves without a third party or intermediary. Since there is no involvement of any third party, users can directly trade with each other more efficiently, profitably and securely.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
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
  
  );
};
export default FAQ;

