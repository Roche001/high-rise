import React from "react";
import "./Photo.css";
import Carousel from "react-bootstrap/Carousel";
import { GoSearch } from "react-icons/go";

const Photo = () => {
  return (
    <div className="photo">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../assets/home1.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Awesome Family Home</h3>
            <h6>4bed-3baths-347 sq ft</h6>
            <button className="click">View Details </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../assets/home2.jpeg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Extraordinary Reach</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="click">View Details </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../assets/home3.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Exceptional Property</h3>
            <p>Our target audience is luxury seeking clients</p>
            <button className="click">View Details </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="search">
        <select className="picker">
          <option value="Buy">Buy</option>
          <option value="Rent">Rent</option>
          <option value="Sold">Sold</option>
        </select>
        <select className="picker">
          <option value="Apartment">Apartment</option>
          <option value="Offices">Offices</option>
          <option value="Townhome">Townhome</option>
          <option value="Houses">Houses</option>
          <option value="Studio">Studio</option>
        </select>

        <input
          className="required"
          type="search"
          name="seach"
          placeholder="Search"
          required
        />

        <button className="search-button">
          <a href="#search">
            <h6>
              <span>
                <GoSearch />
              </span>
              Search
            </h6>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Photo;