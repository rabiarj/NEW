import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Headers = () => {
    const {t} = useTranslation(["common"]);

  return (
    <>
    
    <div>
  {/* Spinner Start */}
  <div id="spinner" className="show position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div className=" text-primary" role="status"></div>
  </div>
  {/* Spinner End */}
  {/* Topbar Start */}
  <div className="container-fluid bg-dark py-2 d-none d-md-flex">
    <div className="container">
      <div className="d-flex justify-content-between topbar">
        <div className="top-info">
          <small className="me-2 text-white-50"><Link to=""><i className="fas fa-map-marker-alt me-1 text-info"/></Link>{t('Malaz Area, Saudia Arab')}</small>
         <br/>
          <small className="me-1 text-white-50"><Link to=""><i className="fas fa-envelope me-1 text-info"/></Link>{t('gecconstruction@gmail.com')}</small>
        </div>
        <div id="note" className="text-white d-none d-xl-flex"><small>{t('We help you to Grow your Business contact Us')} </small></div>
        <div className="top-link">
          <Link to="" className="bg-light nav-fill btn btn-sm-square rounded-circle mx-2"><i className="fab fa-facebook-f text-primary" /></Link>
          <Link to="" className="bg-light nav-fill btn btn-sm-square rounded-circle mx-2"><i className="fab fa-twitter text-primary" /></Link>
          <Link to="" className="bg-light nav-fill btn btn-sm-square rounded-circle mx-2"><i className="fab fa-instagram text-primary" /></Link>
          <Link to="" className="bg-light nav-fill btn btn-sm-square rounded-circle mx-2"><i className="fab fa-linkedin-in text-primary" /></Link>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
</div>
    
    </>
  )
}

export default Headers