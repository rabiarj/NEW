import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const OurServices = () => {
    const {t} = useTranslation(['common']);
  return (
    <>
    
    
    {/* Our Services Start */}
<div className="container-fluid services py-5 mb-5">
<div className="container">
  <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: 600}}>
    <h5 className="text-primary">{t('Our Services')}</h5>
    <h1>{t('Services Built Specifically For Your Business')}</h1>
  </div>
  <div className="row g-5 services-inner">
    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
      <div className="services-item bg-light">
        <div className="p-4 text-center services-content">
          <div className="services-content-icon">
            
             <img src="./images/b2.jpg" className="img-fluid  rounded-circle" width={90}  alt="" />
            <h4 className="mb-3">{t('ABILITY')}</h4>
            <p className="mb-4">{t('(GECO.)has held a prominent position because of its objectives and abilities cultivated.This position has been held by our innovative spirit and primary goal which is to surpass customer expectations using industry-leading technologies.')}</p>
            <Link to='' className="btn btn-info text-white px-5 py-3 rounded-pill">{t('Read More')}</Link>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
      <div className="services-item bg-light">
        <div className="p-4 text-center services-content">
          <div className="services-content-icon">
          <img src="./images/quality2.png" className="img-fluid  rounded-circle mb-5   " width={85}  alt="" />
            <h4 className="mb-3">{t('QUALITY')}</h4>
            <p className="mb-4">{t('(GECO.)We provide high value products and services that meet the expectations & satisfaction of our customers.')}</p>
            <Link to='' className="btn btn-info text-white px-5 py-3 rounded-pill">{t('Read More')}</Link>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
      <div className="services-item bg-light">
        <div className="p-4 text-center services-content">
          <div className="services-content-icon">
          <img src="./images/customer.webp" className="img-fluid  rounded-circle mb-5  " width={100}  alt="" />
            <h4 className="mb-3">{t('BEST SERVICES')}</h4>
            <p className="mb-4">{t('(GECO.)are available all the time for the best services.')}</p>
            <Link to='' className="btn btn-info text-white px-5 py-3 rounded-pill">{t('Read More')}</Link>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
      <div className="services-item bg-light">
        <div className="p-4 text-center services-content">
          <div className="services-content-icon">
          <img src="./images/D1.PNG" className="img-fluid  rounded-circle mb-5  " width={75}  alt="" />
            <h4 className="mb-3">{t('BEST DESIGN')}</h4>
            <p className="mb-4">{t('(GECO.) are design a best idea according the demaond on clients.')}</p>
            <Link to='' className="btn btn-info text-white px-5 py-3 rounded-pill">Read More</Link>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
      <div className="services-item bg-light">
        <div className="p-4 text-center services-content">
          <div className="services-content-icon">
          <img src="./images/b7.jpg" className="img-fluid  rounded-circle mb-5  " width={100}  alt="" />
            <h4 className="mb-3">{t('SAFETY')}</h4>
            <p className="mb-4">{t('(GECO.)Our priority to proviede the best safety and security in Saudia Arbia.')}</p>
            <Link to='' className="btn btn-info text-white px-5 py-3 rounded-pill">{t('Read More')}</Link>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
      <div className="services-item bg-light">
        <div className="p-4 text-center services-content">
          <div className="services-content-icon">
          <img src="./images/price.jpg" className="img-fluid  rounded-circle mb-5  " width={75}  alt="" />
            <h4 className="mb-3">{t('BEST PRICE')}</h4>
            <p className="mb-4">{t('(GECO.) is provided a best price with quilty matrials.')}</p>
            <Link to='' className="btn btn-info text-white px-5 py-3 rounded-pill">{t('Read More')}</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
{/* Our Services End */}
    </>
  )
}

export default OurServices;