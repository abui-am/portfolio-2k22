import clsx from 'clsx';
import React from 'react';
import type Skill from '../../json/skills.json';
import { monthToYearText } from '../../utils/texts';

function SkillCard({
  id,
  imageUrl,
  level,
  monthOfExperience,
  title,
}: typeof Skill[0]): JSX.Element {
  return (
    <div className={clsx('gradient p-[1px] rounded-lg')}>
      <div className='relative overflow-hidden flex bg-white p-6 rounded-lg space-x-4'>
        <img
          alt={title}
          loading='lazy'
          className='w-16 h-16 object-fill mt-2'
          src={imageUrl}
        />
        <div>
          <div className='flex space-x-4 mb-2 items-center'>
            <span className='text-base font-bold'>{title}</span>
            <div className='px-2 p-1 rounded bg-slate-100 font-bold text-primary'>
              {level}
            </div>
          </div>
          <p className='mb-2'>
            <span className='text-primary'>
              <b>{monthToYearText(monthOfExperience)}</b>
            </span>{' '}
            of professional experiences
          </p>
          <a href={`/skills/${id}`}>
            <span className='text-gradient underline font-bold'>
              See detail
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
