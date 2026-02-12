// components/Industries.jsx
import {
  Factory,
  GraduationCap,
  Blocks,
  Globe2,
  Truck,
  Stethoscope,
  Package,
  ShoppingCart,
  BookOpen,
  Briefcase,
  Layers,
  Monitor,
  Heart,
  MapPin,
  Cloud,
  Users
} from 'lucide-react';
import React from 'react';

import { useState } from "react";
import "./Industries.css";


const items = [
  {
    name: "Manufacturing", icon: <Factory size={40} />,
    desc: "Data-driven systems for inventory, operations, and process optimization."
  },

  {
    name: "School Learning Apps", icon: <GraduationCap size={40} />,
    desc: "Scalable platforms for digital learning and student management."
  },

  {
    name: "ERP Modules", icon: <Blocks size={40} />,
    desc: "Custom ERP components integrated with business systems."
  },

  {
    name: "Online KPO Platforms", icon: <Globe2 size={40} />,
    desc: "Secure platforms supporting analytics and offshore operations."
  },

  {
    name: "Courier & Logistics", icon: <Truck size={40} />,
    desc: "Shipment tracking and logistics data management systems."
  },

  {
    name: "Medical", icon: <Stethoscope size={40} />,
    desc: "Reliable software for healthcare data and compliance."
  },

  {
    name: "Online Delivery", icon: <Package size={40} />,
    desc: "Order management and real-time delivery platforms."
  },

  {
    name: "E-commerce", icon: <ShoppingCart size={40} />,
    desc: "Scalable commerce platforms with analytics and integrations."
  },

  {
    name: "Education Portals", icon: <BookOpen size={40} />,
    desc: "Institutional portals for content, users, and reporting."
  },

  {
    name: "Job Portals", icon: <Briefcase size={40} />,
    desc: "Systems for job listings and candidate data workflows."
  },

  {
    name: "Multi-Service Platforms", icon: <Layers size={40} />,
    desc: "Unified platforms managing multiple services efficiently."
  },

  {
    name: "Professional Websites", icon: <Monitor size={40} />,
    desc: "High-performance websites for business presence."
  },

  {
    name: "Online Dating", icon: <Heart size={40} />,
    desc: "Secure and scalable user-driven platforms."
  },

  {
    name: "Local Listing", icon: <MapPin size={40} />,
    desc: "Location-based discovery and listing platforms."
  },

  {
    name: "SaaS System", icon: <Cloud size={40} />,
    desc: "Cloud-ready SaaS applications built to scale."
  },

  {
    name: "Community Platforms", icon: <Users size={40} />,
    desc: "Engagement-focused platforms for user interaction."
  },
];




export default function Industries() {

  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((i) => (i - 1 + items.length) % items.length);

  const next = () =>
    setActive((i) => (i + 1) % items.length);

  const getItem = (offset) =>
    items[(active + offset + items.length) % items.length];

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
    <div className={`slide ${type}`}>
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
