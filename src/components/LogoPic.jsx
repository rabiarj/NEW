import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const LogoPic = () => {
    const {t} = useTranslation(["common"]);
  return (
    <>
    

    <div className='contanier-fluid'>
    
    <Link  to='/'>
    <img src='./images/GECLOGO.png' alt='CompanyLogo' className=' justify-content-center Logoimg'  />
    </Link>
    <Link to="/"><button className='ms-5 py-2 px-3 text-white bg-info rounded'>{t('Go to Back')}</button></Link>

    </div>
    </>
  )
}

export default LogoPic