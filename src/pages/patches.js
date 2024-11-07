import React from 'react'
import Layout1 from '../layouts/Layout1'
import ServiceBreadcrumb from '../components/Patches/ServiceBreadcrumb'
import ServiceSection from '../components/Patches/ServiceSection'
import ServiceWorkingProgres from '../components/Patches/ServiceWorkingProgres'
import ServicePricing from '../components/Patches/ServicePricing'
import ServiceStrategy from '../components/Patches/ServiceStrategy'
import { Helmet } from 'react-helmet'
import PatchesDetailsContent from '../components/ServiceDetails/PatchesDetailsContent'

export default function Patches() {
    return (
        <>
        <Helmet>
        <title>Our Patches | Silk Digitizing: Custom Patches</title>
        <meta name="description" content="Explore Silk Digitizing's range of patches, including Custom Patches, Embroidered Patches, and Chenille Patches. Quality craftsmanship with a quick turnaround." />
        <meta name="keywords" content="Custom Patches services, vector conversion services, graphic design services, embroidery designs, vector art, Silk Digitizing services"/>
        <link rel="canonical" href="https://silkdigitizing.com/patches"></link>
        </Helmet>
            <Layout1>
                <ServiceBreadcrumb />
                {/*<ServiceFeature/> */}
                <PatchesDetailsContent/>
                <ServicePricing/>
                <ServiceSection/>
                <ServiceWorkingProgres/>
                <ServiceStrategy/>
            </Layout1>
        </>
    )
}
