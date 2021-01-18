<<<<<<< HEAD
import React, { Component} from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
        <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100 img-fluid"
                  src="/assets/1.jpg"
                  alt="First slide"
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100 img-fluid"
                  src="/assets/2.jpg"
                  alt="Second slide"
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100 img-fluid"
                  src="/assets/3.jpg"
                  alt="Third slide"
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100 img-fluid"
                  src="/assets/4.jpg"
                  alt="Fourth slide"
                ></img>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <div>
          <h1 id="title"class="pt-5 text-center container-sm title">
            Our Mission
          </h1>
          <h5 id="midtitle" class="pt-5 text-center container-sm midtitle">
            The Association for the Advancement of Science and Engineering
            Education (AASEE) is dedicated to advancing science and engineering
            education at the K-12 level.
          </h5>
          <h6 id="subtitle" class="pt-3 text-center container-sm subtitle">
            The Association for the Advancement of Science and Engineering
            Education (AASEE) seeks to inspire future science and engineering
            leaders. AASEE gives priority to diverse populations, namely
            Canada’s first nations peoples, girls, and those in financial need,
            as well as rural populations. We are mandated to work across the
            globe, and are implementing an ambitious plan. To do so, AASEE
            designs educational outreach workshops at the K-12 level and travels
            to specific schools and school boards. The lessons the volunteers
            teach are curriculum-relevant, hands-on activities, which are meant
            to engage the student, along with teachers. The Association for the
            Advancement of Science and Engineering Education is a registered
            charity in Canada.
          </h6>
          </div>
          <div className="vector1">
            <img src="/assets/vector1.png" alt="vector1" />
          </div>
        </div>
        <div>
          <h1 id="title"class="pt-5 text-center container-sm title">
            Donors, Partners & Friends
          </h1>
          <img
            src="/assets/Capture 1.jpg"
            class="rounded mx-auto d-block center"
            alt=""
            width="60%"
          />
=======
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import Slider from './Slider';
import './Home.css';
import Background from './SlideImages/Vector1.jpg';
import Background2 from './SlideImages/Vector2.jpg';

var sectionStyle = {
    width: '100%',
    height: "400px",
    backgroundImage: `url(${Background})`
}
var sectionStyle2 = {
    width: '100%',
    height: "400px",
    backgroundImage: `url(${Background2})`
}

export default class Home extends Component {
    render() {
        return (
            <Fragment>
             
            <Jumbotron fluid > 
</Jumbotron>
<div style={sectionStyle}>
            <h1 fluid class="pt-5 text-center container-sm title">The Association for the Advancement of Science and Engineering Education (AASEE) is dedicated to advancing science 
and engineering education at the K-12 level.</h1>
<h6 fluid class="pt-3 text-center container-sm subtitle">The Association for the Advancement of Science and Engineering Education (AASEE) seeks to inspire future science and engineering leaders.

AASEE gives priority to diverse populations, namely Canada’s first nations peoples, girls, and those in financial need, as well as rural populations. 
We are mandated to work across the globe, and are implementing an ambitious plan. 
To do so, AASEE designs educational outreach workshops at the K-12 level and travels to specific schools and school boards. 
The lessons the volunteers teach are curriculum-relevant, hands-on activities, which are meant to engage the student, along with teachers. 

The Association for the Advancement of Science and Engineering Education is a registered charity in Canada.</h6>
        </div> 
        <div style={sectionStyle2}>
            <h1 fluid class="pt-5 text-center container-sm title">Awards</h1>
            <img fluid src="/assets/Awards Section.jpg" class="img-fluid rounded mx-auto d-block center" alt=""/>
            <a href="/news"><p class="pt-3 text-center container-sm subtitle">---Continue Reading---</p></a> 
        </div>
        <div>
            <h1 fluid class="pt-5 text-center container-sm title">Donors, Partners & Friends</h1>
            <img  fluid src="/assets/Capture 1.jpg" class="img-fluid rounded mx-auto d-block center" alt="" width="1500"/>
            <Slider/>
>>>>>>> 3dbfceb1e2019f92b7b6bfc9f63e4825d11c5480
        </div>
      </div>
    );
  }
}
