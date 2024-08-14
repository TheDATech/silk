import React from 'react'
import Layout1 from '../layouts/Layout1'
import RefundBreadcrumb from '../components/RefundPolicy/RefundBreadcrumb'
import RefundSection from '../components/RefundPolicy/RefundSection'
import { Helmet } from 'react-helmet'

export default function RefundPolicy() {
    return (
        <>
         <Helmet>
         <title>Refund Policy | Silk Digitizing: Fair Business Practices</title>
        <meta name="description" content="Review Silk Digitizing's refund policy for embroidery digitizing, vector conversion, and graphic design services. Transparent and fair practices." />
        <meta name="keywords" content="refund policy, returns, Silk Digitizing refund, fair business, customer satisfaction"/>
           <link rel="canonical" href="https://silkdigitizing.com/refund-policy"></link>
           </Helmet>
        <Layout1>
         <RefundBreadcrumb/>
         <RefundSection/>
         </Layout1>
        </>
    )
}
