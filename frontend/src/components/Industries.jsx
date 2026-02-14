// components/Industries.jsx
import React from 'react';

import { useState } from "react";
import "./Industries.css";
import { industries } from "./industriesObjects";





export default function Industries() {

  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((i) => (i - 1 + industries.length) % industries.length);

  const next = () =>
    setActive((i) => (i + 1) % industries.length);

  const getItem = (offset) =>
    industries[(active + offset + industries.length) % industries.length];

  return (
    <div className="h100vh border-transparent">
      <h1 className="mt-8 mb-5">
        Industries We Serve
      </h1>

      <div className="carousel-container w100 h50">
        <button className="nav-btn" onClick={prev}>‹</button>

        <div className="carousel-row w90 h100">
          <Slide type="second" item={getItem(-2)} />
          <Slide type="side" item={getItem(-1)} />
          <Slide type="main" item={getItem(0)} />
          <Slide type="side" item={getItem(1)} />
          <Slide type="second" item={getItem(2)} />
        </div>

        <button className="nav-btn" onClick={next}>›</button>
      </div>


    </div>
  );
}

function Slide({ item, type }) {
  return (
    <div className={`slide ${type} card-text card-icon card-background`} style={{ backgroundImage: `url(${item.image})` }}>
        <div className="icon">
          {item.icon}
        </div>

        <h2 className='m-0'>
          {item.name}
        </h2>

        <p className='m-0'>
          {item.desc}
        </p>
      </div>
  );
}
