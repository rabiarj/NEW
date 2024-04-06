import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const Carousel = () => {
    const {t} = useTranslation(['common']);


  return (
    <>
    
        {/* Carousel Start */}
<div className="container-fluid px-0">
<div id="carouselId" className="carousel slide" data-bs-ride="carousel">
  <ol className="carousel-indicators">
    <li data-bs-target="#carouselId" data-bs-slide-to={0} className="active" aria-current="true" aria-label="First slide" />
    <li data-bs-target="#carouselId" data-bs-slide-to={1} aria-label="Second slide" />
  </ol>
  <div className="carousel-inner" role="listbox">
    <div className="carousel-item active">
      <img src="images/riyadh2.jpg" className="First slide"   alt="First slide" />
      <div className="carousel-caption">
        <div className="container carousel-content">
          <h6 className="text-secondary h4 animated fadeInUp">{t('Best Construction company')}</h6>
          <h1 className="text-white display-3  animated fadeInRight">{t('An Innovative Construction Solutions Company')}</h1>
          <p className="mb-4 text-white fs-5 animated fadeInDown"></p>
          <Link to='' className="me-1"><button type="button" className="px-4 py-sm-3 px-sm-5 my-1 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft">{t('Get in Touch')}</button></Link>
          <Link to='' className=""><button type="button" className="px-4 py-sm-3 px-sm-5 my-1 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">{t('Contact Us')}</button></Link>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./images/riyadh3.jpg" className="Second slide" alt="Second slide" />
      <div className="carousel-caption">
        <div className="container carousel-content">
          <h6 className="text-secondary h4 animated fadeInUp">{t('Best Construction company')}</h6>
          <h1 className="text-white display-1 mb-4 animated fadeInLeft">{t('Trusred Quality & Services!')}</h1>
          <p className="mb-4 text-white fs-5 animated fadeInDown"></p>
          <Link to='' className="me-1"><button type="button" className="px-4 py-sm-3 px-sm-5 my-1 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft">{t('Get in Touch')}</button></Link>
          <Link to='' className=""><button type="button" className="px-4 py-sm-3 px-sm-5 btn my-1 btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">{t('Contact Us')}</button></Link>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">{t('Previous')}</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">{t('Next')}</span>
  </button>
</div>
</div>
{/* Carousel End */}
    
    
    </>
  )
}

export default Carousel;