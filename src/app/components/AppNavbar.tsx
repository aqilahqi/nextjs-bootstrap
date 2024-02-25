import React from 'react';

const AppNavbar = () => {
  const menu = [
    {
      label: 'For jobseeker',
      link: '',
      children: [
        {
          label: 'Link',
          link: '#',
        },
      ],
    },
    {
      label: 'For clients',
      link: '',
      children: [
        {
          label: 'Link',
          link: '#',
        },
      ],
    },
    {
      label: 'Sectors',
      link: '',
      children: [
        {
          label: 'Link',
          link: '#',
        },
      ],
    },
    {
      label: 'Resources',
      link: '',
      children: [
        {
          label: 'Link',
          link: '#',
        },
      ],
    },
  ];

  return (
    <nav className='navbar navbar-expand-xl'>
      <div className='container'>
        <a className='navbar-brand fw-bold text-primary fs-5 me-5' href='#'>
          Software Recruitment co.
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          {/* left side */}
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            {menu.map((m, index) =>
              m.children.length > 0 ? (
                <li key={index} className='nav-item dropdown me-4'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    {m.label}
                  </a>
                  <ul className='dropdown-menu'>
                    {m.children.map((child) => (
                      <li>
                        <a className='dropdown-item' href={child.link}>
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={index}>
                  <a
                    className='nav-link active'
                    aria-current='page'
                    href={m.link}
                  >
                    {m.label}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* right side */}
          <div>
            <button className='btn btn-secondary text-accent fw-bold me-2'>
              Upload CV
            </button>
            <button className='btn btn-tertiary text-accent fw-bold me-2'>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
