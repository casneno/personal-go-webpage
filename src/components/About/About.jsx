import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen pt-[80px] bg-primaryBg text-primaryText'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        
        {/* Title */}
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-0'>
            <p className='text-4xl font-bold inline border-b-4 border-accent1'>
              About
            </p>
          </div>
          <div>
            {/* Empty div to maintain grid structure. */}
          </div>
        </div>

        {/* Content */}
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          
          {/* Introduction */}
          <div className='sm:text-right sm:pr-6'>
            <h1 className='text-4xl font-bold mb-4'>Hi, I'm Lucas, nice to meet you!</h1>
            <p className='text-lg sm:text-xl text-secondaryText mb-4'>
              Please take a look around.
            </p>
            
            {/* Interests Tags */}
            <div className="mt-6 flex flex-wrap gap-2 sm:justify-end justify-center">
                <span className="text-sm sm:text-base bg-accent1 text-primaryBg px-3 py-1 rounded-full">AI</span>
                <span className="text-sm sm:text-base bg-accent1 text-primaryBg px-3 py-1 rounded-full">react</span>
                <span className="text-sm sm:text-base bg-accent1 text-primaryBg px-3 py-1 rounded-full">python</span>
                <span className="text-sm sm:text-base bg-accent1 text-primaryBg px-3 py-1 rounded-full">video games</span>
                <span className="text-sm sm:text-base bg-accent1 text-primaryBg px-3 py-1 rounded-full">board games</span>
                <span className="text-sm sm:text-base bg-accent1 text-primaryBg px-3 py-1 rounded-full">cooking</span>
                <span className="text-sm sm:text-base bg-accent1 text-primaryBg px-3 py-1 rounded-full">outdoor sports</span>
                {/* Add more tags as needed */}
            </div>
          </div>
          
          {/* Main Content */}
          <div className='text-lg sm:text-xl text-secondaryText space-y-4'>
            <p>Transitioning from Civil to Software Engineering, I combine project management expertise with analytical and creative <strong>problem-solving</strong> skills. As a junior developer keen on merging industry experience with new technical knowledge, I'm seeking opportunities to contribute and eager to connect with teams needing my unique abilities.</p>
            <p>I enjoy listening to a few tech <strong>podcasts</strong>, namely the Alura AI podcast (portuguese) and Changelog</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;


