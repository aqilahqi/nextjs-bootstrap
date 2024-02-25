import React from 'react';
import Job from './JobCard';
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
  const sliders = [];

  const carousel = jobs.sort((a: Job, b: Job) => {
    return a.order - b.order;
  });

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
