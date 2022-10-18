import React from 'react';
import about from '../../json/about.json';

function About() {
  return (
    <div>
      <div className='mb-10 block'>
        <h1 className='text-4xl text-gradient font-extrabold inline'>About</h1>
      </div>
      <hr className='mb-4' />
      <article className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-8'>
        <div>
          <header className='mb-8'>
            <h2 className='text-4xl text-gradient font-extrabold inline'>
              {about.title}
            </h2>
            <div className='sm:hidden mt-8 mb-8'>
              <TableOfContent />
            </div>
          </header>
          {about.body.map((paragraph) => (
            <div key={paragraph.id} className='mb-6' id={paragraph.id}>
              <div className='flex mb-6'>
                <p className='text-2xl text-gradient font-extrabold inline'>
                  {paragraph.title}
                </p>
                <span className='text-2xl font-extrabold inline'>
                  {paragraph.icon}
                </span>
              </div>
              {paragraph.description.map((sentence) => (
                <p className='text-base mb-6' key={sentence.id}>
                  {sentence.text}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className='flex justify-end -order-1 sm:order-1'>
          <div className='w-full sm:w-auto hidden sm:block'>
            <TableOfContent />
          </div>
        </div>
      </article>
    </div>
  );
}

function TableOfContent() {
  return (
    <section
      id='toc'
      className='block gradient p-[1px] rounded-lg sm:max-w-sm sm:sticky sm:top-28'
    >
      <div className='bg-white rounded-lg p-4'>
        <div className='mb-4 font-bold'>
          <h2 className='text-xl text-gradient inline'>Table of Content</h2>
        </div>
        <ol>
          {about.body.map((paragraph, index) => (
            <li key={paragraph.id} className='mb-2'>
              <a href={`#${paragraph.id}`} className='underline'>
                {index + 1}. {paragraph.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default About;
