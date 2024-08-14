import React, { useEffect, useState } from 'react'
import VideoPopUp from '../../components/Plugins/VideoPopup'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import { Navigation,EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';



export default function NewsArea() {
    const [allblogs,setAllblogs]=useState([])
    const {categoryname}=useParams();
    const navigate = useNavigate();
    const formattedCategoryName = categoryname ? categoryname : 'All';
    const [selectedCategory, setSelectedCategory] = useState(formattedCategoryName);
    console.log('selectedCategory',selectedCategory)
    const [uniqueCategories, setUniqueCategories] = useState(new Set());
    const [searchQuery, setSearchQuery] = useState('');


    const handleCategoryClick = (categoryName) => {
        const categoryPath = categoryName === 'All' ? '' : categoryName.toLowerCase().replace(/ /g, '-');
        navigate(`/blogs/${categoryPath}`);
      };


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

    useEffect(() => {
        if (allblogs && allblogs.length > 0) {
          const categories = new Set(allblogs.map(blog => blog.category.name));
          setUniqueCategories(categories);
        }
      }, [allblogs]);
    
      useEffect(() => {
        setSelectedCategory(formattedCategoryName);
      }, [formattedCategoryName]);

      const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
      };

      const filteredBlogs = allblogs.filter(blog => {
        console.log('blog',blog.category.slug === selectedCategory)
        const matchesCategory = selectedCategory === 'All' || blog.category.slug === selectedCategory;
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || blog.content.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            {/* <!-- news area start --> */}
            <div className="blog__area blog__area--2 pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-12">
                            {filteredBlogs && filteredBlogs.map(({id,title,banner,short_description,slug,category})=>{
                                return(
                                    <article className="blog__box blog__box--3 blog__box--image mb-40" key={id+banner}>
                                    <div className="thumb">
                                        <Link to={`/blog/${slug}`}>
                                            <img src={banner} alt={short_description} />
                                       </Link>
                                    </div>
                                    <div className="content pt-50">
                                        <Link to={`/blogs/${category.slug}`} className="cat">
                                            <span>{category.name}</span>
                                        </Link>
                                        <h4 className="title">
                                            <Link to={`/blog/${slug}`}>{title}</Link>
                                        </h4>
                                        
                                        <div className="post-text mb-35">
                                            <p>{short_description}</p>
                                        </div>
                                        <div className="post-bottom mt-30">
                                        <div className="authore">
                                               
                                            </div>
                                            <Link to={`/blog/${slug}`} className="inline-btn"><span className="icon"><i
                                                className="fal fa-arrow-right"></i></span> Read
                                                More</Link>
                                        </div>
                                    </div>
                                </article>
                                )
                            })}
                        </div>
                        <div className="col-xl-4 col-lg-12">
                            <div className="sidebar-wrap">
                                <div className="widget sidebar grey-bg mb-40">
                                    <h4 className="sidebar__title mb-30">
                                        <span><img src="/images/HomePage/heading-shape-3.png" className="mr-5" alt="" /></span>
                                        Search Objects
                                    </h4>
                                    <form className="sidebar-search-form" onSubmit={(e)=>e.preventDefault()}>
                                        <input type="text" placeholder="Search your keyword..." value={searchQuery} onChange={handleSearchChange}  required/>
                                        <button type="submit"><i className="fas fa-search"></i></button>
                                    </form>
                                </div>
                                <div className="widget sidebar grey-bg mb-40">
                                    <h4 className="sidebar__title mb-30">
                                        <span><img src="/images/shape/heading-shape-3.png" className="mr-5" alt="" /></span>
                                        Popular Feeds
                                    </h4>
                                    <ul className="recent-posts">
                                        {allblogs && allblogs.map(({id,title,slug,banner,short_description,category})=>{
                                            return(
<li key={id+slug}>
                                            <div className="thumb">
                                                <Link to={`/blog/${slug}`}><img
                                                    src={banner} alt={title} /></Link>
                                            </div>
                                            <div className="content">
                                                <h6 className="title"><Link to={`/blog/${slug}`}>{title}</Link></h6>
                                                <div className="meta"><Link to={`/blogs/${category.slug}`}>{category.name}</Link></div>
                                            </div>
                                        </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="widget sidebar grey-bg mb-40">
                                    <h4 className="sidebar__title mb-30">
                                        <span><img src="/images/shape/heading-shape-3.png" className="mr-5" alt="" /></span>
                                        Categories
                                    </h4>
                                    <ul className="sidebar__list">
                                        <li>
                                            <button onClick={() => handleCategoryClick('All')}>All
                                                <span className="icon"><i className="far fa-arrow-right"></i></span>
                                            </button>
                                        </li>
                                        {[...uniqueCategories].map((categoryName, index) => (
 <li key={index}>
 <button onClick={() => handleCategoryClick(categoryName)}>{categoryName}
     <span className="icon"><i className="far fa-arrow-right"></i></span>
</button>
</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- news area end -->    */}
        </>
    )
}
