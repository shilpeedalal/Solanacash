import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import Rectangle from '../assets/Rectangle 25.png'
import { Container } from 'react-bootstrap'

const EarnSolan = () => {
  return (
    <Container fluid>
    <div style={{backgroundColor: "#14F195", width: "100%", height: "509px", position: "relative" }}>
        <Row>
            <Col xs={12} md={6} className='text-center text-md-left mb-4 mb-md-0'>
            <h2 className='fs-40 fw-bolder' style={{padding: "100px", color: "black"}}>Earn Solanacash Token While You Trade</h2>
            <p style={{color: "black", paddingLeft: "10px"}}>You earn additional Solanacash token while you trade and also by achieving various milestone on our platform</p>
            <Button className='buttonStyle' style={{backgroundColor: "#1E1F23", color: "white"}}> Get Started </Button>
            </Col>
            <Col xs={12} md={6}>
            <img src={Rectangle} alt='Rectangle Image' style={{position: "absolute", top: "91px", right: "0"}} />
            </Col>
        </Row>
    </div>
    </Container>
  )
}

export default EarnSolan