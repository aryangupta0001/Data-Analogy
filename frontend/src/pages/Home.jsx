
// pages/Home.jsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Industries from "../components/Industries";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import About from "../components/About";

import './Home.css'
import { useEffect } from "react";
import Pillars from "../components/Pillars";
import Blog from "../components/Blog";

export default function Home() {

    useEffect(() => {
        var navHeight = document.getElementById('navbar').offsetHeight + 'px';
        var strip = document.getElementById('stripBehindNav');
        strip.style.height = navHeight;
    }, [])

    return (
        <>
            <Navbar />

            <div id="landing" className="landing w100">
            </div>

            <div id="stripBehindNav">

            </div>


            <div className="w100">
                <Hero />
                <About />
                <Services />
                <Pillars />
                <Industries />
                <Blog />
                {/* <WhyUs /> */}
                {/* <CTA />
                <Footer /> */}
            </div>
        </>
    );
}