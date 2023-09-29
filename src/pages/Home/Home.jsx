import React from 'react';
import lucas from '../../images/lucas.jpg'
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full min-h-screen pt-[80px] bg-primaryBg'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        
        {/* Round Profile Image */} 
        <div className="mb-4 flex justify-center">
        <img 
        src={lucas}  // Using the imported image
        alt="Lucas Neno" 
        className="w-48 h-48 rounded-full shadow-lg border-2 border-gray-300" 
    />
        </div>

        <p className='text-accent3'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-primaryText'>Lucas Neno</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-secondaryText'>I'm a Full Stack Developer</h2>
        <p className='text-secondaryText py-4 max-w-[700px]'>Welcome to my Portfolio</p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className='group text-primaryText border-2 border-accent1 px-6 py-3 my-2 flex items-center hover:bg-accent1 hover:text-primaryBg'>
              View Work 
              <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300'/>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;


