import { useStore } from '@nanostores/react';
import clsx from 'clsx';
import skills from '../../json/skills.json';
import { stackActive } from '../../store/landingStore';
import SkillCard from '../Card/SkillCard';

function SkillsAndStack(): JSX.Element {
  const $stackActive = useStore(stackActive);

  const getClassName = (type: 'fe' | 'be' | 'du') =>
    clsx(
      'py-3 px-4 text-center font-bold',
      $stackActive === type && 'gradient text-white',
      $stackActive !== type && 'text-primary bg-slate-100',
      type === 'du' && 'rounded-r',
      type === 'fe' && 'rounded-l'
    );

  const handleClick = (type: 'fe' | 'be' | 'du') => () => {
    stackActive.set(type);
  };

  return (
    <div>
      <header className='flex'>
        <button
          type='button'
          onClick={handleClick('fe')}
          className={getClassName('fe')}
        >
          Front End
        </button>

        <button
          type='button'
          onClick={handleClick('be')}
          className={getClassName('be')}
        >
          {' '}
          Back End
        </button>

        <button
          onClick={handleClick('du')}
          type='button'
          className={getClassName('du')}
        >
          {' '}
          Design Utillity
        </button>
      </header>
      <div className='mt-16 grid-cols-2 grid gap-6'>
        {skills
          ?.filter((skill) => skill.specialization.includes($stackActive))
          .map((skill) => (
            <div className='col-span-2 sm:col-span-1' key={skill.id}>
              <SkillCard key={skill.id} {...skill} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default SkillsAndStack;
