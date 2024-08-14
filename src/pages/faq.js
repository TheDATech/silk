import React from 'react'
import FAQBreadcrumb from '../components/FAQ/FAQBreadcrumb'
import FAQArea from '../components/FAQ/FAQArea'
import FAQGTA from '../components/FAQ/FAQGTA'
import Layout1 from '../layouts/Layout1'
import { Helmet } from 'react-helmet'

export default function FAQ() {
    return (
        <>
            <Layout1>
            <Helmet>
            <title>FAQ | Silk Digitizing: Frequently Asked Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about Silk Digitizing's embroidery digitizing, vector conversion, and graphic design services." />
        <meta name="keywords" content="FAQ, frequently asked questions, embroidery FAQs, vector conversion FAQs, graphic design FAQs, Silk Digitizing"/>
           <link rel="canonical" href="https://silkdigitizing.com/faq"></link>
           </Helmet>
                <FAQBreadcrumb />
                <FAQArea />
                <FAQGTA />
            </Layout1>
        </>
    )
}
