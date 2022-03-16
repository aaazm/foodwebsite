import React from "react";
import Common from "../component/Common"
import webi from "../images/banner-3.jpg"
import {Container, Row, Col} from "react-bootstrap"
import {MenuList} from "./hlpr"

const Menu = () => {
  return(
    <div>
      <Common imgsrc={webi} />

        <section className="menu">
            
          <Container>
            <div className="text-center pt-4 pb-4">
            <h2>Food Lover</h2>
            <h1>LUNCH MENU</h1>
            <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
            </div>
            <Row>
              {MenuList.map((menudata)=>{
                return(
                  <Col md='6' className='mb-3' key={menudata.id}>
                  <div className="border p-2">
                      <Row>
                          <Col md='3'>
                            <img src={menudata.imag} />
                          </Col>
                          <Col md='9'>
                            <div className="d-flex">
                              <div>
                                <h3>{menudata.title}</h3>
                                <p>{menudata.para}</p>
                              </div>
                              <div>
                                <h5>{menudata.price}</h5>
                              </div>
                            </div>
                          </Col>
                      </Row>
                  </div>
                </Col>
                )
              })}
             
            </Row>
          </Container>

        </section>
    </div>
  )
}

export default Menu;