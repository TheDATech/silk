import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function NewsDetailsArea() {
    const [blogdetail,setBlogdetail]=useState();
    const [allblogs,setAllblogs]=useState([])
    const [uniqueCategories, setUniqueCategories] = useState(new Set());

    const {slug}=useParams()
    const navigate = useNavigate();

     const getBlogDetail=async()=>{
        try{
          const res=await axios.get(`https://silk.thedatech.com/api/blog-details/${slug}`)
          setBlogdetail(res.data)
        }catch(err){
            console.log('err',err)
        }
     }

     const getAllBlog=async()=>{
        try{
         const res=await axios.get("https://silk.thedatech.com/api/all-blogs");
         setAllblogs(res.data)
        }catch(err){
            console.log('err',err)
        }
    }

    const handleCategoryClick = (categoryName) => {
        const categoryPath = categoryName === 'All' ? '' : categoryName.toLowerCase().replace(/ /g, '-');
        navigate(`/blogs/${categoryPath}`);
      };

    useEffect(()=>{
        getAllBlog()
        getBlogDetail()
    },[])

    useEffect(() => {
        if (allblogs && allblogs.length > 0) {
          const categories = new Set(allblogs.map(blog => blog.category.name));
          setUniqueCategories(categories);
        }
      }, [allblogs]);



    return (
        <>
           {/* <!-- news area start --> */}
    <div className="blog__area blog__area--2 pt-125 pb-125">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-12">
                    <article className="blog__box blog__box--3 blog__box--details">
                        <div className="content pt-50">
                            <div className="cat mb-20">
                                <span>Businese</span>
                            </div>
                            <h4 className="title">
                                Lorem ipsum dolor sit amet, consecte
                                cing elit, sed do eiusmod tempor.
                            </h4>
                            <div className="meta mt-20 mb-20">
                                <span><i className="far fa-user"></i> by Piklo D. Sindom </span>
                                <span><a href="#0"><i className="far fa-calendar-alt"></i> 24th March 2019</a></span>
                                <span><a href="#0"><i className="far fa-comments"></i> 23 Comments</a></span>
                            </div>
                            <div className="post-text mb-20">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et
                                    dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo
                                    consequat. Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur.
                                    Excepteur sint
                                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum. Sed ut
                                    perspiciatis unde
                                    omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                                    aperiam, eaque ipsa
                                    quae ab illo
                                    inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                                    ipsam voluptatem
                                    quia voluptas sit
                                    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                    voluptatem sequi
                                    nesciunt. Neque
                                    porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                    velit, sed quia non
                                    numquam eius modi
                                    tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                            </div>
                            <div className="post-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et
                                    dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo
                                    consequat. Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur.
                                    Excepteur sint
                                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                            </div>
                            <div className="blog-inner-img mt-40 mb-40">
                                <div className="inner-content">
                                    <img src="/images/news/news-details-1.jpeg" alt="blog image"/>
                                </div>
                            </div>
                            <div className="inner-content">
                                <h4 className="mb-20">A cleansing hot shower or bath</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et
                                    dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo
                                    consequat. Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur.
                                    Excepteur sint
                                    occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="navigation-border pt-35 mt-40"></div>
                                </div>
                            </div>
                            <div className="inner-content">
                                <h4 className="mb-20">Setting the mood with incense</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur
                                    sint
                                    occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="navigation-border pt-35 mt-40"></div>
                                </div>
                            </div>
                            <div className="inner-content mb-35">
                                <h4 className="mb-25">Setting the mood with incense</h4>
                                <ul>
                                    <li><i className="far fa-check"></i> Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit, sed do.</li>
                                    <li><i className="far fa-check"></i> Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit, sed do.</li>
                                    <li><i className="far fa-check"></i> Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit, sed do.</li>
                                    <li><i className="far fa-check"></i> Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit, sed do.</li>
                                    <li><i className="far fa-check"></i> Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit, sed do.</li>
                                </ul>
                            </div>
                            <blockquote>
                                <span>by Hetmayar</span>
                                <p>Viral dreamcatcher keytar typewriter, aest hetic offal umami. Aesthetic polaroid pug
                                    pitchfork
                                    post-ironic.</p>
                                <div className="quote-icon">
                                    <img src="/images/icons/quote-icon.png" alt=""/>
                                </div>
                            </blockquote>
                            <div className="inner-content mt-30">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et
                                    dolore
                                    magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo
                                    consequat. Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur.
                                    Excepteur sint
                                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum. Sed ut
                                    perspiciatis unde
                                    omnis iste natus error sit voluptatem accusantium.</p>
                            </div>
                            <div className="row mt-30">
                                <div className="col-lg-5 my-auto">
                                    <div className="inner-content">
                                        <img src="/images/news/news-inner-1.jpeg" alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-7 mmt-30 my-auto">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore
                                        et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                        ut aliquip ex ea
                                        commodo consequat. Duis
                                        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur.
                                        Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                        id est laborum. Sed
                                        ut perspiciatis unde
                                        omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                                </div>
                            </div>
                            <div className="inner-content mt-25">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et
                                    dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo
                                    consequat. Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur.
                                    Excepteur sint
                                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum. Sed ut
                                    perspiciatis unde
                                    omnis iste natus error sit voluptatem.</p>
                            </div>
                            <div className="row mt-40">
                                <div className="col-xl-7 col-lg-7 col-md-7">
                                    <div className="blog-post-tag">
                                        <span>Releted Tags</span>
                                        <a href="#0">organic</a>
                                        <a href="#0">Foods</a>
                                        <a href="#0">tasty</a>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-5">
                                    <div className="blog-share-icon text-left text-md-right">
                                        <span>Share: </span>
                                        <a href="#0"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#0"><i className="fab fa-twitter"></i></a>
                                        <a href="#0"><i className="fab fa-instagram"></i></a>
                                        <a href="#0"><i className="fab fa-google-plus-g"></i></a>
                                        <a href="#0"><i className="fab fa-vimeo-v"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="navigation-border pt-50 mt-50"></div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-5">
                                    <div className="bakix-navigation b-next-post text-left mb-30">
                                        <span><a href="#0">Prev Post</a></span>
                                        <h4><a href="#0">Tips on Minimalist</a></h4>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-2 my-auto">
                                    <div className="bakix-filter text-left text-md-center mb-30">
                                        <a href="#0"><img src="/images/icons/filter.png" alt=""/></a>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-5">
                                    <div className="bakix-navigation b-next-post text-left text-md-right mb-30">
                                        <span><a href="#0">Next Post</a></span>
                                        <h4><a href="#0">Less Is More</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-none-30">
                            <div className="col-xl-12">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="navigation-border pt-50 mt-50"></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <h2 className="releted-post-heading">Releted Post</h2>
                                    </div>
                                </div>
                                <div className="row releted-post">
                                    <div className="col-xl-6">
                                        <article className="blog__box mt-30">
                                            <div className="thumb">
                                                <a href="#0">
                                                    <img src="/images/news/releted-post-thumb-1.jpeg"
                                                        alt="blog image"/>
                                                </a>
                                            </div>
                                            <div className="content">
                                                <div className="meta mb-10">
                                                    <a href="#0"><i className="fal fa-calendar-alt"></i> 24th March 2020</a>
                                                </div>
                                                <h4 className="title">
                                                    <a href="#0">A series of iOS 7 inspire
                                                        vector icons.</a>
                                                </h4>
                                                <div className="post-text">
                                                    <p>Lorem ipsum dolor sit amet, conse ctet ur adipisicing elit, sed
                                                        doing.</p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-xl-6">
                                        <article className="blog__box mt-30">
                                            <div className="thumb">
                                                <a href="#0">
                                                    <img src="/images/news/releted-post-thumb-2.jpeg"
                                                        alt="blog image"/>
                                                </a>
                                            </div>
                                            <div className="content">
                                                <div className="meta mb-10">
                                                    <a href="#0"><i className="fal fa-calendar-alt"></i> 24th March 2020</a>
                                                </div>
                                                <h4 className="title">
                                                    <a href="#0">A series of iOS 7 inspire
                                                        vector icons.</a>
                                                </h4>
                                                <div className="post-text">
                                                    <p>Lorem ipsum dolor sit amet, conse ctet ur adipisicing elit, sed
                                                        doing.</p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-author mt-50 mb-40">
                            <div className="blog-author__img">
                                <img src="/images/news/news-author-1.jpeg" alt=""/>
                            </div>
                            <div className="blog-author__text">
                                <span>Written by</span>
                                <h3>Rosalina D. William</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et
                                    dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation is enougn for today.</p>
                            </div>
                        </div>
                        <div className="post-comments">
                            <h2 className="title mb-25">03 Comments</h2>
                            <div className="latest__comments">
                                <ul>
                                    <li>
                                        <div className="comments-box">
                                            <div className="comments-avatar">
                                                <img src="/images/news/news-comment-a-1.jpeg" alt=""/>
                                            </div>
                                            <div className="comments-text">
                                                <div className="avatar-name">
                                                    <h5>Rosalina Kelian</h5>
                                                    <span>19th May 2018</span>
                                                    <a className="reply" href="#0"><i className="fal fa-reply"></i>Reply</a>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod
                                                    tempor incididunt
                                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                    nostrud
                                                    exercitation
                                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="children">
                                        <div className="comments-box">
                                            <div className="comments-avatar">
                                                <img src="/images/news/news-comment-a-2.jpeg" alt=""/>
                                            </div>
                                            <div className="comments-text">
                                                <div className="avatar-name">
                                                    <h5>Rosalina Kelian</h5>
                                                    <span>19th May 2018</span>
                                                    <a className="reply" href="#0"><i className="fal fa-reply"></i>Reply</a>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod
                                                    tempor incididunt
                                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                    nostrud
                                                    exercitation
                                                    ullamco laboris nisi ut aliquip.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="comments-box">
                                            <div className="comments-avatar">
                                                <img src="/images/news/news-comment-a-3.jpeg" alt=""/>
                                            </div>
                                            <div className="comments-text">
                                                <div className="avatar-name">
                                                    <h5>Arista Williamson</h5>
                                                    <span>19th May 2018</span>
                                                    <a className="reply" href="#0"><i className="fal fa-reply"></i>Reply</a>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod
                                                    tempor incididunt
                                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                    nostrud
                                                    exercitation
                                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="comments__form">
                            <h2 className="title">Post Comments</h2>
                            <form className="form" action="#">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="contact-icon contacts-message">
                                            <textarea name="comments" id="comments" cols="30" rows="10"
                                                placeholder="Your Comments...."></textarea>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="contact-icon contacts-name">
                                            <input type="text" placeholder="Your Name.... "/>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="contact-icon contacts-email">
                                            <input type="email" placeholder="Your Email...."/>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="contact-icon contacts-website">
                                            <input type="text" placeholder="Your Website...."/>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <button className="site-btn site-btn__2" type="submit"><span className="icon"><i
                                                    className="fal fa-comments"></i></span> Post
                                            comment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </article>
                </div>
                <div className="col-xl-4 col-lg-12">
                            <div className="sidebar-wrap">
                                <div className="widget sidebar grey-bg mb-40">
                                    <h4 className="sidebar__title mb-30">
                                        <span><img src="/images/shape/heading-shape-3.png" className="mr-5" alt="" /></span>
                                        Popular Feeds
                                    </h4>
                                    <ul className="recent-posts">
                                        {allblogs && allblogs.map(({id,title,slug,banner,category})=>{
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
    {/* <!-- news area end -->  */}
        </>
    )
}
