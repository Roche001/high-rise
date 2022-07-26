import React from "react";
import "./House22.css";
import Carousel from "react-bootstrap/Carousel";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import { MdLocationOn } from "react-icons/md";
import { GiResize } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";
import { BsCalendar2 } from "react-icons/bs";
import { HiWifi } from "react-icons/hi";
import { GiWaterGallon } from "react-icons/gi";
import { GiAlarmClock } from "react-icons/gi";
import { BsFillCloudMoonFill } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";
import { MdCable } from "react-icons/md";
import { GiPostOffice } from "react-icons/gi";
import { FaLaptop } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { GrDocumentUser } from "react-icons/gr";
import { FaBusAlt } from "react-icons/fa";
import { RiParkingBoxFill } from "react-icons/ri";
import { RiBankLine } from "react-icons/ri";
import { IoIosCafe } from "react-icons/io";
import { IoIosBeer } from "react-icons/io";
import { IoIosRestaurant } from "react-icons/io";
import { IoMdTrain } from "react-icons/io";
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
const House22 = () => {
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
    <div className="offices-house container">
      <Carousel>
        <Carousel.Item interval={1000} className="sized">
          <img src="./assets/officef1.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officed2.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officed3.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officed4.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officed5.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officed6.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officed7.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officed8.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officed9.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officed10.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officed11.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officed12.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officed13.webp" alt="Featured-House" />
        </Carousel.Item>
        <Carousel.Item interval={500} className="sized">
          <img src="./assets/officed14.webp" alt="Featured-House" />
        </Carousel.Item>
      </Carousel>
      <div className="office-features">
        <h4>
          <small>
            <MdLocationOn />
          </small>
          <span>Address: Avinguda Diagonal, B 08018 Barcelona</span>
        </h4>
        <h4>
          <small>
            <GiResize />
          </small>
          <span>Office size: 8.457 Sq Ft</span>
        </h4>
        <h4>
          <small>
            <BsFillPeopleFill />
          </small>
          <span>Meeting size: 2 to 24 persons </span>
        </h4>
      </div>
      <div className="office-highlights">
        <h4>Office Center highlights</h4>
        <p>
          This innovative flex office is situated in a modern building in
          Barcelona’s Eixample district, contrasting beautifully against the
          historical architecture of the area. Found on Avinguda Diagonal, the
          large windows and open plan setting of the workspaces allow natural
          light to flood in, helping keep all tenants and members in a positive
          mindset throughout the working day. The chic interior includes
          well-furnished community areas that are perfect for casual meetings or
          as an alternative work environment to the many private office spaces
          available. Conference rooms are available for larger or more formal
          meetings and the communal outdoor area is a great place to grab a
          breath of fresh air. Regular networking events are held on site,
          presenting an opportunity to connect with like-minded entrepreneurs.
          The wellness room offers a quiet space to encourage creative thought
          whilst a community coffee bar means you don’t have to venture too far
          from your desk to get a caffeine boost.
        </p>
      </div>
      <div className="ties">
        {" "}
        <h3>Services & amenities</h3>
      </div>
      <div className="services-ammeinities">
        <h4>
          <small>
            <BsFillEyeFill />
          </small>
          <span>Virtual tours </span>
        </h4>
        <h4>
          <small>
            <BsCalendar2 />
          </small>
          <span>Flexible terms </span>
        </h4>
        <h4>
          <small>
            <HiWifi />
          </small>
          <span>Free WIFI</span>
        </h4>
        <h4>
          <small>
            <GiWaterGallon />
          </small>
          <span>Dispenser </span>
        </h4>
        <h4>
          <small>
            <GiAlarmClock />
          </small>
          <span>Move in </span>
        </h4>
        <h4>
          <small>
            <BsFillCloudMoonFill />
          </small>
          <span>24 hour access</span>
        </h4>
        <h4>
          <small>
            <GiNetworkBars />
          </small>
          <span>Realiable WIFI </span>
        </h4>
        <h4>
          <small>
            <MdCable />
          </small>
          <span>Fibre cabling </span>
        </h4>
        <h4>
          <small>
            <GiPostOffice />
          </small>
          <span>Fully furnished </span>
        </h4>
        <h4>
          <small>
            <FaLaptop />
          </small>
          <span>Internet </span>
        </h4>
        <h4>
          <small>
            <MdCleaningServices />
          </small>
          <span>Cleaning service </span>
        </h4>
        <h4>
          <small>
            <GrDocumentUser />
          </small>
          <span>Staffed reception </span>
        </h4>
      </div>
      <div className="office-about">
        <h3>About the area</h3>
        <p>
          Situated in Barcelona’s vibrant neighborhood of Eixample, this
          contemporary workspace captures the area’s positive atmosphere. Subway
          station Diagonal is just a short walk from the building, making
          commuting to work via public transport extremely easy. Cyclists and
          drivers are also catered for thanks to the onsite bike room and
          parking spaces. The office center’s position in one of the city’s most
          popular areas means that there are numerous restaurants, cafés and
          bars nearby, as well as some of the best shopping options in
          Barcelona.
        </p>
      </div>
      <div className="google-maps ">
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAXOQcxZzrxgrzdLhtRcmdBaiPEWzFkD8"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `750px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      <div className="available-work">
        <h3>Available workspaces</h3>
        <div className="available-one">
          <div className="available-img">
            <img
              className="d-block w-100"
              src="./assets/image1.png"
              alt="office"
            />
          </div>
          <div className="available-text">
            <h5>Private Office</h5>
            <p>Move-in ready, lockable offices for all team sizes</p>
          </div>
        </div>
        <div className="available-one">
          <div className="available-img">
            <img
              className="d-block w-100"
              src="./assets/image2.png"
              alt="office"
            />
          </div>
          <div className="available-text">
            <h5>Dedicated Desk</h5>
            <p>Unlock coworking spaces acrofor up to six months</p>
          </div>
        </div>
        <div className="available-one">
          <div className="available-img">
            <img
              className="d-block w-100"
              src="./assets/image3.png"
              alt="office"
            />
          </div>
          <div className="available-text">
            <h5>Coworking Space:Monthly Subscription</h5>
            <p>Your own desk in a shared office</p>
          </div>
        </div>
      </div>
      <div className="surrounding-distance">
        <h3>Distance to surroundings</h3>
        <table>
          <tr>
            <td>
              <h5>
                <FaBusAlt /> <span>Bus</span>
              </h5>
            </td>
            <td>52 m</td>
          </tr>
          <tr>
            <td>
              <h5>
                <IoMdTrain /> <span>Train</span>
              </h5>
            </td>
            <td>300 m</td>
          </tr>
          <tr>
            <td>
              <h5>
                <RiParkingBoxFill /> <span>Parking</span>
              </h5>
            </td>
            <td>104 m</td>
          </tr>
          <tr>
            <td>
              <h5>
                <RiBankLine /> <span>Bank</span>
              </h5>
            </td>
            <td>290 m</td>
          </tr>
          <tr>
            <td>
              <h5>
                <IoIosCafe /> <span>Cafe</span>
              </h5>
            </td>
            <td>109 m</td>
          </tr>
          <tr>
            <td>
              <h5>
                <IoIosBeer /> <span>Pub</span>
              </h5>
            </td>
            <td>45 m</td>
          </tr>
          <tr>
            <td>
              <h5>
                <IoIosRestaurant /> <span>Restaurant</span>
              </h5>
            </td>
            <td>49 m</td>
          </tr>
        </table>
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
                  <h5>$1550</h5>
                </div>
                <div className="span-ten">
                  <h6>Featured</h6>
                  <Link to="/House19" className="link">
                    <h6>Rent</h6>{" "}
                  </Link>
                </div>
                <img src="./assets/officec1.webp" alt="featured" />
              </div>
              <div className="box-text">
                <h6>Modern Office</h6>
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
                <h5>Ready for Occupation</h5>
              </div>
            </div>
            <div className="home-box-container nopadding">
              <div className="box-image">
                <div className="laydown-one">
                  {" "}
                  <h5>$1250</h5>
                </div>
                <div className="span-ten">
                  <h6>Featured</h6>
                  <Link to="/House18" className="link">
                    <h6>Rent</h6>{" "}
                  </Link>
                </div>
                <img src="./assets/officeb1.jpg" alt="featured" />
              </div>
              <div className="box-text">
                <h6>Modern Office</h6>
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
                <h5>Ready for Occupation</h5>
              </div>
            </div>
            <div className="home-box-container nopadding">
              <div className="box-image">
                <div className="laydown-one">
                  {" "}
                  <h5>$1550</h5>
                </div>
                <div className="span-ten">
                  <h6>Featured</h6>
                  <Link to="/House20" className="link">
                    <h6>Rent</h6>{" "}
                  </Link>
                </div>
                <img src="./assets/officed1.webp" alt="featured" />
              </div>
              <div className="box-text">
                <h6>Modern Office</h6>
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
                <h5>Ready for Occupation</h5>
              </div>
            </div>
            <div className="home-box-container nopadding">
              <div className="box-image">
                <div className="laydown-one">
                  {" "}
                  <h5>$1550</h5>
                </div>
                <div className="span-ten">
                  <h6>Featured</h6>
                  <Link to="/House17" className="link">
                    <h6>Rent</h6>{" "}
                  </Link>
                </div>
                <img src="./assets/officea1.jpg" alt="featured" />
              </div>
              <div className="box-text">
                <h6>Modern Office</h6>
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
                <h5>Spacious Office</h5>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default House22;
