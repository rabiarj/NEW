import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';


const About = () => {
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
     {/* ======= About Section ======= */}

     <h1 className='my-5 fw-bold text-primary'>{t('About Us')}</h1>
     <section id="alt-services" className="alt-services mt-5">
     <div className="container" data-aos="fade-up">
       <div className="row justify-content-around gy-4">
        <div className='col-lg-6'>
        <img className="pic-center" src='./images/building.jpeg' width={300} data-aos="zoom-in" data-aos-delay={100} />
        </div>
         <div className="col-lg-6 d-flex flex-column justify-content-center  ">
           <h3 className='intro animate__animate animate__heartBeat'>{t('Welcom To')}<br/>
           {t('Gulf Egyptian Construction Co.')}
           </h3>
           <p className='text-align-center mt-3'>
           {t('Gulf Egyptian Construction Company (GECO.)is the construction field providing  project management, coordination as well as export projects procurement to deliver high quality products and superior customer service at a competitive cost while forming lasting and trustful relationships with clients.We are Civil and Electrical Construction company in Saudi Arabia.Our company maintains a high degree of motivation at the Board Members’level and among its Engineers Team mobilized to deliver fast and intricate projects at short notice.')}</p> 
         </div>
       </div>
     </div>
   </section>{/* End Alt Services Section */}
   
   {/* ======= Alt Services Section ======= */}
   <section id="alt-services" className="alt-services  my-5">
       <div className="container" data-aos="fade-up">
         <div className="row justify-content-around gy-4">
           <img className="col-lg-6 img-bg pic-center" src='./images/p3.jpg' width={45} data-aos="zoom-in" data-aos-delay={80} />
           <div className="col-lg-5 d-flex flex-column justify-content-center">
             <h3 className='intro animate__animate animate__heartBeat'>{t('WHY US?')}</h3>
   
             <p>{t('Our(GECO.)clients appreciate and trust us for our high quality products offering,competitive prices,and immediate availability of a wide range of products.We pride ourselves in providing second to none customer service and sales support ensuring that we execute the right orders at the right place and at the right time.')}</p>
             <div className="icon-box d-flex position-relative my-5" data-aos="fade-up" data-aos-delay={100}>
             <img src='./images/vission.png' className="rounded" height={60} width={70} alt='About-img'/>
               <div>
                 <h4><Link to='' className="stretched-link">{t('OUR VISSION')}</Link></h4>
                 <p className='my-3'>{t('Gulf Egyptian Construction Company (GECO.) aims to be serve the bestest services in contractors in Saudi Arabia.')}</p>
               </div>
             </div>{/* End Icon Box */}
             <div className="icon-box d-flex position-relative my-5" data-aos="fade-up" data-aos-delay={200}>
             <img src='./images/mission.png' className="rounded " height={60} width={70} alt='About-img'/>
               <div>
                 <h4><Link to='' className="stretched-link">{t('OUR MISSION')}</Link></h4>
                 <p className='my-3'>{t('Our mission is to partner with our clients to provide projects of exceptional quality, every time, while maintaining high standards of client experience and satisfaction.')}</p>
               </div>
             </div>{/* End Icon Box */}
             <div className="icon-box d-flex position-relative my-5" data-aos="fade-up" data-aos-delay={300}>
               <img src='./images/value2.png' className="rounded " height={60} width={70} alt='About-img'/>
               <div>
                 <h4><Link  to='' className="stretched-link">{t('OUR VALUE')}</Link></h4>
   
                 <p className='my-3'>{t('Integrity of People Safety and Quality Commercial Responsibility Relationship Sustainability and Social Responsibility')}</p>
               </div>
             </div>{/* End Icon Box */}
             <div className="icon-box d-flex position-relative my-5" data-aos="fade-up" data-aos-delay={400}>
               <img src='./images/quality2.png' className="rounded" height={60} width={70} alt='About-img'/>
               <div>
                 <h4><Link to='' className="stretched-link">{t('OUR QUALITY')}</Link></h4>
   
                 <p className='my-3'>{t('Due to our true and deep belief in our vision which is looking forward to entrepreneurship both nationally and internationally, and through adhering to our message which is implied in our excellence, we seek in all construction and building projects implemented by our company GULF EGYPTION CONSTRUCTION COMPANY (GECO.)')}</p>
               </div>
             </div>{/* End Icon Box */}
           </div>
         </div>
       </div>
     </section>{/* End About Section */}
    </>
  )
}

export default About