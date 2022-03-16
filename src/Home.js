import React from "react";
import banner from './images/banner.jpg';
import abt from './images/abt-1.jpg';
import CommonAbout from './component/Aboutcommon'
import {Container, Row, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ViewProduct from './helper/Viewdynm'

const Home = () => {
  var settings = {
    dots: true,
    navigator: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <section className="banner">
      <img src={banner}/>
      <div className="carousel-caption ban-txt">
          <h5>WELCOME TO</h5>
          <p>Authentic Thai Cuisine – At An Affordable Price!</p>
        </div>

    </section>

      <CommonAbout
        maintitl="about us"
      abimg={abt}
       visit="/about"
       btnnaim="view more"
       abttitl="As you can imagine by the name,
       Thai Centric has some"
       decp="As you can imagine by the name, Thai Centric has some of the best tasting food from Thailand that you have ever had the chance to feast on. We have created a menu that contains many of your traditional favorites. These include tom yum soup, spicy curries, and so much more. With Thai Centric, you can count on an extensive menu that has a little of something for everyone. We are conveniently in the Hyde Parade district of Campbelltown, so you will want to stop by today for"  />

       <section  className="clisent my-5">
          <Container>
      
    <div className="main">
           <Slider {...settings}>
      <div className="testi">
        <div className="testi_in">
        <p>"Delicious food, delivered promptly. Quality and service is always the same, Excellent. In my opinion the best Thai restaurant in Campbelltown." </p>
        <h3>Peter</h3>
            <span> <i className="fa fa-star"></i> </span>
            <span> <i className="fa fa-star"></i> </span>
            <span> <i className="fa fa-star"></i> </span>
            <span> <i className="fa fa-star"></i> </span>
        </div>
      </div>
      <div className="testi">
        <div className="testi_in">
        <p>"Delicious food, delivered promptly. Quality and service is always the same, Excellent. In my opinion the best Thai restaurant in Campbelltown." </p>
        <h3>Peter</h3>
        <span> <i className="fa fa-star"></i> </span>
            <span> <i className="fa fa-star"></i> </span>
            <span> <i className="fa fa-star"></i> </span>
            <span> <i className="fa fa-star"></i> </span>
        </div>
      </div>
      <div className="testi">
        <div className="testi_in">
        <p>"Delicious food, delivered promptly. Quality and service is always the same, Excellent. In my opinion the best Thai restaurant in Campbelltown." </p>
        <h3>Peter</h3>
        <span> <i className="fa fa-star"></i> </span>
            <span> <i className="fa fa-star"></i> </span>
            <span> <i className="fa fa-star"></i> </span>
            <span> <i className="fa fa-star"></i> </span>
        </div>
      </div>
    </Slider>
    </div>

          </Container>
       </section>

       <section className="menu_sec">
         <Container>
           <Row>
             {ViewProduct.map((data)=>{
                return(
                  <Col md='4' className="menu_inn" key={data.id}>
                <div className="mnuinn">
                  <NavLink to={data.url}>
                  <h3 class="rot_com">{data.btntxt} <i className="fa fa-angle-left"></i></h3>
                  </NavLink>
                    <img src={data.image} />
                    <h2>{data.title}</h2>
                    <p>{data.decp}</p>
                </div>
              </Col>
                )
             })}
              
           </Row>
         </Container>
       </section>
    </>
  )
}

export default Home;