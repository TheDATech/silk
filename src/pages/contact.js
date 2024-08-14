import React from 'react'
import ContactBreadcrumb from '../components/Contact/ContactBreadcrumb'
import ContactGTA from '../components/Contact/ContactGTA'
import ContactInfo from '../components/Contact/ContactInfo'
import ContactMap from '../components/Contact/ContactMap'
import Layout1 from '../layouts/Layout1'
import { Helmet } from 'react-helmet'

export default function Contact() {
    return (
        <>
            <Layout1>
            <Helmet>
            <title>Contact Us | Silk Digitizing: Embroidery & Graphic Services</title>
        <meta name="description" content="Get in touch with Silk Digitizing for professional embroidery digitizing, vector conversion, and graphic design services. We're here to help!" />
        <meta name="keywords" content="contact, Silk Digitizing contact, embroidery services contact, vector services contact, graphic design contact"/>
           <link rel="canonical" href="https://silkdigitizing.com/contact"></link>
           </Helmet>
                <ContactBreadcrumb/>
                <ContactInfo/>
                <ContactGTA/>
                <ContactMap/>
            </Layout1>
        </>
    )
}
