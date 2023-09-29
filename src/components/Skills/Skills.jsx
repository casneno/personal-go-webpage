import React from 'react';
import HTML from '../../images/html.png';
import CSS from '../../images/css.png';
import GitHub from '../../images/github.png';
import JavaScript from '../../images/javascript.png';
import Mongo from '../../images/mongo.png';
import Node from '../../images/node.png';
import ReactShield from '../../images/react.png';
import Tailwind from '../../images/tailwind.png';
import Postgre from '../../images/postgre.png';
import Django from '../../images/django.png';
import Python from '../../images/python.png';
import Heroku from '../../images/heroku.png';
import Express from '../../images/express.png';
import Postman from '../../images/postman.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full min-h-screen pt-[80px] bg-primaryBg text-primaryText'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-accent1'>Skills</p>
          <p className='text-lg py-4 text-secondaryText'>Technologies I have worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          { /* List of Technologies with their respective images and names */ }
          {[
            {img: HTML, alt: "HTML logo", name: "HTML"},
            {img: CSS, alt: "CSS logo", name: "CSS"},
            {img: JavaScript, alt: "JavaScript logo", name: "JavaScript"},
            {img: Python, alt: "Python logo", name: "Python"},
            {img: ReactShield, alt: "React logo", name: "React"},
            {img: Node, alt: "Node.js logo", name: "Node"},
            {img: Express, alt: "Express logo", name: "Express"},
            {img: Django, alt: "Django logo", name: "Django"},
            {img: Mongo, alt: "MongoDB logo", name: "Mongo"},
            {img: Postgre, alt: "Postgre logo", name: "Postgre"},
            {img: Tailwind, alt: "Tailwind CSS logo", name: "Tailwind"},
            {img: Postman, alt: "Postman logo", name: "Postman"},
            {img: GitHub, alt: "GitHub logo", name: "GitHub"},
            {img: Heroku, alt: "Heroku logo", name: "Heroku"},
          ].map((tech, idx) => (
            <div key={idx} className='hover:scale-125 duration-500'>
              <img className='w-20 mx-auto' src={tech.img} alt={tech.alt} />
              <p className='my-4 text-secondaryText'>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>  
    </div>
  )
}

export default Skills;
