import React from 'react'

import './About.css';


const About = () => {
    return (
        <>
            <div id='aboutsection' className='w70 m-auto bg-default'>

                <div className="t-left m-down border-transparent">
                    <h1>
                        Who We Are ?
                    </h1>

                    <p>
                        Data Analogy is a technology services company focused on helping organizations manage, migrate, and make sense of their data.
                        We work with enterprises and growing businesses to deliver reliable SAP data migration, software development, and data analytics solutions.

                        Our approach is practical, transparent, and driven by real business requirements — not unnecessary complexity.
                    </p>
                </div>


                <div className="t-left border-transparent">
                    <h1>
                        What We Do ?
                    </h1>

                    <p className='w95 m-auto'>
                        <li>
                            SAP data migration with validation and data integrity checks
                        </li>

                        <li>
                            Custom web and software development tailored to business workflows
                        </li>

                        <li>
                            Data analytics solutions that turn raw data into actionable insights
                        </li>

                        <li>
                            Data-focused consulting to support scalable system architecture
                        </li>
                    </p>

                    <p>
                        We design solutions that are secure, maintainable, and built to scale.
                    </p>
                </div >
            </div>

        </>
    )
}

export default About