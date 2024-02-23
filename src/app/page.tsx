import React from 'react';

const page = () => {
  return (
    <div className='p-2'>
      <div>
        <button type='button' className='btn btn-primary'>
          Primary
        </button>

        <button
          className='btn btn-dark dropdown-toggle'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          Dropdown button
        </button>
        <ul className='dropdown-menu'>
          <li>
            <a className='dropdown-item' href='#'>
              Action
            </a>
          </li>
          <li>
            <a className='dropdown-item' href='#'>
              Another action
            </a>
          </li>
          <li>
            <a className='dropdown-item' href='#'>
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
