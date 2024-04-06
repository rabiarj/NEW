import React from 'react';
import { useTranslation } from 'react-i18next';

const Fact = () => {

    const {t} = useTranslation(['common']);
  return (
    <>
    
    {/* Fact Start */}
<div className="container-fluid bg-warning py-5">
<div className="container">
  <div className="row">
    <div className="col-lg-3 wow fadeIn" data-wow-delay=".1s">
      <div className="d-flex counter">
        <h1 className="me-3 text-primary counter-value">{t('99')}</h1>
        <h5 className="text-white mt-1">{t('Success in getting happy customer')}</h5>
      </div>
    </div>
    <div className="col-lg-3 wow fadeIn my-2 " data-wow-delay=".3s">
      <div className="d-flex counter">
        <h1 className="me-5 text-primary counter-value">{t('25')}</h1>
        <h5 className="text-white mt-1">{t('Successful business')}</h5>
      </div>
    </div>
    <div className="col-lg-3 wow fadeIn" data-wow-delay=".5s">
      <div className="d-flex counter">
        <h1 className="me-5  my-2 text-primary counter-value">{t('120')}</h1>
        <h5 className="text-white mt-1">{t(' Clients love High GEC ')}</h5>
      </div>
    </div>
    <div className="col-lg-3 wow fadeIn" data-wow-delay=".7s">
      <div className="d-flex counter">
        <h1 className="me-5 my-2 text-primary counter-value">{t('5')}</h1>
        <h5 className="text-white mt-1">{t('Reviews given by clients')}</h5>
      </div>
    </div>
  </div>
</div>
</div>
{/* Fact End */}
    </>
  )
}

export default Fact;