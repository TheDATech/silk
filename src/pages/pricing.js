import React from 'react'
import PricingBreadcrumb from '../components/Pricing/PricingBreadcrumb'
import PricingSection from '../components/Pricing/PricingSection'
import Layout1 from '../layouts/Layout1'
import { Helmet } from 'react-helmet'

export default function Pricing() {
    return (
        <>
            <Layout1>
            <Helmet>
            <title>Pricing | Silk Digitizing: Affordable Embroidery & Vector Services</title>
        <meta name="description" content="Check out Silk Digitizing's competitive pricing for embroidery digitizing, vector conversion, and graphic designing services." />
        <meta name="keywords" content="pricing, embroidery pricing, vector conversion cost, graphic design pricing, Silk Digitizing prices"/>
           <link rel="canonical" href="https://silkdigitizing.com/pricing"></link>
           </Helmet>
                <PricingBreadcrumb />
                <PricingSection />
            </Layout1>
        </>
    )
}
