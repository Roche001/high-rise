import React from "react";
import "./House13.css";
import Carousel from "react-bootstrap/Carousel";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import { GrStar } from "react-icons/gr";
import { MdOutlineStarHalf } from "react-icons/md";
import { GiWashingMachine } from "react-icons/gi";
import { GiCooler } from "react-icons/gi";
import { TiInputChecked } from "react-icons/ti";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { FaWifi } from "react-icons/fa";
import { GiWoodenCrate } from "react-icons/gi";
import { GiHanger } from "react-icons/gi";
import { MdOutlineMicrowave } from "react-icons/md";
import { RiFridgeFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { RiShieldCheckFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaBed } from "react-icons/fa";
import { GiBathtub } from "react-icons/gi";
import { MdOutlineSquareFoot } from "react-icons/md";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
const House13 = () => {
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 55.178044, lng: 10.694409 }}
      >
        <Marker position={{ lat: 55.178044, lng: 10.694409 }} />
      </GoogleMap>
    ))
  );
  const options = {
    margin: 5,
    responsiveClass: true,
    autoWidth: true,
    loop: true,
    pullDrag: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoHeight: true,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item interval={1000} className="sized">
          <img src="./assets/ocean1.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/ocean2.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/ocean3.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/ocean4.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/ocean5.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/ocean6.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/ocean7.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/ocean8.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/ocean9.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/ocean10.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/ocean11.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/ocean12.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/ocean13.webp" alt="Featured-House" />
        </Carousel.Item>
      </Carousel>
      <div className="farm-one">
        <h2>5225 Greenwhich Pike</h2>
        <h5>Krasnoyarsk Krai, Russia</h5>
        <div className="farm-stars">
          <h5>
            <GrStar />
          </h5>
          <h5>
            <GrStar />
          </h5>
          <h5>
            <GrStar />
          </h5>
          <h5>
            <GrStar />
          </h5>
          <h5>
            <MdOutlineStarHalf />
          </h5>
          (<small>12 reviews</small>)
        </div>
        <div className="ranch-form">
          <h4>
            Monthly Rent <span>$32,000</span>
          </h4>

          <h4>
            Bedrooms<span>8Bedrooms</span>
          </h4>

          <h4>
            Bathrooms <span>8Bathrooms</span>
          </h4>

          <h4>
            Square Feet <span>12,558 SQ FT </span>
          </h4>
        </div>
        <div className="form-about">
          <h4>About 5225 Greenwhich Pike</h4>
          <p>
            This property is managed by Beztak, 2022 recipient of the US Best
            Managed Companies for the third year in a row, sponsored by Deloitte
            Private and The Wall Street Journal. Call and let us tell you why!
            ENJOY THE LIFE OF LUXURY Located in Chicago, Illinois The Residences
            at NewCity offers studio, one-, and two- bedroom apartments and
            features a door attendant, covered parking, swimming pool with
            expansive sundeck, bike racks, BBQ/picnic area, and more!With
            convenient access to shopping, dining, and entertainment, The
            Residences at NewCity is the perfect place to call your new home!
            Virtual and Contact-Free Leasing and Move-In Available - Self-Guided
            Tours with Lockboxes- FaceTime/Skype Tours- Apply & Sign Online
          </p>
          <h5>Unique Features</h5>
          <div className="order-list">
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              WiFi Available
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              24-Hour Door Attendant
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              After Hours Tours
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Bike Parking Station
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Outdoor Grilling Area
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Lounge with Fire Pit
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Quartz Countertops
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Theatre Room
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Washer/Dryer
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Plank Flooring
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Energy Efficient Appliances
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Recycling on Every Floor
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Stylish Lobby Entrance
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Contemporary Espresso Cabinets
            </li>
          </div>
        </div>
        <div className="contat-e">
          <h4>Agent</h4>

          <img src="./assets/agent5.jpeg" alt="Agent" />
          <h5>Name: Agent Agent Kathleem Myers</h5>
          <h5>Contact:(708) 919-2291</h5>
          <h5>Language:English, Arabic</h5>
          <h5>Open:Monday-Friday, 6.00am -5.30pm </h5>
        </div>
        <div className="part-features">
          <h4>Home Features</h4>
          <div className="omera row">
            <div className="part-feature-one">
              <h3>
                {" "}
                <GiWashingMachine />
              </h3>
              <span>In Unit Washer & Dryer</span>
            </div>
            <div className="part-feature-one">
              <h3>
                {" "}
                <GiCooler />
              </h3>
              <span>Air Conditioning</span>
            </div>
            <div className="part-feature-one">
              <h3>
                {" "}
                <CgSmartHomeWashMachine />
              </h3>
              <span>Dishwasher</span>
            </div>
            <div className="part-feature-one">
              <h3>
                {" "}
                <FaWifi />
              </h3>
              <span>High Speed Internet Access</span>
            </div>
          </div>
          <div className="omera row">
            <div className="part-feature-one">
              <h3>
                {" "}
                <GiWoodenCrate />
              </h3>
              <span>Hardwood Floor</span>
            </div>
            <div className="part-feature-one">
              <h3>
                {" "}
                <GiHanger />
              </h3>
              <span>Walk-in Closet</span>
            </div>
            <div className="part-feature-one">
              <h3>
                {" "}
                <MdOutlineMicrowave />
              </h3>
              <span>Microwave</span>
            </div>
            <div className="part-feature-one">
              <h3>
                {" "}
                <RiFridgeFill />
              </h3>
              <span>Refridgirator</span>
            </div>
          </div>
        </div>
        <div className="outline">
          <h3>Highlights</h3>
          <div className="order-list">
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              High Speed Internet Access
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Wi-Fi
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Unit Washer & Dryer
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Air Conditioning
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Heating
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Smoke Free
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Cable Ready
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Storage Units
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Double Vanities
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Tub/Shower
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Sprinkler System
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Wheelchair Accessible
            </li>
          </div>
          <h3>Kitchen Appliances</h3>
          <div className="order-list">
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Dishwasher
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Stainless Steel Appliances
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Oven
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Disposal
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Kitchen
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Range
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Ice Maker
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Microwave
            </li>
            <li>
              {" "}
              <span>
                <TiInputChecked />
              </span>
              Refrigerator
            </li>
          </div>
        </div>
        <div className="location">
          <h3>Location</h3>
          <p>5MHV+6Q7 Gudme, Denmark</p>
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAXOQcxZzrxgrzdLhtRcmdBaiPEWzFkD8"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `750px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <div className="neibor">
          <h3>Neighborhood</h3>
          <p>
            The historic neighborhood of Lexington is located in Kentucky,
            adjacent to Lincoln Park. Its buildings date back to the Victorian
            era, but the pace is anything but old-fashioned. Old Town is lively
            both day and night – residents enjoy the cool, eclectic shops as
            well as rustic taverns along Wells Street. When you first step into
            the community, you’ll probably notice the iron “Old Town” sign.
            You’ll also discover the diversity here, both in food and culture.
            The comedy zone is a great place to go for a good laugh – check out
            the Second City or Zanies Comedy Club for weekly shows. In addition
            to the eclectic shops along Wells Street, residents find comfort in
            the local market where they can purchase fragrant spices, imported
            oils, and blended wines. Many family-owned restaurants reside here -
            from pizza parlors to steakhouses and sushi.
          </p>
        </div>
        <div className="edu">
          <h3>Education</h3>
          <div className="edu-table">
            <table>
              <tr className="joe">
                <th> Colleges and Universities</th>
                <th>Mode of Travel</th>
                <th>Duration</th>
                <th className="right-align-data">Distance</th>
              </tr>
              <tr>
                <td className="anchor">
                  <a
                    href="http://localhost:3000/Rent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Stokkebækskolen School
                  </a>
                </td>
                <td>Walk:</td>
                <td> 15 min</td>
                <td>0.8 mi</td>
              </tr>
              <tr>
                <td className="anchor">
                  {" "}
                  <a
                    href="http://localhost:3000/Rent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kostgymnasium High School
                  </a>
                </td>
                <td>Drive: </td>
                <td> 3 min</td>
                <td>1.8 mi</td>
              </tr>
              <tr>
                <td className="anchor">
                  {" "}
                  <a
                    href="http://localhost:3000/Rent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Gymnasier Technical Institute
                  </a>
                </td>
                <td>Drive: </td>
                <td> 4 min</td>
                <td>2.8 mi</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="school">
          <h3>Schools</h3>
          <div className="school-container row">
            <div className="school-card nopadding col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="school-card-img">
                <img
                  className="d-block w-100"
                  src="./assets/magic.jpeg"
                  alt="magic"
                />
              </div>
              <div className="school-card-text">
                <h3 className="anchor">
                  <a
                    href="http://localhost:3000/Rent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Stokkebækskolen School
                  </a>{" "}
                </h3>
                <p>Public Elementary & Middle School</p>
                <h6>Grades PK-8</h6>
                <h6>571 Students</h6>
                <h6>
                  <MdLocationOn /> <span> Nearby</span>
                </h6>
                <h6>
                  <RiShieldCheckFill /> <span> Property Identified</span>
                </h6>
              </div>
            </div>
            <div className="school-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="school-card-img">
                <img
                  className="d-block w-100"
                  src="./assets/school2.jpeg"
                  alt="magic"
                />
              </div>
              <div className="school-card-text">
                <h3 className="anchor">
                  <a
                    href="http://localhost:3000/Rent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Stokkebækskolen School
                  </a>{" "}
                </h3>
                <p>Private High School</p>
                <h6>Grades PK-8</h6>
                <h6>571 Students</h6>
                <h6>
                  <MdLocationOn /> <span> Nearby</span>
                </h6>
                <h6>
                  <RiShieldCheckFill /> <span> Property Identified</span>
                </h6>
              </div>
            </div>
            <div className="school-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="school-card-img">
                <img
                  className="d-block w-100"
                  src="./assets/school3.jpeg"
                  alt="magic"
                />
              </div>
              <div className="school-card-text">
                <h3 className="anchor">
                  <a
                    href="http://localhost:3000/Rent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Stokkebækskolen School
                  </a>{" "}
                </h3>
                <p>Private High School</p>
                <h6>Grades PK-8</h6>
                <h6>571 Students</h6>
                <h6>
                  <MdLocationOn /> <span> Nearby</span>
                </h6>
                <h6>
                  <RiShieldCheckFill /> <span> Property Identified</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="school-container row">
            <div className="school-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="school-card-img">
                <img
                  className="d-block w-100"
                  src="./assets/school4.jpeg"
                  alt="magic"
                />
              </div>
              <div className="school-card-text">
                <h3 className="anchor">
                  <a
                    href="http://localhost:3000/Rent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Stokkebækskolen School
                  </a>{" "}
                </h3>
                <p>Private High School</p>
                <h6>Grades PK-8</h6>
                <h6>571 Students</h6>
                <h6>
                  <MdLocationOn /> <span> Nearby</span>
                </h6>
                <h6>
                  <RiShieldCheckFill /> <span> Property Identified</span>
                </h6>
              </div>
            </div>
            <div className="school-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="school-card-img">
                <img
                  className="d-block w-100"
                  src="./assets/school5.jpeg"
                  alt="magic"
                />
              </div>
              <div className="school-card-text">
                <h3 className="anchor">
                  <a
                    href="http://localhost:3000/Rent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Stokkebækskolen School
                  </a>{" "}
                </h3>
                <p>Private High School</p>
                <h6>Grades PK-8</h6>
                <h6>571 Students</h6>
                <h6>
                  <MdLocationOn /> <span> Nearby</span>
                </h6>
                <h6>
                  <RiShieldCheckFill /> <span> Property Identified</span>
                </h6>
              </div>
            </div>
            <div className="school-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="school-card-img">
                <img
                  className="d-block w-100"
                  src="./assets/school6.jpeg"
                  alt="magic"
                />
              </div>
              <div className="school-card-text">
                <h3 className="anchor">
                  <a
                    href="http://localhost:3000/Rent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Stokkebækskolen School
                  </a>{" "}
                </h3>
                <p>Private High School</p>
                <h6>Grades PK-8</h6>
                <h6>571 Students</h6>
                <h6>
                  <MdLocationOn /> <span> Nearby</span>
                </h6>
                <h6>
                  <RiShieldCheckFill /> <span> Property Identified</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="school-container row">
            <div className="school-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="school-card-img">
                <img
                  className="d-block w-100"
                  src="./assets/school7.jpeg"
                  alt="magic"
                />
              </div>
              <div className="school-card-text">
                <h3 className="anchor">
                  <a
                    href="http://localhost:3000/Rent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Stokkebækskolen School
                  </a>{" "}
                </h3>
                <p>Private High School</p>
                <h6>Grades PK-8</h6>
                <h6>571 Students</h6>
                <h6>
                  <MdLocationOn /> <span> Nearby</span>
                </h6>
                <h6>
                  <RiShieldCheckFill /> <span> Property Identified</span>
                </h6>
              </div>
            </div>
            <div className="school-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="school-card-img">
                <img
                  className="d-block w-100"
                  src="./assets/school8.jpeg"
                  alt="magic"
                />
              </div>
              <div className="school-card-text">
                <h3 className="anchor">
                  <a
                    href="http://localhost:3000/Rent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Stokkebækskolen School
                  </a>{" "}
                </h3>
                <p>Private High School</p>
                <h6>Grades PK-8</h6>
                <h6>571 Students</h6>
                <h6>
                  <MdLocationOn /> <span> Nearby</span>
                </h6>
                <h6>
                  <RiShieldCheckFill /> <span> Property Identified</span>
                </h6>
              </div>
            </div>
            <div className="school-card nopadding col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="school-card-img">
                <img
                  className="d-block w-100"
                  src="./assets/school9.jpeg"
                  alt="magic"
                />
              </div>
              <div className="school-card-text">
                <h3 className="anchor">
                  <a
                    href="http://localhost:3000/Rent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Stokkebækskolen School
                  </a>{" "}
                </h3>
                <p>Private High School</p>
                <h6>Grades PK-8</h6>
                <h6>571 Students</h6>
                <h6>
                  <MdLocationOn /> <span> Nearby</span>
                </h6>
                <h6>
                  <RiShieldCheckFill /> <span> Property Identified</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="interest">
          <h3>Points of Intests</h3>
          <p>Time and distance from the residences .</p>
          <div className="edu-table">
            <table>
              <tr>
                <th> Shopping Centers</th>
                <th>Mode of Travel</th>
                <th>Duration</th>
                <th className="right-align-data">Distance</th>
              </tr>
              <tr>
                <td className="anchor">
                  <a
                    href="http://localhost:3000/Rent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Blackhawk/Halsted
                  </a>
                </td>
                <td>Walk:</td>
                <td> 15 min</td>
                <td>0.8 mi</td>
              </tr>
              <tr>
                <td className="anchor">
                  {" "}
                  <a
                    href="http://localhost:3000/Rent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    NEWCITY - Lincoln Park
                  </a>
                </td>
                <td>Drive: </td>
                <td> 3 min</td>
                <td>1.8 mi</td>
              </tr>
              <tr>
                <td className="anchor">
                  {" "}
                  <a
                    href="http://localhost:3000/Rent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lincoln Park Center
                  </a>
                </td>
                <td>Drive: </td>
                <td> 4 min</td>
                <td>2.8 mi</td>
              </tr>
            </table>
          </div>
          <div className="edu-table">
            <table>
              <tr className="joe">
                <th> Parks and Recreation</th>
                <th>Mode of Travel</th>
                <th>Duration</th>
                <th className="right-align-data">Distance</th>
              </tr>
              <tr>
                <td className="anchor">
                  <a
                    href="http://localhost:3000/Rent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Oz Park
                  </a>
                </td>
                <td>Walk:</td>
                <td> 15 min</td>
                <td>0.8 mi</td>
              </tr>
              <tr>
                <td className="anchor">
                  {" "}
                  <a
                    href="http://localhost:3000/Rent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lincoln Park Zoo
                  </a>
                </td>
                <td>Drive: </td>
                <td> 3 min</td>
                <td>1.8 mi</td>
              </tr>
              <tr>
                <td className="anchor">
                  {" "}
                  <a
                    href="http://localhost:3000/Rent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Notebaert Nature Museum
                  </a>
                </td>
                <td>Drive: </td>
                <td> 4 min</td>
                <td>2.8 mi</td>
              </tr>
              <tr>
                <td className="anchor">
                  {" "}
                  <a
                    href="http://localhost:3000/Rent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lake Shore Park
                  </a>
                </td>
                <td>Walk: </td>
                <td> 4 min</td>
                <td>2.8 mi</td>
              </tr>
              <tr>
                <td className="anchor">
                  {" "}
                  <a
                    href="http://localhost:3000/Rent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lincoln Park
                  </a>
                </td>
                <td>Drive: </td>
                <td> 4 min</td>
                <td>2.8 mi</td>
              </tr>
              <tr>
                <td className="anchor">
                  {" "}
                  <a
                    href="http://localhost:3000/Rent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kajulu Hills Park
                  </a>
                </td>
                <td>Drive: </td>
                <td> 4 min</td>
                <td>2.8 mi</td>
              </tr>
            </table>
          </div>
        </div>{" "}
        <div className="similar">
          <h4>Similar Listings</h4>
          <div className="similar-card row">
            {" "}
            <OwlCarousel className="slider-items owl-carousel" {...options}>
              <div className="home-box-container nopadding">
                <div className="box-image">
                  <div className="laydown-one">
                    {" "}
                    <h5>$32,000/month</h5>
                  </div>
                  <div className="span-ten">
                    <h6>Listing</h6>
                    <Link to="/House14" className="link">
                      <h6>View</h6>{" "}
                    </Link>
                  </div>
                  <img src="./assets/rancho1.webp" alt="featured" />
                </div>
                <div className="box-text">
                  <h6>Farm & Ranch</h6>
                  <div className="box-def">
                    <h6>
                      <FaBed />
                      <span>4</span>
                    </h6>
                    <h6>
                      <GiBathtub />
                      <span>3</span>
                    </h6>
                    <h6>
                      <MdOutlineSquareFoot />
                      <span>1200 Sq Ft</span>
                    </h6>
                  </div>{" "}
                  <h5>Multi Family Home</h5>
                </div>
              </div>
              <div className="home-box-container nopadding">
                <div className="box-image">
                  <div className="laydown-one">
                    {" "}
                    <h5>$3,600/month</h5>
                  </div>
                  <div className="span-ten">
                    <h6>Listing</h6>
                    <Link to="/House10" className="link">
                      <h6>View</h6>{" "}
                    </Link>
                  </div>
                  <img src="./assets/castle1.webp" alt="featured" />
                </div>
                <div className="box-text">
                  <h6>Ranch & Farm</h6>
                  <div className="box-def">
                    <h6>
                      <FaBed />
                      <span>3</span>
                    </h6>
                    <h6>
                      <GiBathtub />
                      <span>3</span>
                    </h6>
                    <h6>
                      <MdOutlineSquareFoot />
                      <span>1100 Sq Ft</span>
                    </h6>
                  </div>{" "}
                  <h5>Multi Family Home</h5>
                </div>
              </div>
              <div className="home-box-container nopadding">
                <div className="box-image">
                  <div className="laydown-one">
                    {" "}
                    <h5>$4,200/month</h5>
                  </div>
                  <div className="span-ten">
                    <h6>Listing</h6>
                    <Link to="/House16" className="link">
                      <h6>View</h6>{" "}
                    </Link>
                  </div>
                  <img src="./assets/whity1.webp" alt="featured" />
                </div>
                <div className="box-text">
                  <h6>Ranch & Farm</h6>
                  <div className="box-def">
                    <h6>
                      <FaBed />
                      <span>4</span>
                    </h6>
                    <h6>
                      <GiBathtub />
                      <span>3</span>
                    </h6>
                    <h6>
                      <MdOutlineSquareFoot />
                      <span>1200 Sq Ft</span>
                    </h6>
                  </div>{" "}
                  <h5>Multi Family Home</h5>
                </div>
              </div>
              <div className="home-box-container nopadding">
                <div className="box-image">
                  <div className="laydown-one">
                    {" "}
                    <h5>$8,000/month</h5>
                  </div>
                  <div className="span-ten">
                    <h6>Listing</h6>
                    <Link to="/House12" className="link">
                      <h6>View</h6>{" "}
                    </Link>
                  </div>
                  <img src="./assets/malibu1.webp" alt="featured" />
                </div>
                <div className="box-text">
                  <h6>Ranch & Farm</h6>
                  <div className="box-def">
                    <h6>
                      <FaBed />
                      <span>4</span>
                    </h6>
                    <h6>
                      <GiBathtub />
                      <span>3</span>
                    </h6>
                    <h6>
                      <MdOutlineSquareFoot />
                      <span>1200 Sq Ft</span>
                    </h6>
                  </div>{" "}
                  <h5>Multi Family Home</h5>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default House13;
