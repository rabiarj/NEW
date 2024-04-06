import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Partners = () => {
    const {t , i18n} = useTranslation(['common']);
    useEffect(()=>{
      //alert('pg loding');
      //current language store in the local storage
      let currentLang = localStorage.getItem('lang');
      i18n.changeLanguage(currentLang);
    },[]);
  return (
    <>
    
    <NavBar/>
    {/* ======= Our Partners Section ======= */}
<section id="projects" className="projects">
<div className="container" data-aos="fade-up">
  <div className="section-header">
    <h2 className='partnerOne my-5'>{t('OUR PARTNERS')}</h2>
    <img src='./images/p1n.jpeg' about='' alt='' width={300} className='pic-center'/>
    <h3 className='my-5'>{t('ABOUT MASS')}:</h3>
    <h6>{t('Mass was funded in 2008 and has been substainally growing since the.we utilize our resources,capabilities and expertties to provied our clients with products services and solution that exceed thier expectations.')}</h6>
  </div>
  <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">
    <ul className="portfolio-flters" data-aos="fade-up" data-aos-delay={100}>
      <li data-filter="*" className="filter-active">{t('All')}</li>
      <li data-filter=".filter-remodeling">{t('Mosques')}</li>
      <li data-filter=".filter-construction">{t('Medicial')}l</li>
      <li data-filter=".filter-repairs">{t('Commercial')}</li>
      <li data-filter=".filter-design">{t('Education')}</li>
      <li data-filter=".filter-design">{t('Roads')}</li>
      <li data-filter=".filter-design">{t('Residential Projects')}</li>
    </ul>{/* End Projects Filters */}
    <div className="row gy-4 portfolio-container justify-content-center my-5" data-aos="fade-up" data-aos-delay={200}>
      <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
        <div className="portfolio-content h-100 animate__animated animate__backInLeft">
          <img src="images/p2n.jpeg" className="img-fluid" alt='' />
          <div className="portfolio-info">
            <h4>{t('Mosques')}</h4>
            <p>{t('Construction of a Mosques with the capacity of 1000 person in the residencial social housing projects.')} </p>
            <Link to="images/remodeling-1.jpg" title="Remodeling 1" data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i className="bi bi-zoom-in" /></Link>
            <Link to="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></Link>
          </div>
        </div>
      </div>{/* End Projects Item */}
      <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
        <div className="portfolio-content h-100 animate__animated animate__backInLeft">
          <img src="images/p3n.jpeg" className="img-fluid" alt='' />
          <div className="portfolio-info">
            <h4>{t('Medical')}</h4>
            <p>{t('A 3-floor with the family medical center in the village of shatanouf.')}</p>
            <Link to="images/p4n.jpeg" title="Construction 1" data-gallery="portfolio-gallery-construction" className="glightbox preview-link"><i className="bi bi-zoom-in" /></Link>
            <Link to="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></Link>
          </div>
        </div>
      </div>{/* End Projects Item */}
      <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
        <div className="portfolio-content h-100 animate__animated animate__backInRight">
          <img src="images/p5n.jpeg" className="img-fluid" alt='' />
          <div className="portfolio-info">
            <h4>{t('Cardiology department')}</h4>
            <p>{t('Refurbishment of Cardiology department (Ain Shans University Hopital)')}</p>
            <Link to="images/p6n.jpeg" title="Repairs 1" data-gallery="portfolio-gallery-repairs" className="glightbox preview-link"><i className="bi bi-zoom-in" /></Link>
            <Link to="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></Link>
          </div>
        </div>
      </div>{/* End Projects Item */}
      <div className="col-lg-4 col-md-6 portfolio-item filter-design">
        <div className="portfolio-content h-100 animate__animated animate__backInLeft">
          <img src="images/p7n.jpeg" className="img-fluid " alt />
          <div className="portfolio-info">
            <h4>{t('Commercial')}</h4>
            <p>{t('Memorial Hall project at the New Administartive Capital.')} </p>
            <Link to="images/p8n.jpeg" title="Repairs 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in" /></Link>
            <Link to="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></Link>
          </div>
        </div>
      </div>{/* End Projects Item */}
      <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
        <div className="portfolio-content h-100 animate__animated animate__backInLeft">
          <img src="images/p8n.jpeg" className="img-fluid" alt />
          <div className="portfolio-info">
            <h4>{t('Commercial')}</h4>
            <p>{t('Refurbishment and restoration of school buildings.(El Tunsy-Fatma El Zahra-El Mokattam-El-Kattameya.)')}</p>
            <Link to="images/p13n.jpeg" title="Remodeling 2" data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i className="bi bi-zoom-in" /></Link>
            <Link to="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></Link>
          </div>
        </div>
      </div>{/* End Projects Item */}
      <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
        <div className="portfolio-content h-100 animate__animated animate__backInRight">
          <img src="images/bp1.jpeg" className="img-fluid" alt />
          <div className="portfolio-info">
            <h4>{t('Residential Projects')}</h4>
            <p>{t('Buildings & Villas')}</p>
            <Link to="images/bp2.jpeg" title="Construction 2" data-gallery="portfolio-gallery-construction" className="glightbox preview-link"><i className="bi bi-zoom-in" /></Link>
            <Link to="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></Link>
          </div>
        </div>
      </div>{/* End Projects Item */}
    </div></div></div></section>

    {/* ======= Our Projects Section ======= */}
<section id="projects" className="projects mt-5">
<div className="container" data-aos="fade-up">
  <div className="section-header">
   
    <img src='./images/p3Logo.jpeg' className='pic-center' width={300}/>
    <h3 className='my-4'>{t('About Engineering Assembly Company')}</h3>
    <h6>{t('Engineering Assembly Company for Contracting and SuppliesCompany definition The company organizational structure company documentsb previous work the company projects company equipment')}</h6>
  </div>
  <div className="portfolio-isotope my-4" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">
   
    <div className="row gy-4 portfolio-container justify-content-center my-5" data-aos="fade-up" data-aos-delay={200}>
      <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
        <div className="portfolio-content h-100 animate__animated animate__backInLeft">
          <img src="images/2nd.jpeg" className="img-fluid" alt />
          <div className="portfolio-info">
            {/* <h4>Remodeling 1</h4> */}
            {/* <p>Lorem ipsum, dolor sit amet consectetur</p> */}
            <Link to="images/remodeling-1.jpg" title="Remodeling 1" data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i className="bi bi-zoom-in" /></Link>
            <Link to="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></Link>
          </div>
        </div>
      </div>{/* End Projects Item */}
      <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
        <div className="portfolio-content h-100 animate__animated animate__backInLeft">
          <img src="images/3rd.jpeg" className="img-fluid" alt />
          <div className="portfolio-info">
            {/* <h4>Construction 1</h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p> */}
            <Link to="images/4th.jpeg" title="Construction 1" data-gallery="portfolio-gallery-construction" className="glightbox preview-link"><i className="bi bi-zoom-in" /></Link>
            <Link to="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></Link>
          </div>
        </div>
      </div>{/* End Projects Item */}
      <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
        <div className="portfolio-content h-100 animate__animated animate__backInRight">
          <img src="images/8th.jpeg" className="img-fluid" alt />
          <div className="portfolio-info">
            {/* <h4>Repairs 1</h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p> */}
            <Link to="images/9th.jpeg" title="Repairs 1" data-gallery="portfolio-gallery-repairs" className="glightbox preview-link"><i className="bi bi-zoom-in" /></Link>
            <Link to="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></Link>
          </div>
        </div>
      </div>{/* End Projects Item */}
      <div className="col-lg-4 col-md-6 portfolio-item filter-design">
        <div className="portfolio-content h-100 animate__animated animate__backInLeft">
          <img src="images/10th.jpeg" className="img-fluid" alt />
          <div className="portfolio-info">
            {/* <h4>Design 1</h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p> */}
            <Link to="images/11th.jpeg" title="Repairs 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in" /></Link>
            <Link to="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></Link>
          </div>
        </div>
      </div>{/* End Projects Item */}
      <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
        <div className="portfolio-content h-100 animate__animated animate__backInLeft">
          <img src="images/12th.jpeg" className="img-fluid" alt />
          <div className="portfolio-info">
            {/* <h4>Remodeling 2</h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p> */}
            <Link to="images/p13n.jpeg" title="Remodeling 2" data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i className="bi bi-zoom-in" /></Link>
            <Link to="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></Link>
          </div>
        </div>
      </div>{/* End Projects Item */}
      <div className="col-lg-4 col-md-6  portfolio-item filter-construction ">
        <div className="portfolio-content h-100 animate__animated animate__backInRight">
          <img src="images/13th.jpeg" className="img-fluid" alt />
          <div className="portfolio-info">
            {/* <h4>Rsidential Projects</h4>
            <p>Buildings & Villas</p> */}
            <Link to="images/bp2.jpeg" title="Construction 2" data-gallery="portfolio-gallery-construction" className="glightbox preview-link"><i className="bi bi-zoom-in" /></Link>
            <Link to="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></Link>
          </div>
        </div>
      </div>{/* End Partners Item */}
    </div></div></div></section>
    </>
  )
}

export default Partners