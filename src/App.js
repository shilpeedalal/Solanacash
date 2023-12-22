import "./App.css";
import { Container, Button, Row, Col} from 'react-bootstrap'
import BgColorExample from '../src/components/Card'
import logo from '../src/assets/Group 3 1.png'
import offerImage from '../src/assets/buy offers 1.png'
import EarnSolan from "./components/EarnSolan";
import Footer from "./components/Footer";
import FAQ from "./components/Faq";
import OurFeatures from "./components/OurFeatures"


function App() {
  return (
  
    <Container fluid>

      <Row className="pt-50 d-flex flex-wrap justify-content-between" >
      {/* <div className="d-flex justify-content-between"> */}
        <Col xs={12} md={6}>
        <img
          src={logo} 
          alt="logo Image"
        />
        </Col>
        <Col xs={12} md={6} className="pt-3 pt-md-0">
        <Button className="buttonStyle" style={{backgroundColor: "#9945FF", }}>Connect Wallet</Button>
        </Col>
      {/* </div> */}
      </Row>
    <div className="App pt-50">
      <h2 className="headingSmallDevice fw-bolder fs-40">
        Trade Securely On Solanacash.<br /> Fully decentralized P2P Platform On Solana
      </h2>
      <p className="fs-18">
        While its great to have a good flow of crypto on your wallet, we know how you still need urgent cash to settle one or<br /> more bills. Thats where we come in
      </p>
    </div>
    <div className="App pt-50 pb-50 d-flex justify-content-center">
      <Button className="buttonStyle" style={{backgroundColor: "#9945FF", marginRight: "15px"}}> Get Started</Button>
      <Button className="buttonStyle" style={{backgroundColor: "black", color: "white", border: "1px solid white"}}> View Offers </Button>
    </div>
    <div className="pt-50 pb-50" style={{textAlign: "center"}}>
      <img src={offerImage} alt="offer image" />
    </div>

    {/* <BgColorExample /> */}
    < OurFeatures />
    <EarnSolan />
    <FAQ />

    <Footer />
    </Container>
  );
}

export default App;
