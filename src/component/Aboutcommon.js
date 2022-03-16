import { Container,Row, Col } from "react-bootstrap";
import {NavLink} from "react-router-dom"

 const CommonAbout = (props) => {
  return(
    <section className="about">
      <h2>{props.maintitl}</h2>
        <Container>
            <Row className="abt_row">
              <Col md="6">
                <figure>
                <img src={props.abimg} />
                 <div className="abtlink">
                 <NavLink to={props.visit}>
                    {props.btnnaim}
                  </NavLink>
                 </div>
                </figure>
                 
              </Col>
              <Col md="6">
                <div className="abt_ryt_txt">
                <h3>{props.abttitl}</h3>
                <p>{props.decp}</p>
                </div>
                
              </Col>
            </Row>
        </Container>
    </section>
  )
}

export default CommonAbout;