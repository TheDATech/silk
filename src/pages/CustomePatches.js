import React from 'react'
import Layout1 from '../layouts/Layout1'
import ServiceDetailBreadcrumb from '../components/ServiceDetails/ServiceDetailBreadcrumb'
import PatchesDetailsContent from '../components/ServiceDetails/PatchesDetailsContent'
import ServiceWorkingProgres from '../components/Patches/ServiceWorkingProgres'
import ServicePricing from '../components/Patches/ServicePricing'
import ProjectCTA from '../components/Project/ProjectCTA'

export default function CustomePatches() {
    return (
        <>
            <Layout1>
                <ServiceDetailBreadcrumb />
                <PatchesDetailsContent />
                <ServicePricing/>
                <ServiceWorkingProgres/>
                <ProjectCTA />
            </Layout1>
        </>
    )
}
