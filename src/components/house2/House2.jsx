import React from "react";
import "./House2.css";
import Carousel from "react-bootstrap/Carousel";
import { Accordion } from "react-bootstrap";
import { FaBed } from "react-icons/fa";
import { GiBathtub } from "react-icons/gi";
import { GiHomeGarage } from "react-icons/gi";
import { MdOutlineConstruction } from "react-icons/md";
import { MdOutlineSquareFoot } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { SiConcourse } from "react-icons/si";
import { GiFireplace } from "react-icons/gi";
import { FaSwimmingPool } from "react-icons/fa";
import { BsJournalCheck } from "react-icons/bs";
import { RiShieldCheckFill } from "react-icons/ri";
import { GiKnifeFork } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalf } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { GrServices } from "react-icons/gr";
import { AiOutlineStar } from "react-icons/ai";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const House2 = () => {
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: -1.2306616792179152, lng: 36.84835920697511 }}
      >
        <Marker
          position={{ lat: -1.2306616792179152, lng: 36.84835920697511 }}
        />
      </GoogleMap>
    ))
  );
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item interval={1000} className="sized">
          <img src="./assets/bed1.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/bed2.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/bed3.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/bed4.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/bed5.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/bed6.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/bed7.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/bed8.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/bed9.jpg" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/bed10.jpg" alt="Featured-House" />
        </Carousel.Item>
      </Carousel>
      <div className="amenities-conatiner">
        <h3>Villa in Rhino Hill</h3>
        <h3> $5,600/month</h3>
        <div className="amenities-card">
          <div className="card-one">
            <h5>
              {" "}
              <span>
                <FaBed />
              </span>
              3Beds
            </h5>
            <h5>
              {" "}
              <span>
                <GiBathtub />
              </span>
              2Baths
            </h5>
            <h5>
              <span>
                <GiHomeGarage />
              </span>
              1Garage
            </h5>
            <h5>
              <span>
                <MdOutlineConstruction />
              </span>
              2010 Year Built
            </h5>
            <h5>
              <span>
                <MdOutlineSquareFoot />
              </span>
              1400 sqft
            </h5>
          </div>
        </div>
        <div className="description">
          <h3>Description</h3>
          <p>
            There's no shortage of curb appeal for this beautiful 3 bedroom
            modern farmhouse plan. The formal entry and dining room open into a
            large open living area with raised ceilings and brick accent wall.
            The large kitchen has views to the rear porch and features an island
            with eating bar as well as a large pantry. The 3 bedrooms are
            well-sized and all include large walk-in closets. As an extra
            feature, an upstairs bonus space is provided that would be perfect
            for a guest suite or that family game room. With so much to offer,
            make this your next home today!
          </p>
        </div>
        <div className="location">
          <h3>Location</h3>
          <div className="google-maps ">
            <MapWithAMarker
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAXOQcxZzrxgrzdLhtRcmdBaiPEWzFkD8"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `750px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
        <div className="facts">
          <h3>Features and Facts </h3>
          <div className="facts-one">
            <div className="facts-one-info">
              <h3>
                <FaBuilding />
              </h3>

              <div className="facts-card">
                <h6>STORIES</h6>
                <p>Multi Family</p>
              </div>
            </div>
            <div className="facts-one-info">
              <h3>
                <MdOutlineConstruction />
              </h3>

              <div className="facts-card">
                <h6>Year Built</h6>
                <p>2009</p>
              </div>
            </div>
            <div className="facts-one-info">
              <h3>
                <SiConcourse />
              </h3>

              <div className="facts-card">
                <h6>Cooling</h6>
                <p>Yes</p>
              </div>
            </div>
            <div className="facts-one-info">
              <h3>
                <GiFireplace />
              </h3>

              <div className="facts-card">
                <h6>Heating</h6>
                <p>Yes</p>
              </div>
            </div>
            <div className="facts-one-info">
              <h3>
                <GiHomeGarage />
              </h3>

              <div className="facts-card">
                <h6>Garage</h6>
                <p>2</p>
              </div>
            </div>
            <div className="facts-one-info">
              <h3>
                <FaSwimmingPool />
              </h3>

              <div className="facts-card">
                <h6>Swimming Pool</h6>
                <p>Yes</p>
              </div>
            </div>
            <div className="facts-one-info">
              <h3>
                <MdOutlineSquareFoot />
              </h3>

              <div className="facts-card">
                <h6>Size</h6>
                <p>3200 sqft</p>
              </div>
            </div>
            <div className="facts-one-info">
              <h3>
                <BsJournalCheck />
              </h3>

              <div className="facts-card">
                <h6>Status</h6>
                <p>Available</p>
              </div>
            </div>
          </div>
          <div className="amen">
            <h3>Townhome Amenities</h3>
            <div className="amen-card">
              <div className="amen-one">
                <h5>
                  <span>
                    <RiShieldCheckFill />
                  </span>
                  Air-Conditioning
                </h5>
              </div>
              <div className="amen-one">
                <h5>
                  <span>
                    <RiShieldCheckFill />
                  </span>
                  Dining Room
                </h5>
              </div>
              <div className="amen-one">
                <h5>
                  <span>
                    <RiShieldCheckFill />
                  </span>
                  Dishwasher
                </h5>
              </div>
              <div className="amen-one">
                <h5>
                  <span>
                    <RiShieldCheckFill />
                  </span>
                  Doorman
                </h5>
              </div>
              <div className="amen-one">
                <h5>
                  <span>
                    <RiShieldCheckFill />
                  </span>
                  Hardwood Floors
                </h5>
              </div>
              <div className="amen-one">
                <h5>
                  <span>
                    <RiShieldCheckFill />
                  </span>
                  Onsite Parking
                </h5>
              </div>
              <div className="amen-one">
                <h5>
                  <span>
                    <RiShieldCheckFill />
                  </span>
                  Stunning Views
                </h5>
              </div>
              <div className="amen-one">
                <h5>
                  <span>
                    <RiShieldCheckFill />
                  </span>
                  Unit Washer/Dryer
                </h5>
              </div>
            </div>
          </div>
          <div className="foor-container">
            <h3>Floor Title</h3>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div className="plan">
                    <h5>Ground Floor Plan</h5>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <img
                    className="d-block w-100"
                    src="./assets/ground4.png"
                    alt="Ground Floor"
                  />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div className="plan">
                    <h5>First Floor Plan</h5>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <img
                    className="d-block w-100"
                    src="./assets/ground5.jpeg"
                    alt="Ground Floor"
                  />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <div className="plan">
                    <h5>Second Floor Plan</h5>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <img
                    className="d-block w-100"
                    src="./assets/ground6.jpeg"
                    alt="Ground Floor"
                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="yelp">
            <h3>What's Nearby</h3>
            <div className="food">
              <h4>
                <span>
                  <GiKnifeFork />
                </span>
                FOOD
              </h4>
              <div className="food-card">
                <div className="food-one">
                  <div className="food-conatiner">
                    <div className="part-one">
                      <Carousel fade>
                        <Carousel.Item className="item-one ">
                          <img
                            className="d-block w-100"
                            src="./assets/crush1.jpg"
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/crush2.jpg"
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/crush3.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/crush4.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/crush5.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/crush10.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="part-two">
                      <h5>01.Crush</h5>
                      <h4>
                        {" "}
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <span>271</span>
                      </h4>
                      <p>
                        {" "}
                        <span>Open</span>
                        until 10.00PM
                      </p>
                      <p>
                        {" "}
                        <sup>
                          <AiOutlineComment />
                        </sup>
                        “Amazing food, wine and service as always.”{" "}
                      </p>
                      <div className="small">
                        <h6>
                          <FcCheckmark />
                          Outdoor Dining
                        </h6>
                        <h6>
                          <FcCheckmark />
                          Delivery
                        </h6>
                        <div className="small-b">
                          <h6>
                            <span>
                              {" "}
                              <AiOutlineClose />
                            </span>
                            Takeout
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="food-conatiner">
                    <div className="part-one">
                      <Carousel fade>
                        <Carousel.Item className="item-one ">
                          <img
                            className="d-block w-100"
                            src="./assets/hara1.jpg"
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/hara2.jpg"
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/hara3.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/hara4.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/hara5.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/hara6.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="part-two">
                      <h5>02.El Camino</h5>
                      <h4>
                        {" "}
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <span>300</span>
                      </h4>
                      <p>
                        {" "}
                        <span>Open</span>
                        until Midnight
                      </p>
                      <p>
                        {" "}
                        <sup>
                          <AiOutlineComment />
                        </sup>
                        “If your in Mexico it's a must !!!! ”{" "}
                      </p>
                      <div className="small">
                        <h6>
                          <FcCheckmark />
                          Outdoor Dining
                        </h6>

                        <div className="small-b">
                          <h6>
                            <span>
                              {" "}
                              <AiOutlineClose />
                            </span>
                            Takeout
                          </h6>
                        </div>
                        <h6>
                          <FcCheckmark />
                          Delivery
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="food-conatiner">
                    <div className="part-one">
                      <Carousel fade>
                        <Carousel.Item className="item-one ">
                          <img
                            className="d-block w-100"
                            src="./assets/los1.jpg"
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/los2.jpg"
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/los3.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/los4.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/los5.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/los6.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="part-two">
                      <h5>03.Running Goose</h5>
                      <h4>
                        {" "}
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <span>300</span>
                      </h4>
                      <p>
                        {" "}
                        <span>Open</span>
                        until 11.30PM
                      </p>
                      <p>
                        {" "}
                        <sup>
                          <AiOutlineComment />
                        </sup>
                        “Well i have been waiting to go there for a long time. ”{" "}
                      </p>
                      <div className="small">
                        <h6>
                          <FcCheckmark />
                          Outdoor Dining
                        </h6>

                        <div className="small-b">
                          <h6>
                            <span>
                              {" "}
                              <AiOutlineClose />
                            </span>
                            Takeout
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="food-conatiner">
                    <div className="part-one">
                      <Carousel fade>
                        <Carousel.Item className="item-one ">
                          <img
                            className="d-block w-100"
                            src="./assets/san1.jpg"
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/san2.jpg"
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/san3.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/san4.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/san5.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/san6.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="part-two">
                      <h5>04.Buenas Noches</h5>
                      <h4>
                        {" "}
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <span>180</span>
                      </h4>
                      <p>
                        {" "}
                        <span>Open</span>
                        until 10.30PM
                      </p>
                      <p>
                        {" "}
                        <sup>
                          <AiOutlineComment />
                        </sup>
                        ““This place is incredible. The food was so delicious.”{" "}
                      </p>
                      <div className="small">
                        <h6>
                          <FcCheckmark />
                          Delivery
                        </h6>
                        <h6>
                          <FcCheckmark />
                          Outdoor Dining
                        </h6>

                        <div className="small-b">
                          <h6>
                            <span>
                              {" "}
                              <AiOutlineClose />
                            </span>
                            Takeout
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="food">
              <h4>
                <span>
                  <GrServices />
                </span>
                HOMESERVICES
              </h4>
              <div className="food-card">
                <div className="food-one">
                  <div className="food-conatiner">
                    <div className="part-one">
                      <Carousel fade>
                        <Carousel.Item className="item-one ">
                          <img
                            className="d-block w-100"
                            src="./assets/port1.jpg"
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/port2.jpg"
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/port3.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/port4.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/port5.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/port6.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="part-two">
                      <h5>01.Upperland Homeservices</h5>
                      <h4>
                        {" "}
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <FaStarHalf />
                        <span>271</span>
                      </h4>
                      <p>
                        {" "}
                        <span>Open</span>
                        until 10.00PM
                      </p>
                      <p>
                        {" "}
                        <sup>
                          <AiOutlineComment />
                        </sup>
                        “Great remodelling services.”{" "}
                      </p>
                    </div>
                  </div>
                  <div className="food-conatiner">
                    <div className="part-one">
                      <Carousel fade>
                        <Carousel.Item className="item-one ">
                          <img
                            className="d-block w-100"
                            src="./assets/mage1.jpg"
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/mage2.jpg"
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/mage3.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/mage4.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/mage5.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/mage6.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="part-two">
                      <h5>02.El Camino</h5>
                      <h4>
                        {" "}
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <span>400</span>
                      </h4>
                      <p>
                        {" "}
                        <span>Open</span>
                        until Midnight
                      </p>
                      <p>
                        {" "}
                        <sup>
                          <AiOutlineComment />
                        </sup>
                        “Super fast and professional service ”{" "}
                      </p>
                    </div>
                  </div>
                  <div className="food-conatiner">
                    <div className="part-one">
                      <Carousel fade>
                        <Carousel.Item className="item-one ">
                          <img
                            className="d-block w-100"
                            src="./assets/boys1.jpg"
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/boys2.jpg"
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/boys3.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/boys4.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/boys5.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/boys6.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="part-two">
                      <h5>03.Running Homeservices</h5>
                      <h4>
                        {" "}
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <span>300</span>
                      </h4>
                      <p>
                        {" "}
                        <span>Open</span>
                        until 11.30PM
                      </p>
                      <p>
                        {" "}
                        <sup>
                          <AiOutlineComment />
                        </sup>
                        “Excellent workmanship. ”{" "}
                      </p>
                    </div>
                  </div>
                  <div className="food-conatiner">
                    <div className="part-one">
                      <Carousel fade>
                        <Carousel.Item className="item-one ">
                          <img
                            className="d-block w-100"
                            src="./assets/maze1.jpg"
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/maze2.jpg"
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/maze3.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/maze4.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/maze5.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="item-one">
                          <img
                            className="d-block w-100"
                            src="./assets/maze6.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="part-two">
                      <h5>04.Buenas Homeservices</h5>
                      <h4>
                        {" "}
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <span>180</span>
                      </h4>
                      <p>
                        {" "}
                        <span>Open</span>
                        until 10.30PM
                      </p>
                      <p>
                        {" "}
                        <sup>
                          <AiOutlineComment />
                        </sup>
                        ““This place is incredible. The service was excellent.”{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default House2;
