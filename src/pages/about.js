import React from 'react'
import AboutBreadcrumb from '../components/About/AboutBreadcrumb'
import AboutCounter from '../components/About/AboutCounter'
import AboutSection from '../components/About/AboutSection'
import AboutTestimonial from '../components/About/AboutTestimonial'
import AboutVideo from '../components/About/AboutVideo'
import AboutWCU from '../components/About/AboutWCU'
import Layout1 from '../layouts/Layout1'
import { Helmet } from 'react-helmet'

export default function About() {
    return (
        <Layout1>
            <Helmet>
            
        <title>About Us | Silk Digitizing: Leaders in Embroidery & Vector Art</title>
        <meta name="description" content="Learn about Silk Digitizing, a leader in embroidery digitizing, graphic design, and vector conversion. Committed to excellence since 2012." />
        <meta name="keywords" content="about us, Silk Digitizing, embroidery digitizing, vector conversion, graphic design, company history"/>
        
           <link rel="canonical" href="https://silkdigitizing.com/about"></link>
           </Helmet>
            <AboutBreadcrumb/>
            <AboutSection/>
            <AboutVideo/>
            <AboutCounter/>
            <AboutWCU/>
            <AboutTestimonial/>
        </Layout1>
    )
}
