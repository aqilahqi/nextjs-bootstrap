import React from 'react';
import JobCard from './JobCard';

interface Job {
  order: number;
  skill: string;
  position: string;
  location: string;
  annual: number;
  description: string;
  postedDate: string;
  color: string;
}

const JobSlider = (props: any) => {
  const { jobs } = props;

  return (
    <div>
      <div className='d-flex'>
        {jobs.map((job: Job) => (
          <JobCard
            {...job}
            color={
              job.order % 2
                ? 'primary'
                : job.order % 3
                ? 'tertiary'
                : 'secondary'
            }
            key={job.order}
          />
        ))}
      </div>
      <div className='d-flex'>
        <p>left</p>
        <p>right</p>
      </div>
    </div>
  );
};

export default JobSlider;
