import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Terms = () => {
    const {t} = useTranslation(['common']);
  return (
    <>
    
    
    <div className='container-fluid'>
    <h1><Link to="/terms"></Link>{t('Terms Of use')}</h1>
    <div className=''>
        <div>
        
        </div>
    </div>

</div>
    </>
  )
}

export default Terms