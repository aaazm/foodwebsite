import React from "react";
import { Container,Row,Col } from "react-bootstrap";


const Footer = () => {
  return(
    <>
        <div className="fotr">
          <Container>
            <Row>
              <Col md='6'>
                <img src={require('../images/logo-2.png')} />
              </Col>
              <Col md='6'>
                <h3 className="ft_txt">Opening Hours : <b>Mon-Sun : 11:00 AM - 9:40 PM</b></h3>
                <h3 className="ft_txt ps-4"><b>Please note, delivery times may vary.</b></h3>
              </Col>
            </Row>
          </Container>
        </div>
    </>
  )
}

export default Footer;