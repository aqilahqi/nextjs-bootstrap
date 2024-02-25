import React from 'react';
import Banner from './components/BannerHome';
import Brands from './components/AppBrand';

const page = () => {
  const brands = [
    '/images/microsoft-logo.png',
    '/images/oracle-logo.png',
    '/images/atlassian-logo.png',
    '/images/cloudfare-logo.png',
    '/images/vmware-logo.png',
  ];
  return (
    <div>
      <div>
        <Banner
          title='Elevate your career'
          subtitle='Software Recruitment Specialists'
          image='/images/banner-image-1.png'
        />
        <Brands brands={brands} />
      </div>
    </div>
  );
};

export default page;
