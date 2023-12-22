import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

const OurFeatures = () => {
    const FeatureData = [
        {
            method: "No Verification Needed",
            content: "Get started in minutes. All you need to do is to connect your wallet, no need for personal information."
        },
        {
            method: "No Verification Needed",
            content: "Get started in minutes. All you need to do is to connect your wallet, no need for personal information."
        },
        {
            method: "No Verification Needed",
            content: "Get started in minutes. All you need to do is to connect your wallet, no need for personal information."
        },
        {
            method: "No Verification Needed",
            content: "Get started in minutes. All you need to do is to connect your wallet, no need for personal information."
        },
        {
            method: "No Verification Needed",
            content: "Get started in minutes. All you need to do is to connect your wallet, no need for personal information."
        },
        {
            method: "No Verification Needed",
            content: "Get started in minutes. All you need to do is to connect your wallet, no need for personal information."
        },
    ]
  return (
    <div>
    <div className=' OurFeatures pt-50 pb-50'>
        <h2 className='fs-40 fw-bolder'>Our Features</h2>
        <p>While its great to have a good flow of crypto on your wallet, we know how you still need urgent cash to <br /> settle one or more bills. Thats where we come in</p>
    </div>
    <Container className="pb-100">
    <Row className="justify-content-center">
            {FeatureData.map((data, index) => (
              <Col
                key={index}
                md={3}
                className="text-center border-center mx-3 my-3"
              >
                {/* <span className="rounded-circle px-3 py-4" style={{ background: "#F8F8F8" }}>
                  {data.icon}
                </span> */}
                <h4 className="fs-18 text-aligns-center" style={{ color: "white" }}>
                  {data.method}
                </h4>
                <p className="fs-16 text-aligns-center" style={{ color: "#B8B8B8" }}>
                  {data.content}
                </p>
              </Col>
            ))}
          </Row>
          </Container>

    </div>
  )
}

export default OurFeatures