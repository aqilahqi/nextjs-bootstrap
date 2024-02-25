import React from 'react';
import Image from 'next/image';

const AppBrand = (props: any) => {
  const { brands } = props;
  return (
    <div className='py-5 brands-section'>
      <div className='container'>
        <p className='text-center text-light-1 fw-bold mb-4 pb-2'>
          Who we work with
        </p>
        <div className='d-flex flex-wrap justify-content-around justify-content-lg-between'>
          {brands.length > 0 &&
            brands.map((brand: string, index: number) => (
              <Image
                src={`${brand}`}
                className='brands img-fluid mb-3'
                alt='image'
                key={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AppBrand;
