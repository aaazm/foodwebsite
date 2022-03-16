import React from "react";
import Common from "../component/Common";
import webi from "../images/page-ban-bg.png"
import {Container, Row, Col, NavLink} from 'react-bootstrap'
import biImg from '../images/02.png'
const About = () => {
  return (
   <>
      <Common imgsrc={webi} />

      <section className='abut'>
          <Container>
            <Row>
              <Col md='6' className=''>
              <h4>For You</h4>
              <h1>APP EASY TO USE</h1>
                <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel vet auctor eta Aenean sollicitudin, lorem quis bibendum auctor, Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>
                <h3><b>Download App’s</b></h3>
                <p>Get Free Mobile App’s for Food Lover Available on</p>
                  <div className="d-flex">
                  <NavLink className='ps-0'>
                  <img src={require('../images/btn_google.png')} />
                </NavLink>
                <NavLink className='ps-0'>
                <img src={require('../images/btn_apps.png')} />
                </NavLink>
                  </div>
              </Col>
              <Col md='6' className=''>
                <div>
                  <img src={biImg} />
                </div>
              </Col>
            </Row>
          </Container>
      </section>
    </>
  )
}

export default About;