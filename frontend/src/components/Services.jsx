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

          <h1 className='mt-8 mb-2'>
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