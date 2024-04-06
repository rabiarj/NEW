import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import NavBar from '../components/NavBar';

const Project = () => {
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
      {/* Project Start */}
<div className="container-fluid project py-5 mb-5">
<div className="container">
  <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: 600}}>
    <h5 className="text-primary">{t('Our Project')}</h5>
    <h1>{t('Our Recently Completed Projects')}</h1>
  </div>
  <div className="row g-5">
    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
      <div className="project-item">
        <div className="project-img">
          <img src="./images/building1.jpeg" className="img-fluid w-100 rounded" alt />
          <div className="project-content">
            <a href="#" className="text-center">
              <h4 className="text-secondary">{t('Construction')}</h4>
              <p className="m-0 text-white">{t('Company')}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
      <div className="project-item">
        <div className="project-img">
          <img src="images/building2.jpeg" className="img-fluid w-100 rounded" alt />
          <div className="project-content">
            <a href="#" className="text-center">
              <h4 className="text-secondary">{t('Construction')}</h4>
              <p className="m-0 text-white">{t('Company')}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
      <div className="project-item">
        <div className="project-img">
          <img src="images/buiding5.jpeg" className="img-fluid w-100 rounded" alt />
          <div className="project-content">
            <a href="#" className="text-center">
              <h4 className="text-secondary">{t('Construction')}</h4>
              <p className="m-0 text-white">{t('Company')}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
      <div className="project-item">
        <div className="project-img">
          <img src="images/building6.jpeg" className="img-fluid w-100 rounded" alt />
          <div className="project-content">
            <a href="#" className="text-center">
              <h4 className="text-secondary">{t('Construction')}</h4>
              <p className="m-0 text-white">{t('Company')}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
      <div className="project-item">
        <div className="project-img">
          <img src="images/remodeling-2.jpg" className="img-fluid w-100 rounded" alt />
          <div className="project-content">
            <a href="#" className="text-center">
              <h4 className="text-secondary">{t('Construction')}</h4>
              <p className="m-0 text-white">{t('Company')}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
      <div className="project-item">
        <div className="project-img">
          <img src="images/construction-2.jpg" className="img-fluid w-100 rounded" alt />
          <div className="project-content">
            <a href="#" className="text-center">
              <h4 className="text-secondary">{t('Construction')}</h4>
              <p className="m-0 text-white">{t('Company')}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
{/* Project End */}
    </>
  )
}

export default Project