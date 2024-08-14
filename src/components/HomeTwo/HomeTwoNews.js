import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function HomeTwoNews() {
    const [allblogs,setAllblogs]=useState([])
 
    const getAllBlog=async()=>{
        try{
         const res=await axios.get("https://silk.thedatech.com/api/all-blogs");
         setAllblogs(res.data)
        }catch(err){
            console.log('err',err)
        }
    }

    useEffect(()=>{
        getAllBlog()
    },[])
    return (
        <>
         {/* <!-- news section start --> */}
    <section className="news-area news-area__2  pb-125">
        <div className="container">
            <div className="row">
                <div className="col-xl-7">
                    <div className="section-header">
                        <h4 className="sub-heading sub-heading__2 mb-10">Latest articles</h4>
                        <h2 className="section-title section-title__2">Recent update</h2>
                    </div>
                </div>
                <div className="col-xl-5 text-right news-right">
                    <Link to="/news" className="inline-btn"><span className="icon"><i className="far fa-arrow-right"></i></span>
                        Go to blog</Link>
                </div>
            </div>
            <div className="row mt-none-30">
                {allblogs && allblogs.map(({id,title,banner,short_description,slug,category})=>{
                    return(
                        <div className="col-xl-6 col-lg-12 mt-30" key={title+id}>
                    <article className="post-box">
                        <div className="post-box__thumb post-box__thumb--2">
                            <img src={banner} alt={short_description}/>
                        </div>
                        <div
                            className="post-box__content post-box__content--2 post-box__content--grey post-box__content--white  pl-45 pr-45">
                            <Link to={`/blogs/${category.slug}`} className="date-author">{category.name}</Link>
                            <h4 className="post-box__title post-box__title--2">
                                <Link to={`/blog/${slug}`}>{title}</Link>
                            </h4>
                            <div className="post-box__excerpt">
                                        <p>{short_description}</p>
                                    </div>
                            <Link to={`/blog/${slug}`} className="inline-btn mt-0">
                                <span className="icon"><i className="far fa-arrow-right"></i></span>
                                continue Reading
                            </Link>

                        </div>
                    </article>
                </div> 
                    )
                })}
            </div>
        </div>
    </section>
    {/* <!-- news section end -->    */}
        </>
    )
}
