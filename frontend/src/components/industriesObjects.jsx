import {
    Factory, GraduationCap, Blocks, Globe2, Truck, Stethoscope, Package, ShoppingCart, BookOpen, Briefcase, Layers, Monitor, Heart, MapPin, Cloud, Users
} from 'lucide-react';

import manufacturing from "../assets/industries/Manufacturing.png";
import school_learning_apps from "../assets/industries/School Learning Apps.png";
import erp_modules from "../assets/industries/ERP Modules.png";
import online_kpo_platforms from "../assets/industries/Online KPO Platforms.png";
import courier_logistics from "../assets/industries/Courier & Logistics.png";
import medical from "../assets/industries/Medical.png";
import online_delivery from "../assets/industries/Online Delivery.png";
import e_commerce from "../assets/industries/E-commerce.png";
import education_portal from "../assets/industries/Education Portals.png";
import job_portal from "../assets/industries/Job Portals.png";
import multi_service_platforms from "../assets/industries/Multi-Service Platforms.png";
import professional_websites from "../assets/industries/Professional Websites.png";
import online_dating from "../assets/industries/Online Dating.png";
import local_listing from "../assets/industries/Local Listing.png";
import saas_systems from "../assets/industries/SaaS System.png";
import community_platforms from "../assets/industries/Community Platforms.png";


export const industries = [
    {
        name: "Manufacturing",
        icon: <Factory size={40} color='white'  />,
        desc: "Data-driven systems for inventory, operations, and process optimization.",
        image : manufacturing   
    },

    {
        name: "School Learning Apps",
        icon: <GraduationCap size={40} color='white'  />,
        desc: "Scalable platforms for digital learning and student management.",
        image : school_learning_apps
    },

    {
        name: "ERP Modules",
        icon: <Blocks size={40} color='white'  />,
        desc: "Custom ERP components integrated with business systems.",
        image : erp_modules
    },

    {
        name: "Online KPO Platforms",
        icon: <Globe2 size={40} color='white'  />,
        desc: "Secure platforms supporting analytics and offshore operations.",
        image : online_kpo_platforms
    },

    {
        name: "Courier & Logistics",
        icon: <Truck size={40} color='white'  />,
        desc: "Shipment tracking and logistics data management systems.",
        image : courier_logistics
    },

    {
        name: "Medical",
        icon: <Stethoscope size={40} color='white'  />,
        desc: "Reliable software for healthcare data and compliance.",
        image : medical
    },

    {
        name: "Online Delivery",
        icon: <Package size={40} color='white'  />,
        desc: "Order management and real-time delivery platforms.",
        image : online_delivery
    },

    {
        name: "E-commerce",
        icon: <ShoppingCart size={40} color='white'  />,
        desc: "Scalable commerce platforms with analytics and integrations.",
        image : e_commerce  
    },

    {
        name: "Education Portals",
        icon: <BookOpen size={40} color='white'  />,
        desc: "Institutional portals for content, users, and reporting.",
        image : education_portal
    },

    {
        name: "Job Portals",
        icon: <Briefcase size={40} color='white'  />,
        desc: "Systems for job listings and candidate data workflows.",
        image : job_portal
    },

    {
        name: "Multi-Service Platforms",
        icon: <Layers size={40} color='white'  />,
        desc: "Unified platforms managing multiple services efficiently.",
        image : multi_service_platforms
    },

    {
        name: "Professional Websites",
        icon: <Monitor size={40} color='white'  />,
        desc: "High-performance websites for business presence.",
        image : professional_websites
    },

    {
        name: "Online Dating",
        icon: <Heart size={40} color='white'  />,
        desc: "Secure and scalable user-driven platforms.",
        image : online_dating
    },

    {
        name: "Local Listing",
        icon: <MapPin size={40} color='white'  />,
        desc: "Location-based discovery and listing platforms.",
        image : local_listing
    },

    {
        name: "SaaS System",
        icon: <Cloud size={40} color='white'  />,
        desc: "Cloud-ready SaaS applications built to scale.",
        image : saas_systems
    },

    {
        name: "Community Platforms",
        icon: <Users size={40} color='white'  />,
        desc: "Engagement-focused platforms for user interaction.",
        image : community_platforms
    },
];
