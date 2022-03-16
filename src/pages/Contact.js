import React from "react";
import Common from "../component/Common";
import webi from "../images/contact-bg.jpg"
import {Container, Col, Row, Button} from 'react-bootstrap'
const Contact = () => {
  return(
      <>
        <Common imgsrc={webi} />
        <section className="contact">
          <Container>
            <Row>
              <Col md='12'>
                  <div className="frm">
                    <input type='text' name='' placeholder="Enter Name..." className="colfrm" />
                    <input type='text' name='' placeholder="Enter Email..." className="colfrm" />
                    <input type='text' name='' placeholder="Enter Phone..." className="colfrm" />
                    <input type='text' name='' placeholder="Enter Address..." className="colfrm" />
                    <input type='text' name='' placeholder="Enter State..." className="colfrm" />
                    <input type='text' name='' placeholder="Enter Bload Group..." className="colfrm" />
                    <textarea placeholder="Enter Text...." className="txtarea"></textarea>
                      <Button className="submit">Submit</Button>
                  </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
  )
}

export default Contact;