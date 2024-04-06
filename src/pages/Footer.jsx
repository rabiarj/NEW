import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
    const {t , i18n} = useTranslation(['common']);
    useEffect(()=>{
      //alert('pg loding');
      //current language store in the local storage
      let currentLang = localStorage.getItem('lang');
      i18n.changeLanguage(currentLang);
    },[]);

  return (
    <>
    

     {/* Footer Start */}
<div className="container-fluid py-5 mb-5">
<div className="container">
  <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: 600}}>
    <h5 className="text-primary">{t('Get In Touch')}</h5>
    <h1 className="mb-3">{t('Contact for any query')}</h1>
   
  </div>
  <div className="contact-detail position-relative">
    <div className="row g-5 mb-5 justify-content-center ">
      <div className="col-xl-4 col-lg-4 wow fadeIn " data-wow-delay=".3s">
        <div className="d-flex bg-light p-3 rounded">
          <div className="flex-shrink-0 btn-square bg-success pt-3 rounded-circle" style={{width: 64, height: 64}}>
            <i className="fas fa-map-marker-alt text-white" />
          </div>
          <div className="ms-3 ">
            <h6 className="text-primary">{t('Address')}</h6>
            <Link to="https://www.google.com/maps/d/viewer?mid=1tOsVSnpBM5MaImuy480yb3xRnMM&hl=en_US&ll=24.688784999999996%2C46.725787&z=17"
             target="_blank" className="">{t('Malaz, Saudia Arab')}</Link>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 wow fadeIn" data-wow-delay=".5s">
        <div className="d-flex bg-light p-3 rounded">
          <div className="flex-shrink-0 btn-square bg-success rounded-circle" style={{width: 64, height: 64}}>
            <i className="fa fa-phone text-white pt-4 " />
          </div>
          <div className="ms-3">
            <h6 className="text-primary">{t('Call Us')}</h6>
            <Link className="" to="" target="_blank">{t('+966-555-460-00')}</Link>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 wow fadeIn" data-wow-delay=".7s">
        <div className="d-flex bg-light p-3 rounded">
          <div className="flex-shrink-0 btn-square bg-success rounded-circle" style={{width: 64, height: 64}}>
            <i className="fa fa-envelope text-white pt-4" />
          </div>
          <div className="ms-3">
            <h6 className="text-primary">{t('Email Us')}</h6>
            <Link className="" to="" target="_blank">gecconstruction@gmail.com </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="row g-5">
      <div className="col-lg-6 wow fadeIn" data-wow-delay=".3s">
        <div className="p-5 h-100 rounded contact-map"> 
          <iframe className="rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29006.48568399751!2d46.71473465446313!3d24.66464303977887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0424ff2e530f%3A0x36529ba249766c8f!2sAl%20Malaz%2C%20Riyadh!5e0!3m2!1sen!2ssa!4v1708012157476!5m2!1sen!2ssa" style={{border: 1}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
      </div>
      <div className="col-lg-6 wow fadeIn" data-wow-delay=".5s">
        <div className="p-5 rounded contact-form">
          <div className="mb-4">
            <input type="text" className="form-control border-0 py-3" placeholder={t('Your Name')} />
          </div>
          <div className="mb-4">
            <input type="text" className="form-control border-0 py-3" placeholder={t('Last name')} />
          </div>
          <div className="mb-4">
            <input type="email" className="form-control border-0 py-3" placeholder={t('Email Here')} />
          </div>
          <div className="mb-4">
            <textarea className="w-100 form-control border-0 py-3" rows={6} cols={10} placeholder={t('Message')} defaultValue={""} />
          </div>
          <div className="text-start">
            <button className="btn bg-primary text-white py-3 px-2" type="button">{t('Send Message')}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 
</div>
{/* Contact End */}


   <div>
  {/* Footer Start */}
  <div className="container-fluid footer bg-dark wow fadeIn" data-wow-delay=".3s">
    <div className="container pt-5 pb-4">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <Link to="">
            <h5 className="text-info fw-bold d-block footer-font">{t('Gulf Egyptian Construction Co.')}</h5>
          </Link>
          <p className="mt-4 text-light">{t('Your Trust on (GECO), Our Confidence.')}
        </p>
          <div className="d-flex hightech-link mt-5 justify-content-center">
            <Link to="" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-facebook-f text-primary" /></Link>
            <Link to="" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-twitter text-primary" /></Link>
            <Link to="" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-instagram text-primary" /></Link>
            <Link to="" className="btn-light nav-fill btn btn-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary" /></Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <Link to="#" className="h3 text-info">{t('Short Link')}</Link>
          <div className="mt-4 d-flex flex-column short-link">
            <Link to="" className="mb-2 text-white"><i className="fas fa-angle-right text-info me-2" />{t('About us')}</Link>
            <Link to="" className="mb-2 text-white"><i className="fas fa-angle-right text-info me-2" />{t('Contact Us')}</Link>
            <Link to="" className="mb-2 text-white"><i className="fas fa-angle-right text-info me-2" />{t('Our Services')}</Link>
            <Link to="" className="mb-2 text-white"><i className="fas fa-angle-right text-info me-2" />{t('Our Projects')}</Link>
            <Link to="" className="mb-2 text-white"><i className="fas fa-angle-right text-info me-2" />{t('Latest Blog')}</Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <Link to="#" className="h3 text-info">{t('Help Link')}</Link>
          <div className="mt-4 d-flex flex-column help-link">
            <Link to="/terms" className="mb-2 text-white"><i className="fas fa-angle-right text-info me-2" />{t('Terms Of use')}</Link>
            <Link to="" className="mb-2 text-white"><i className="fas fa-angle-right text-info me-2" />{t('Privacy Policy')}</Link>
            <Link to="" className="mb-2 text-white"><i className="fas fa-angle-right text-info me-2" />{t('Helps')}</Link>
            <Link to="" className="mb-2 text-white"><i className="fas fa-angle-right text-info me-2" />{t('FQAs')}</Link>
            <Link to="" className="mb-2 text-white"><i className="fas fa-angle-right text-info me-2" />{t('Contact')}</Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <a to="#" className="h3 text-info">{t('Contact Us')}</a>
          <div className="text-white mt-4 d-flex flex-column contact-link">
            <Link to="#" className="pb-3 text-light border-bottom border-primary"><i className="fas fa-map-marker-alt text-info me-2" /> {t('Malaz, Saudia Arab')}</Link>
            <Link to="#" className="py-3 text-light border-bottom border-primary"><i className="fas fa-phone-alt text-info me-2" /> {t('+966-555-460-00')}</Link>
            <Link to="#" className="py-3 text-light border-bottom border-primary Arabic"><i className="fas fa-envelope text-info me-2" />{t('gecconstruction@gmail.com')}</Link>
          </div>
        </div>
      </div>
      <hr className="text-light mt-5 mb-4" />
      <div className="row">
        <div className="col-md-6 text-center text-md-start">
          <span className="text-light"><Link to="#" className="text-info"><i className="fas fa-copyright text-info me-2" />{t('Gulf Egyptian Construction Co.')}</Link>{t(', All right reserved.')}</span>
        </div>
        <div className="col-md-6 text-center text-md-end">
         
          <span className="text-light"><Link to="https://ghumaim.com" className="text-info"></Link> {t('Created by Rabia!')} </span>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
 
</div>
    </>
  )
}

export default Footer;