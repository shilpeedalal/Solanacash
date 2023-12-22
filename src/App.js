import "./App.css";
import { Container, Button} from 'react-bootstrap'
import BgColorExample from '../src/components/Card'
import logo from '../src/assets/Group 3 1.png'
import Footer from "./components/Footer";
import FAQ from "./components/Faq";

function App() {
  return (
    <Container>
      <div className="p-1 mt-4">
        <img
          src={logo} 
          alt="logo Image"
        />
      </div>
    <div className="App">
      <h2 className="headingSmallDevice fw-bold text-center my-auto">
        Trade Securely On Solanacash. Fully decentralized P2P Platform On Solana
      </h2>
      <p className="text-center justify-content-center">
        While its great to have a good flow of crypto on your wallet, we know how you still need urgent cash to settle one or moe bills. Thats where we come in
      </p>
    </div>
    <div className="mt-4 d-flex justify-content-center flex-md-row flex-column align-items-center gap-4">
      <Button> Get Started</Button>
      <Button variant="outline-primary"> View Offers </Button>
    </div>

    {/* <BgColorExample /> */}
    <FAQ />
    <Footer />

    </Container>
  );
}

export default App;
