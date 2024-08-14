import React from 'react'
import PrivacyBreadcrumb from '../components/PrivacyPolicy/PrivacyBreadcrumb'
import PrivacySection from '../components/PrivacyPolicy/PrivacySection'
import Layout1 from '../layouts/Layout1'
import { Helmet } from 'react-helmet'

export default function PrivacyPolicy() {
    return (
        <>
          <Helmet>
          <title>Privacy Policy | Silk Digitizing: Your Data Protection</title>
        <meta name="description" content="Read Silk Digitizing's privacy policy to understand how we protect and use your personal information. We prioritize your privacy." />
        <meta name="keywords" content="privacy policy, data protection, personal information, Silk Digitizing privacy, customer privacy"/>
           <link rel="canonical" href="https://silkdigitizing.com/privacy-policy"></link>
           </Helmet>
        <Layout1>
         <PrivacyBreadcrumb/>
         <PrivacySection/>   
         </Layout1>
        </>
    )
}
