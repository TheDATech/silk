import React from 'react'
import Layout1 from '../layouts/Layout1'
import ServiceDetailBreadcrumb from '../components/ServiceDetails/ServiceDetailBreadcrumb'
import PatchesDetailsContent from '../components/ServiceDetails/PatchesDetailsContent'

export default function CustomePatches() {
    return (
        <>
            <Layout1>
                <ServiceDetailBreadcrumb />
                <PatchesDetailsContent />
            </Layout1>
        </>
    )
}
