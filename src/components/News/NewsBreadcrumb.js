import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function NewsBreadcrumb() {
    const category=useParams();
    const formattedCategoryName = category.categoryname && category.categoryname.replace(/-/g, ' ')
    return (
        <>
            {/* <!-- breadcrumb section start --> */}
            <section className='container-fluid newbreadcrumb'>
              <div className='newbreadcrumb-columnleft'>
              <img src='/images/shape/breadcrumb-shape.png' alt='' style={{width:'100%',height:'100%'}}/>
              </div>
              <div className='newbreadcrumb-columnRight'>
              <img src="/images/Blog/1275x500.png" alt="" style={{objectFit:'cover',width:'100%',height:'100%'}}/>
              <div className='newbreadcrumb-overlay'></div>
              </div>
              <div className="newbreadcrumbbreadcrumb-text">
                                <h1 className="breadcrumb-text__title">
                                New Article
                                </h1>
                                <ul className="breadcrumb-text__nav">
                                <li><Link to="/">Home</Link></li>
                                    <li>-</li>
                                    {category.categoryname?<li><Link to="/blog">Blogs</Link></li>:<li>Blogs</li>}
                                    {category.categoryname && <><li>-</li><li>{formattedCategoryName}</li></>}
                                </ul>
                            </div>
            </section>
            {/* <!-- breadcrumb section end -->    */}
        </>
    )
}
