import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Intro = () => {
    const {t} = useTranslation(['common']);
  return (
    <>
    

     {/* Intro Start */}
<div className="container-fluid py-5 my-5">
<div className="container pt-5">
  <div className="row g-5">
    <div className="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
      <div className="h-100 position-relative">
        <img src="./images/b12.jpg" alt='' className="img-fluid w-75 rounded" style={{marginBottom: '25%'}} />
        <div className="position-absolute w-75" style={{top: '35%', left: '30%'}}>
          <img src="./images/b15.jpg" className="img-fluid w-100 rounded" alt />
        </div>
      </div>
    </div>
    <div className="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
      <h5 className="text-primary">{t('About Us')}</h5>
      <h1 className="mb-4">{t('Who We Are?')}</h1>
      <p><span>{t('Gulf Egyptian Construction Company (GECO.)')}</span>
      <span>{t('in the contracting field providing as well project management, coordination')}</span>
       <span>{t('and export projects procurement to deliver high quality')}</span>
       <span>{t(' products and superior customer service at a competitive cost while')}</span>
       <span>{t(' forming lasting and trustful relationships with clients')}</span>
         <span> {t('We areCivil and Electrical Construction company in Saudi Arabia.')}</span>
           <span> {t('Our company maintains a high degree of motivation at the Board Members’')} </span>
            <span>{t('level and among its Engineers Team mobilized to deliver')}</span> 
            <span>{t('fast and intricate projects at short notice.')}</span></p>
            
      
      <p className="mb-4"></p>
      <Link to="about" className="btn btn-info rounded-pill px-5 py-3 text-white">{t('More Details')}</Link>
    </div>
  </div>
</div>
</div>
{/* Intro End */}
    
    </>
  )
}

export default Intro