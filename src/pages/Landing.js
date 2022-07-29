import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./landing.css";

const CARDS = 8;
const MAX_VISIBILITY = 2;

const Landing = () => {
  const words = [
    "magically",
    "beautifully",
    "elegantly",
    "delightfully",
    "together",
    "incredibly",
  ];
  const [time, setTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => (t + 1) % words.length);
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="app">
        <div className="details">
          {/* <div>
            <h1>Welcome to the Tech Blogs</h1>
          </div> */}
          <div>
            <p> lets Learn from here, </p>
            <p className="appear"> {words[time]}. </p>
          </div>
          <div className="call-to-action">
            <h3>Stay curious. </h3>
            <p>
              Discover <span> stories, thinking, and expertise</span> from
              writers <br /> on any topic.
            </p>
            <button>
              <NavLink
                to="/home"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                Start reading{" "}
              </NavLink>
            </button>
          </div>
        </div>
        <Carousel1>
          {[...new Array(CARDS)].map((_, i) => (
            <Card1
              title={"Card " + (i + 1)}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              img={"./" + (i + 1) + ".jpg"}
            />
          ))}
        </Carousel1>
      </div>
    </>
  );
};

export default Landing;

// import React, {useState} from 'https://cdn.skypack.dev/react';
// import ReactDOM from 'https://cdn.skypack.dev/react-dom';
// import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons/ti';

const Card1 = ({ title, content, img }) => (
  <div className={`card1 `}>
    {/* <h2>{title}</h2> */}
    {/* <p>{content}</p> */}
    <img src={img} alt="asc" />
  </div>
);

const Carousel1 = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActive((i) => {
        if (i < 5) return (i + 1) % count;
        else return (i = 2);
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <div className="carousel-container">
      <div className="carousel1">
        {React.Children.map(children, (child, j) => (
          <div
            className={` ${
              j === active ? "active card-container " : "card-container"
            }`}
            style={{
              "--active": j === active ? 1 : 0,
              "--offset": (active - j) / 3,
              "--direction": Math.sign(active - j),
              "--abs-offset": Math.abs(active - j) / 3,
              "pointer-events": active === j ? "auto" : "none",
              opacity: Math.abs(active - j) >= MAX_VISIBILITY ? "0" : "1",
              display: Math.abs(active - j) > MAX_VISIBILITY ? "none" : "block",
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
