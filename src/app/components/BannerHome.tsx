import React from 'react';

interface Props {
  image: String;
  title: String;
  subtitle: String;
}

const BannerHome = (props: Props) => {
  const { image, title, subtitle } = props;
  return (
    <div className='bg-primary banner home-banner d-flex align-items-center py-5'>
      <div className='circle top bg-tertiary' />
      <div className='circle bottom bg-secondary' />
      <div className='container content d-md-flex align-items-center'>
        <img
          src={`${image}`}
          className='img-fluid order-2 mb-3 mb-lg-0'
          alt='image'
        />
        <div className='me-2 me-md-4 pe-lg-3 col-12 col-md-6 col-lg'>
          <p className='fw-regular'>{subtitle}</p>
          <h1 className='fw-bold mb-3'>{title}</h1>
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control ps-3'
              placeholder='E.g. networking'
              aria-label="Recipient's username"
              aria-describedby='basic-addon2'
            />
            <button
              className='btn btn-secondary fw-bold text-dark-1'
              type='button'
              id='button-addon2'
            >
              Search jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
