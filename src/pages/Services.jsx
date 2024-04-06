import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import OurServices from './OurServices';

const Services = () => {
    const {t , i18n} = useTranslation('common');
    useEffect(()=>{
      //alert('pg loding');
      //current language store in the local storage
      let currentLang = localStorage.getItem('lang');
      i18n.changeLanguage(currentLang);
    },[]);
  return (
    <>
    <NavBar/>
    <OurServices/>
    
    {/* ======= Services Section ======= */}
  <section id="services" className="services section-bg mt-5 ">
  <div className="container" data-aos="fade-up">
    <div className="section-header">
      <h2 className='intro animate__animate animate__heartBeat my-5'>{t('Services')}</h2>
      
    </div>
    <div className="row gy-4">
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
        <div className="service-item  position-relative">
          <div className="icon">
          <img src='./images/b2.jpg' className=' rounded' width={80} alt=''/>
            
          </div>
          <h3 className='my-4'>{t('ABILITY')}</h3>
          <p>{t('(GECO.)has held a prominent position because of its objectives and abilities cultivated.This position has been held by our innovative spirit and primary goal which is to surpass customer expectations using industry-leading technologies.')}</p>
          <Link to="/services" className="readmore stretched-link">{('Learn more ')}<i className="bi bi-arrow-right" /></Link>
        </div>
      </div>{/* End Service Item */}
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
        <div className="service-item position-relative">
          <div className="icon">
          <img src='./images/qulity.png' className=' rounded' width={80}/>
          </div>
          <h3 className='my-4'>{t('QUALITY')}</h3>
          <p>{t('(GECO.)We provide high value products and services that meet the expectations & satisfaction of our customers.')}</p>
          <Link to="/services" className="readmore stretched-link">{('Learn more ')}<i className="bi bi-arrow-right" /></Link>
        </div>
      </div>{/* End Service Item */}
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
        <div className="service-item position-relative">
          <div className="icon">
          <img src='./images/customer.webp' className=' rounded' width={70}/>
          </div>
          <h3 className='my-4'>{t('BEST SERVICES')}</h3>
          <p>{t('(GECO.)are available all the time for the best services.')}</p>
          <Link to="/services" className="readmore stretched-link">{t('Learn more ')}<i className="bi bi-arrow-right" /></Link>
        </div>
      </div>{/* End Service Item */}
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
        <div className="service-item position-relative">
          <div className="icon">
          <img src='./images/D1.PNG' className=' rounded' width={80}/>
          </div>
          <h3 className='my-4'>{t('BEST DESIGN')}</h3>
          <p>{t('(GECO.) are design a best idea according the demaond on clients.')}</p>
          <Link to="/services" className="readmore stretched-link">{t('Learn more ')}<i className="bi bi-arrow-right" /></Link>
        </div>
      </div>{/* End Service Item */}
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={500}>
        <div className="service-item position-relative">
          <div className="icon">
          <img src='./images/b7.jpg' className=' rounded' width={80}/>
            
          </div>
          <h3 className='my-4'>{t('SAFETY')}</h3>
          <p>{t('(GECO.)Our priority to proviede the best safety and security in Saudia Arbia.')}</p>
          <Link to="/services" className="readmore stretched-link">{t('Learn more ')}<i className="bi bi-arrow-right" /></Link>
        </div>
      </div>{/* End Service Item */}
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={600}>
        <div className="service-item position-relative">
          <div className="icon">
          <img src='./images/price.jpg' className=' rounded' width={70}/>
            <i className="fa-solid fa-arrow-up-from-ground-water" />
          </div>
          <h3 className='my-4'>{t('BEST PRICE')}</h3>
          <p>{t('(GECO.) is provided a best price with quilty matrials.')}</p>
          <Link to="/services" className="readmore stretched-link">{t('Learn more ')}<i className="bi bi-arrow-right" /></Link>
        </div>
      </div>{/* End Service Item */}
    </div>
  </div>
</section>{/* End Services Section */}
{/* ======= Alt Services Section ======= */}
<section id="alt-services" className="alt-services my-5">
  <div className="container" data-aos="fade-up">
    <div className="row justify-content-around gy-4">
  
     
      <div className="col-lg-12 d-flex flex-column justify-content-center">
        <h1 className='intro animate__animate animate__heartBeat my-5'>{t('THAT IS WHY')}</h1>
        <p className='ms-2 text-align-center justify-content-center'>{t('Our clients appreciate and trust us for our high quality product offering,competitive prices, and immediate availability of a wide range of products. We pride ourselves in providing second to none customer service and sales support ensuring that we execute the right orders at the right place and at the right time.')}</p>
        <div className="icon-box  position-relative" data-aos="fade-up" data-aos-delay={100}>
        <img src='./images/MOSQUE.webp' className="rounded my-3 ms-3" height={60} width={70}/>
          <div>
            <h4><Link to='' className="stretched-link">{t('MOSQUES')}</Link></h4>
            <p className='ms-2 text-align-center justify-content-center'>{t('Gulf Egyptian Construction Company (GECO.) aims to be serve the bestest four contractors in Saudi Arabia. WE construct a mosque with ethically requirments and intriror')}</p>
          </div>
        </div>{/* End Icon Box */}
        <div className="icon-box  position-relative" data-aos="fade-up" data-aos-delay={200}>
        <img src='./images/MEDICAIL.jpg' className="rounded my-3 ms-3 " height={60} width={70}/>
          <div>
            <h4><Link to='' className="stretched-link">{t('MEDECIAL CONSTRUCTION')}</Link></h4>
            <p className='ms-2 text-align-center justify-content-center'>{t('Gulf Egyptian Construction Company (GECO.) Our mission is to partner with our clients to provide projects of exceptional quality, every time, while maintaining high standards of client experience and satisfaction.')}</p>
          </div>
        </div>{/* End Icon Box */}
        <div className="icon-box  position-relative" data-aos="fade-up" data-aos-delay={300}>
          <img src='./images/COMMERCIAL.png' className="rounded  my-3 ms-3" height={60} width={70}/>
          <div>
            <h4><Link to='' className="stretched-link">{t('COMMERCIALS CONSTRUCTION')}</Link> </h4>
            <p className='ms-2 text-align-center justify-content-center'>{t('Gulf Egyptian Construction Company (GECO.)Integrity People Safety and Health Excellence and Quality Commercial Responsibility Relationships Sustainability and Social Responsibility')}</p>
          </div>
        </div>{/* End Icon Box */}

        <div className="icon-box  position-relative" data-aos="fade-up" data-aos-delay={300}>
          <img src='./images/ROAD.png' className="rounded  my-3 ms-3" height={60} width={70}/>
          <div>
            <h4><Link to='' className="stretched-link">{t('ROADS')}</Link></h4>
            <p className='ms-2 text-align-center justify-content-center'>{t('Gulf Egyptian Construction Company(GECO.)is one of the leading construction companies in developing,managing,and constructing roads & building in the country.Involved in the largest road network')}</p>
          </div>
        </div>{/* End Icon Box */}


        <div className="icon-box  position-relative" data-aos="fade-up" data-aos-delay={300}>
          <img src='./images/RESIDENCIAL.webp' className="rounded  my-3 ms-3" height={60} width={70}/>
          <div>
            <h4><Link to='' className="stretched-link">{t('RESIDENCIAL')}</Link> </h4>
            <p className='ms-2 text-align-center justify-content-center'>{t('GULF EGYPTIAN CONSTRUCTION COMPANY (GECO.) is one of the leading construction residencial in developing, managing, and constructing in the country. Involved in the largest residencial network.')}</p>
          </div>
        </div>{/* End Icon Box */}


        <div className="icon-box  position-relative" data-aos="fade-up" data-aos-delay={400}>
          <img src='./images/EDUCATIONAL.jpg' className="roundedmy-3 ms-3" height={60} width={70}/>
          <div>
            <h4><Link to='' className="stretched-link me-2">{t('EDUCATIONAL CONSTRUCTION')}</Link></h4>
           <p className='ms-4 mb-5'>{t('Gulf Egyptian Construction Company (GECO.) Due to our deep trust  and quilty work we construct a educational building with the rules and safty measurements accordinth the educational enviouments.')}</p>
          </div>
        </div>{/* End Icon Box */}
        {/* <img  src='./images/p3.jpg' data-aos="zoom-in" data-aos-delay={100} /> */}
      </div>
      </div>
    </div>

</section>{/* End Alt Services Section */}
    </>
  )
}

export default Services