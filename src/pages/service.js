import React from 'react'
import Layout1 from '../layouts/Layout1'
import ServiceBreadcrumb from '../components/Service/ServiceBreadcrumb'
import ServiceSection from '../components/Service/ServiceSection'
import ServiceWorkingProgres from '../components/Service/ServiceWorkingProgres'
import ServicePricing from '../components/Service/ServicePricing'
import ServiceStrategy from '../components/Service/ServiceStrategy'
import { Helmet } from 'react-helmet'
export default function Service() {
    return (
        <>
        <Helmet>
        <title>Our Services | Silk Digitizing: Embroidery & Vector Conversion</title>
        <meta name="description" content="Explore Silk Digitizing's range of services, including embroidery digitizing, graphic designing, and vector conversion. Quality craftsmanship with a quick turnaround." />
        <meta name="keywords" content="embroidery digitizing services, vector conversion services, graphic design services, embroidery designs, vector art, Silk Digitizing services"/>
        <link rel="canonical" href="https://silkdigitizing.com/services"></link>
        </Helmet>
            <Layout1>
                <ServiceBreadcrumb />
                {/*<ServiceFeature/> */}
                <ServiceSection/>
                <ServiceWorkingProgres/>
                <ServiceStrategy/>
                <ServicePricing/>
            </Layout1>
        </>
    )
}
