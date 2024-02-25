import React from 'react';

interface Job {
  skill: string;
  position: string;
  location: string;
  annual: number;
  description: string;
  postedDate: string;
  color: string;
}

const JobCard = (props: Job) => {
  return (
    <div className={'card job-details border-0 bg-' + props.color}>
      <div className='card-body'>
        <span className='badge bg-white text-dark fw-light'>{props.skill}</span>
        <h3 className='fw-bold text-primary py-3'>{props.position}</h3>
        <p className='text-primary d-flex align-items-center fs-6 fw-light mb-2'>
          <span className='material-symbols-sharp me-2 fs-5'>location_on</span>
          {props.location}
        </p>
        <p className='text-primary d-flex align-items-center fs-6 fw-light mb-3'>
          <span className='material-symbols-sharp me-2 fs-5'>payments</span>£
          {props.annual}
        </p>
        <p className='text-primary fs-6 fw-light'>{props.description}</p>
        <button className='btn bg-white text-primary fw-semibold w-100 mb-3'>
          View this job
        </button>
        <p className='fw-light text-primary mb-0' style={{ fontSize: 13 }}>
          Posted on {props.postedDate}
        </p>
      </div>
    </div>
  );
};

export default JobCard;
