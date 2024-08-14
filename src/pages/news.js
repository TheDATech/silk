import React from 'react'
import NewsArea from '../components/News/NewsArea'
import NewsBreadcrumb from '../components/News/NewsBreadcrumb'
import Layout1 from '../layouts/Layout1'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'

export default function News() {
    const {categoryname}=useParams();
    return (
        <>
         <Layout1>
         <Helmet>
         <title>Blog | Silk Digitizing: Insights on Embroidery & Design</title>
        <meta name="description" content="Stay updated with Silk Digitizing's blog for the latest trends, tips, and insights on embroidery digitizing, vector art, and graphic design." />
        <meta name="keywords" content="blog, embroidery blog, vector art blog, graphic design blog, Silk Digitizing insights"/>
           {categoryname?<link rel="canonical" href={`https://silkdigitizing.com/blogs/${categoryname}`}></link>:<link rel="canonical" href="https://silkdigitizing.com/blogs"></link>}
           </Helmet>
             <NewsBreadcrumb/>
             <NewsArea/>
             </Layout1>   
        </>
    )
}
