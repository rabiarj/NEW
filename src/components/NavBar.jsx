import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const {t,i18n} = useTranslation(['common']);
  useEffect(()=>{
  //alert('pg loding');
  //current language store in the local storage
  let currentLang = localStorage.getItem('lang');
  i18n.changeLanguage(currentLang);
}, []);

const changeLang = (l) =>{
return()=>{
  // alert('confirm ' +l);
  i18n.changeLanguage(l);
  // set the current language save in  the local storage
  localStorage.setItem('lang',l);

}
}

  return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-dark  fw-bolder  sticky-top h5">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">
     <Link to='' className=" d-inline-flex align-item-center px-2 px-lg-2">
           <Link to="/logo"> <img src='./images/GECLOGO.png' alt='logo' width={200}  className='rounded-2 newLogo'/></Link>
             <Link to=''  className=" my-4 me-5 NameLogo"> 
                    شركة البناء الخليجة المصرية للتعمير                

                     <br/>
                    Gulf Egyptian Construction Co.
            </Link> 
        </Link>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
     aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-lg-0 mx-5 justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active bg-Light nav-fill btn btn-sm-square rounded-circle "  aria-current="page" to="/"><i class="fa-solid fa-house-user" ></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{t('About')}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">{t('Services')}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects">{t('Projects')}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/partners">{t('Partners')}</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/contact">{t('Contact')}</Link>
        </li>
      </ul>
      <form className="d-flex justify-content-center">
      <button onClick={changeLang('en')}   className="btn btn-outline-light me-4 " type="submit">English</button>
        <button onClick={changeLang('sa')}  className="btn btn-outline-light me-5 px-3 Arabic" type="submit">  عربي  </button>
      </form>
    </div>
  </div>
</nav>
    
    
    </>
  )
}

export default NavBar