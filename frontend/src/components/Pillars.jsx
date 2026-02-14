import React, { useEffect } from 'react';
import { Target, Zap, ShieldCheck, Layers } from 'lucide-react';
import './Pillars.css';

import precisionImg from "../assets/pillars/precision.png";
import velocityImg from "../assets/pillars/velocity.png";
import securityImg from "../assets/pillars/security.png";
import scalabilityImg from "../assets/pillars/scalability.png";


const pillars = [
    {
        title: "PRECISION",
        desc: "In data migration, 99.9% isn't good enough. We engineer automated validation scripts to ensure absolute zero-loss accuracy across your entire ecosystem.",
        icon: <Target className="text-red-500" color='white' size={60} />,
        color: "group-hover:text-red-500",
        image: precisionImg
    },
    {
        title: "VELOCITY",
        desc: "Speed is the new currency. We utilize CI/CD pipelines and modular architectures to deploy features in weeks, not months—without breaking production.",
        icon: <Zap className="text-yellow-400" color='white' size={60} />,
        color: "group-hover:text-yellow-400",
        image: velocityImg
    },
    {
        title: "SECURITY",
        desc: "We don't add security at the end; we bake it in. From bank-grade encryption to role-based access control, your data is a fortress from day one.",
        icon: <ShieldCheck className="text-emerald-500" color='white' size={60} />,
        color: "group-hover:text-emerald-500",
        image: securityImg
    },
    {
        title: "SCALABILITY",
        desc: "We refuse to write dead-end code. Every system we build is architected to handle millions of requests, ensuring you never have to rebuild from scratch.",
        icon: <Layers className="text-blue-500" color='white' size={60} />,
        color: "group-hover:text-blue-500",
        image: scalabilityImg
    }
];

const Pillars = () => {

    return (

        <div id="pillarsection" className='minmaxhght'>

            <div id='' className="w90 m-auto border-transparent">

                <h1 className='mt-8 mb-5'>
                    Our 4 Pillars of Engineering
                </h1>


                <div className="grid">
                    {pillars.map((pillar, index) => (
                        <div key={index} id='card' className=" h45vh border rounded-40" style={{ backgroundImage: `url(${pillar.image})` }}>
                            <div id='pillarImage' className='h60'>

                                <div className="">
                                    {pillar.icon}
                                </div>

                                <h2 className=''>
                                    {pillar.title}
                                </h2>
                            </div>
                            <p className="pad1 m-0 bottom-0" style={{ backgroundColor: 'white' }}>
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