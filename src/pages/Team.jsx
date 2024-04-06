import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Team = () => {
    const {t , i18n} = useTranslation(['common']);
    useEffect(()=>{
      //alert('pg loding');
      //current language store in the local storage
      let currentLang = localStorage.getItem('lang');
      i18n.changeLanguage(currentLang);
    },[]);
  return (
    <>
    
    {/* Team Start */}
<div className="container-fluid py-5 mb-5 team">
<div className="container">
  <div className="text-center mx-auto pb-5  wow fadeIn" data-wow-delay=".3s" style={{maxWidth: 600}}>
    <h5 className="text-primary">{t('Our Team')}</h5>
    <h1>{t('Meet our Team')}</h1>
  </div>
  <div className="row  owl-carousel team-carousel wow fadeIn" data-wow-delay=".5s">
    <div className=" col-12 col-lg-6 col-md-6 col-sm-12 my-4 rounded team-item">
      <div className="team-content">
        <div className="team-img-icon">
          <div className="team-img rounded-circle">
            <img src="./images/rabi.jpeg" className="img-fluid w-100 rounded-circle" alt="team member img" />
          </div>
          <div className="team-name text-center py-3">
            <h4 className>{t('Full Name')}</h4>
            <p className="m-0">{t('Project Manager(IT)')}</p>
          </div>
          <div className="team-icon d-flex justify-content-center pb-4">
            <Link className="btn btn-square btn-info text-white rounded-circle m-1" to=""><i className="fab fa-facebook-f" /></Link>
            <Link className="btn btn-square btn-info text-white rounded-circle m-1" to=""><i className="fab fa-twitter" /></Link>
            <Link className="btn btn-square btn-info text-white rounded-circle m-1" to=""><i className="fab fa-instagram" /></Link>
            <Link className="btn btn-square btn-info text-white rounded-circle m-1" to=""><i className="fab fa-linkedin-in" /></Link>
          </div>
        </div>
      </div>
    </div>
    <div className=" col-12 col-lg-6 col-md-6 col-sm-12 my-4  rounded team-item">
      <div className="team-content">
        <div className="team-img-icon">
          <div className="team-img rounded-circle">
            <img src="./images/rabi.jpeg" className="img-fluid w-100 rounded-circle" alt="teamimg" />
          </div>
          <div className="team-name text-center py-3">
            <h4 className>{t('Full Name')}</h4>
            <p className="m-0">{t('Project Manager(IT)')}</p>
          </div>
          <div className="team-icon d-flex justify-content-center pb-4">
            <Link className="btn btn-square btn-info text-white rounded-circle m-1" to=""><i className="fab fa-facebook-f" /></Link>
            <Link className="btn btn-square btn-info text-white rounded-circle m-1" to=""><i className="fab fa-twitter" /></Link>
            <Link className="btn btn-square btn-info text-white rounded-circle m-1" to=""><i className="fab fa-instagram" /></Link>
            <Link className="btn btn-square btn-info text-white rounded-circle m-1" to=""><i className="fab fa-linkedin-in" /></Link>
          </div>
        </div>
      </div>
    </div>
    <div className=" col-12 col-lg-6 col-md-6 col-sm-12  my-4 rounded team-item">
      <div className="team-content">
        <div className="team-img-icon">
          <div className="team-img rounded-circle">
            <img src="./images/rabi.jpeg" className="img-fluid w-100 rounded-circle" alt="teamimg" />
          </div>
          <div className="team-name text-center py-3">
            <h4 className>{t('Full Name')}</h4>
            <p className="m-0">{t('Project Manager(IT)')}</p>
          </div>
          <div className="team-icon d-flex justify-content-center pb-4">
            <Link className="btn btn-square btn-info text-white rounded-circle m-1" to=""><i className="fab fa-facebook-f" /></Link>
            <Link className="btn btn-square btn-info text-white rounded-circle m-1" to=""><i className="fab fa-twitter" /></Link>
            <Link className="btn btn-square btn-info text-white rounded-circle m-1" to=""><i className="fab fa-instagram" /></Link>
            <Link className="btn btn-square btn-info text-white rounded-circle m-1" to=""><i className="fab fa-linkedin-in" /></Link>
          </div>
        </div>
      </div>
    </div>
    <div className=" col-12 col-lg-6 col-md-6 col-sm-12 my-4  rounded team-item">
      <div className="team-content">
        <div className="team-img-icon">
          <div className="team-img rounded-circle">
            <img src="./images/rabi.jpeg" className="img-fluid w-100 rounded-circle" alt="teamimg" />
          </div>
          <div className="team-name text-center py-3">
            <h4 className>{t('Full Name')}</h4>
            <p className="m-0">{t('Project Manager(IT)')}</p>
          </div>
          <div className="team-icon d-flex justify-content-center pb-4">
            <Link className="btn btn-square btn-info text-white rounded-circle m-1" to=""><i className="fab fa-facebook-f" /></Link>
            <Link className="btn btn-square btn-info text-white rounded-circle m-1" to=""><i className="fab fa-twitter" /></Link>
            <Link className="btn btn-square btn-info text-white rounded-circle m-1" to=""><i className="fab fa-instagram" /></Link>
            <Link className="btn btn-square btn-info text-white rounded-circle m-1" to=""><i className="fab fa-linkedin-in" /></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
{/* Team End */}
    </>
  )
}

export default Team