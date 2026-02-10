/*

// components/Services.jsx
// const services = {
//   "SAP Data Migration" : "Securely migrate legacy systems to SAP S/4HANA with zero data loss. We use automated ETL validation to ensure a risk-free transition with minimal business downtime.",

//   "Mobile App Development" : "High-performance iOS and Android applications built for speed and scale. Turn your customers' smartphones into your most powerful engagement channel with intuitive, user-centric design.",
//   "Application Maintenance & Management" : "Proactive monitoring, security patching, and 24/7 support for your critical infrastructure. We handle the bugs and updates so you can focus purely on business growth.",
//   "Web Design & Development" : "Blazing fast, SEO-optimized MERN stack websites that look distinct and perform flawlessly. We build digital experiences that convert casual visitors into loyal clients.",
//   "Software Development" : "Custom enterprise software tailored to your specific operational workflows. Stop struggling with off-the-shelf limitations and build a solution that adapts to you.",
//   "Data Analytics" : "Transform raw numbers into clear, actionable strategies using PowerBI and Tableau. Stop guessing and start making decisions backed by real-time business intelligence.",
//   "Technology Consulting" : "Strategic roadmaps for complex digital transformations. We audit your current stack to cut costs, improve efficiency, and future-proof your business against rapid tech changes."
// };

const services = [
  {
    title: "SAP Data Migration",
    desc: "Securely migrate to S/4HANA with zero data loss. We use automated validation for a risk-free transition.",
    icon: <Database className="text-blue-600" size={32} />
  },
  {
    title: "Mobile App Dev",
    desc: "High-performance iOS & Android apps. Turn smartphones into your most powerful engagement channel.",
    icon: <Smartphone className="text-blue-600" size={32} />
  },
  {
    title: "App Maintenance",
    desc: "Proactive monitoring and 24/7 support. We handle the bugs so you can focus on growth.",
    icon: <Wrench className="text-blue-600" size={32} />
  },
  {
    title: "Web Development",
    desc: "Fast, SEO-optimized MERN stack sites. We build digital experiences that convert visitors into clients.",
    icon: <Code2 className="text-blue-600" size={32} />
  },
  {
    title: "Software Dev",
    desc: "Custom enterprise software tailored to your workflows. Build solutions that adapt to you.",
    icon: <Cpu className="text-blue-600" size={32} />
  },
  {
    title: "Data Analytics",
    desc: "Transform raw data into actionable strategies. Stop guessing and start knowing with PowerBI.",
    icon: <BarChart3 className="text-blue-600" size={32} />
  },
  {
    title: "Tech Consulting",
    desc: "Strategic roadmaps for digital transformation. We help you cut costs and future-proof your stack.",
    icon: <Lightbulb className="text-blue-600" size={32} />
  }
];

export default function Services() {
  return (
    <section className="">
      <div className="">
        <h2 className="">
          Our Services
        </h2>

        <div className="">
          {services.map((service) => (
            <div
              key={service}
              className=""
            >
              <h3 className="">{service}</h3>
              <p className="">
                Enterprise-grade solutions tailored to your business needs.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
*/

import React from 'react';
import {
  Database,
  Smartphone,
  Wrench,
  Code2,
  Cpu,
  BarChart3,
  Lightbulb
} from 'lucide-react';

import './Services.css';


const services = [
  {
    title: "SAP Data Migration",
    desc: "Securely migrate to S/4HANA with zero data loss. We use automated validation for a risk-free transition.",
    icon: <Database className="text-blue-600" size={45} />
  },
  {
    title: "Mobile App Dev",
    desc: "High-performance iOS & Android apps. Turn smartphones into your most powerful engagement channel.",
    icon: <Smartphone className="text-blue-600" size={45} />
  },
  // {
  //   title: "App Maintenance",
  //   desc: "Proactive monitoring and 24/7 support. We handle the bugs so you can focus on growth.",
  //   icon: <Wrench className="text-blue-600" size={32} />
  // },
  {
    title: "Web Development",
    desc: "Fast, SEO-optimized MERN stack sites. We build digital experiences that convert visitors into clients.",
    icon: <Code2 className="text-blue-600" size={45} />
  },
  {
    title: "Software Dev",
    desc: "Custom enterprise software tailored to your workflows. Build solutions that adapt to you.",
    icon: <Cpu className="text-blue-600" size={45} />
  },
  {
    title: "Data Analytics",
    desc: "Transform raw data into actionable strategies. Stop guessing and start knowing with PowerBI.",
    icon: <BarChart3 className="text-blue-600" size={45} />
  },
  {
    title: "Tech Consulting",
    desc: "Strategic roadmaps for digital transformation. We help you cut costs and future-proof your stack.",
    icon: <Lightbulb className="text-blue-600" size={45} />
  }
];

export default function Services() {
  return (
    <>
      <div id='services' >

        <div className="w60 m-auto border-transparent">

          <h1>
            Our Services
          </h1>
          <p>
            End-to-end technology solutions tailored to scale your enterprise.
          </p>


          <div id='servicesTable' className=''>
            {services.map((service, index) => (
              <div key={index} id='service' className='pad-y-1 flex height-max-content'>
                <div className='w10'>
                  {React.cloneElement(service.icon)}
                </div>

                <h3 className='w25'>
                  {service.title}
                </h3>

                <p className='t-justify f-size-1 w49 m-0'>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}