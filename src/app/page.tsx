import React from 'react';
import Banner from './components/BannerHome';
import Brands from './components/AppBrand';

import Job from './components/JobCard';
// import JobSlider from './components/JobSlider';

const page = () => {
  const brands = [
    '/images/microsoft-logo.png',
    '/images/oracle-logo.png',
    '/images/atlassian-logo.png',
    '/images/cloudfare-logo.png',
    '/images/vmware-logo.png',
  ];

  const jobs = [
    {
      order: 1,
      skill: 'Python',
      position: 'Software Engineer',
      location: 'London',
      annual: 65000,
      description:
        'Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.',
      postedDate: '29/08/2023',
    },
    {
      order: 2,
      skill: 'Python',
      position: 'Software Engineer',
      location: 'London',
      annual: 65000,
      description:
        'Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.',
      postedDate: '29/08/2023',
    },
    {
      order: 3,
      skill: 'Python',
      position: 'Software Engineer',
      location: 'London',
      annual: 65000,
      description:
        'Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.',
      postedDate: '29/08/2023',
    },
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
        <div className='latest-jobs bg-light py-5'>
          <div className='container'>
            {/* <JobSlider jobs={jobs} /> */}
            <div className='d-flex justify-content-between'>
              {jobs.map((job, index = 1) => (
                <Job
                  {...job}
                  color={
                    index % 2 ? 'primary' : index % 3 ? 'tertiary' : 'secondary'
                  }
                />
              ))}
            </div>
            <div className='d-flex mt-3 justify-content-between'>
              <div className='d-flex align-items-center'>
                <button className='btn btn-round bg-dark text-light me-2'>
                  <span className='material-symbols-outlined'>
                    arrow_left_alt
                  </span>
                </button>
                <button className='btn btn-round bg-dark text-light'>
                  <span className='material-symbols-outlined'>
                    arrow_right_alt
                  </span>
                </button>
              </div>
              <button type='button' className='btn btn-link text-dark'>
                View more jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
