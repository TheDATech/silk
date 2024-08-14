import logo from './logo.svg';
import './App.css';
import './Style/css/style.css';
import './Style/css/preloader.css';
import './Style/css/animate.min.css';
import './Style/css/font-awesome.min.css';
import './Style/css/lightcase.css';
import './Style/css/meanmenu.css';
import './Style/css/nice-select.css';
import './Style/css/magnific-popup.css';
import Preloader from './layouts/Preloader';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './pages/about';
import Service from './pages/service';
import Contact from './pages/contact';
import Project from './pages/project';
import News from './pages/news';
import Team from './pages/team';
import Pricing from './pages/pricing';
import FAQ from './pages/faq';
import PrivacyPolicy from './pages/privacy-policy';
import ServiceDetails from './pages/service-details';
import TeamDetails from './pages/team-details';
import ProjectDetails from './pages/project-details';
import Home2 from './pages/index-02';
import RefundPolicy from './pages/Refund_policy';
import CustomePatches from './pages/CustomePatches';
import NewsDetails from './pages/news-details';

function App() {
  const [activePreLoader, setActivePreLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setActivePreLoader(false);
    }, 3000);
  }, [activePreLoader]);
  const location = useLocation();
  useEffect(() => {
        window.scrollTo(0, 0);
}, [location]);
  return (
    <>
       {activePreLoader && <Preloader />}
        <Routes>
          <Route path='/' element={<Home2/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='portfolio' element={<Project/>}/>
          <Route path='/blogs' element={<News/>}/>
          <Route path='/blogs/:categoryname' element={<News/>}/>
          <Route path='/blog/:slug' element={<NewsDetails/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='/refund-policy' element={<RefundPolicy/>}/>
          <Route path='/team-details' element={<TeamDetails/>}/>
          <Route path='/service-details' element={<ServiceDetails/>}/>
          <Route path='/services/:name' element={<ServiceDetails/>}/>
          <Route path='/services/:subcat/:name' element={<ServiceDetails/>}/>
          <Route path='/custom-patches' element={<CustomePatches/>}/>
          <Route path='/custom-patches/:name' element={<CustomePatches/>}/>
          <Route path='/project-details' element={<ProjectDetails/>}/>
        </Routes>
    </>
  );
}

export default App;
