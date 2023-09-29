import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full min-h-screen pt-[80px] bg-primaryBg flex justify-center items-center p-4'>
      <form action="https://getform.io/f/70901632-2224-4845-b958-a35cc4f5c888" method='POST' className='flex flex-col max-w-[600px] w-full'>
        
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-accent3 text-primaryText'>Contact</p>
          <p className='text-secondaryText py-4'>Submit the form below or send me an email - lucasneno@gmail.com</p>
        </div>
        
        <input className='p-2 bg-secondaryBg text-primaryText' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-secondaryBg text-primaryText' type="email" placeholder='Email' name='email' />
        <textarea className='p-2 bg-secondaryBg text-primaryText' type="message" rows='10' placeholder='Message' name='message'></textarea>
        
        <button className='text-primaryText border-2 border-accent1 hover:bg-accent1 hover:text-primaryBg px-4 py-3 my-8 mx-auto flex items-center'>Let's collaborate</button>
      </form>
    </div>
  )
}

export default Contact;

