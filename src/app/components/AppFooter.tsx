import React from 'react';
import Image from 'next/image';
const AppFooter = () => {
  const exploreLinks = [
    {
      label: 'Homepage',
      link: '#',
    },
    {
      label: 'For jobseekers',
      link: '#',
    },
    {
      label: 'For clients',
      link: '#',
    },
    {
      label: 'Our sectors',
      link: '#',
    },
    {
      label: 'Resources',
      link: '#',
    },
    {
      label: 'Contact us',
      link: '#',
    },
  ];
  return (
    <div className='footer bg-primary'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 col-lg-3 mb-5'>
            <h3 className='fw-bold text-white mb-4 fs-5'>
              Software Recruitment co.
            </h3>
            <div className='d-flex'>
              <a href='#' className='me-3'>
                <Image src='/images/linkedin.png' alt='linkedin' />
              </a>
              <a href='#' className='me-3'>
                <Image src='/images/facebook.png' alt='facebook' />
              </a>
              <a href='#' className='me-3'>
                <Image src='/images/instagram.png' alt='instagram' />
              </a>
              <a href='#' className='me-3'>
                <Image src='/images/twitter.png' alt='twitter' />
              </a>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-3 mb-3'>
            <h1 className='fw-bold text-white'>Explore</h1>
            <div className='list-group list-group-flush '>
              {exploreLinks.map((explore, index) => (
                <a
                  href={explore.link}
                  className='list-group-item bg-primary ps-0 text-white fw-light border-0'
                  key={index}
                >
                  {explore.label}
                </a>
              ))}
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-3 mb-3'>
            <h1 className='fw-bold text-white'>Sectors</h1>
            <div className='list-group list-group-flush '>
              {exploreLinks.map((explore, index) => (
                <a
                  href={explore.link}
                  className='list-group-item bg-primary ps-0 text-white fw-light border-0'
                  key={index}
                >
                  {explore.label}
                </a>
              ))}
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-3 mb-3'>
            <h1 className='fw-bold text-white'>Services</h1>
            <div className='list-group list-group-flush '>
              {exploreLinks.map((explore, index) => (
                <a
                  href={explore.link}
                  className='list-group-item bg-primary ps-0 text-white fw-light border-0'
                  key={index}
                >
                  {explore.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
