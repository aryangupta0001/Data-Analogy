// components/Hero.jsx

import { useEffect } from 'react';
import './Hero.css';

export default function Hero() {

  useEffect(() => {
    var height = window.innerHeight;
    var usedHeight = document.getElementById('landing').offsetHeight + document.getElementById('stripBehindNav').offsetHeight;

    var heroTextHeight = height - usedHeight;

    var heroText = document.getElementById('heroText');
    heroText.style.height = heroTextHeight + 'px';
  }, [])


  return (
    <section className="">
      <div className="">
        <div id="heroText">
          <h1 className="mt0">
            Turning Enterprise Data<br />Into Scalable Solutions
          </h1>
        </div>
      </div>
    </section>
  );
}
