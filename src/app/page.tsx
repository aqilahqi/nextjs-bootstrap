import React from 'react';
import Banner from './components/BannerHome';

const page = () => {
  return (
    <div>
      <div>
        <Banner
          title='Elevate your career'
          subtitle='Software Recruitment Specialists'
          image='/images/banner-image-1.png'
        />
      </div>
    </div>
  );
};

export default page;
