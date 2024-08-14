import React from 'react'
import HomeTwoAbout from '../components/HomeTwo/HomeTwoAbout'
import HomeTwoCounter from '../components/HomeTwo/HomeTwoCounter'
import HomeTwoFeature from '../components/HomeTwo/HomeTwoFeature'
import HomeTwoHero from '../components/HomeTwo/HomeTwoHero'
import HomeTwoProject from '../components/HomeTwo/HomeTwoProject'
import HomeTwoTestimonial from '../components/HomeTwo/HomeTwoTestimonial'
import HomeTwoVideo from '../components/HomeTwo/HomeTwoVideo'
import HomeTwoWCU from '../components/HomeTwo/HomeTwoWCU'
import HomeTwoWorkingProcess from '../components/HomeTwo/HomeTwoWorkingProcess'
import HomeTwoNews  from '../components/HomeTwo/HomeTwoNews'
import Layout1 from '../layouts/Layout1'
import {Helmet} from "react-helmet";

export default function Home2() {
    return (
        <>
           <Helmet>
           <title>Silk Digitizing | Professional Embroidery Digitizing & Vector Conversion Services</title>
        <meta name="description" content="Silk Digitizing offers expert embroidery digitizing, graphic designing, and vector conversion services. Serving the US, Canada, and UAE with fast, high-quality results." />
        <meta name="keywords" content="Silk Digitizing, embroidery digitizing, vector conversion, graphic design, embroidery services, digital embroidery, embroidery USA, embroidery Canada, embroidery UAE"/>
           <link rel="canonical" href="https://silkdigitizing.com"></link>
           </Helmet>
            <Layout1>
                <HomeTwoHero/>
                <HomeTwoAbout/>
                <HomeTwoFeature/>
                <HomeTwoVideo/>
                <HomeTwoWCU/>
                <HomeTwoWorkingProcess/>
                <HomeTwoTestimonial/>
                <HomeTwoCounter/>
                <HomeTwoProject/>
                <HomeTwoNews/>
            </Layout1>
        </>
    )
}
