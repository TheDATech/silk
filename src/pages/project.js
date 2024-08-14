import React from 'react'
import ProjectBreadcrumb from '../components/Project/ProjectBreadcrumb'
import ProjectCTA from '../components/Project/ProjectCTA'
import ProjectSection from '../components/Project/ProjectSection'
import Layout1 from '../layouts/Layout1'
import { Helmet } from 'react-helmet'

export default function Project() {
    return (
        <>
          <Helmet>
          <title>Portfolio | Silk Digitizing: Embroidery & Vector Art Samples</title>
        <meta name="description" content="Explore our portfolio showcasing Silk Digitizing's best work in embroidery digitizing, vector conversion, and graphic design." />
        <meta name="keywords" content="portfolio, embroidery samples, vector art samples, graphic design work, Silk Digitizing"/>
           <link rel="canonical" href="https://silkdigitizing.com/portfolio"></link>
           </Helmet>
            <Layout1>
                <ProjectBreadcrumb />
                <ProjectSection />
                <ProjectCTA />
            </Layout1>
        </>
    )
}
