import React, { useEffect } from 'react';
import { Target, Zap, ShieldCheck, Layers } from 'lucide-react';
import './Pillars.css';

import precisionImg from "../assets/precision.png";
import velocityImg from "../assets/velocity.png";
import securityImg from "../assets/security.png";
import scalabilityImg from "../assets/scalability.png";


const pillars = [
    {
        title: "PRECISION",
        desc: "In data migration, 99.9% isn't good enough. We engineer automated validation scripts to ensure absolute zero-loss accuracy across your entire ecosystem.",
        icon: <Target className="text-red-500" size={60} />,
        color: "group-hover:text-red-500",
        image: precisionImg
    },
    {
        title: "VELOCITY",
        desc: "Speed is the new currency. We utilize CI/CD pipelines and modular architectures to deploy features in weeks, not months—without breaking production.",
        icon: <Zap className="text-yellow-400" size={60} />,
        color: "group-hover:text-yellow-400",
        image: velocityImg
    },
    {
        title: "SECURITY",
        desc: "We don't add security at the end; we bake it in. From bank-grade encryption to role-based access control, your data is a fortress from day one.",
        icon: <ShieldCheck className="text-emerald-500" size={60} />,
        color: "group-hover:text-emerald-500",
        image: securityImg
    },
    {
        title: "SCALABILITY",
        desc: "We refuse to write dead-end code. Every system we build is architected to handle millions of requests, ensuring you never have to rebuild from scratch.",
        icon: <Layers className="text-blue-500" size={60} />,
        color: "group-hover:text-blue-500",
        image: scalabilityImg
    }
];

const Pillars = () => {

    useEffect(() => {
        var height = window.innerHeight;
        var usedHeight = document.getElementById('stripBehindNav').offsetHeight;

        var pillarSectionHeight = height - usedHeight;

        var pillarsection = document.getElementById('pillarsection');
        pillarsection.style.height = pillarSectionHeight + 'px';
    }, [])


    return (

        <div id="pillarsection">

            <div id='' className="w70 m-auto border-transparent">

                <h1 className='mt-2'>
                    Our 4 Pillars of Engineering
                </h1>


                <div className="flex">
                    {pillars.map((pillar, index) => (
                        <div key={index} id='card' className="w20 h45vh border rounded-40">
                            <div className='h55' style={{ backgroundImage: `url(${pillar.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                                <div className="">
                                    {pillar.icon}
                                </div>

                                <h2>
                                    {pillar.title}
                                </h2>
                            </div>
                            <p className="pad1 m-0">
                                {pillar.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div >
        </div >
    );
};

export default Pillars;