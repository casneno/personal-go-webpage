import React, { useState } from 'react';

function Contact() {
  const [formState, setFormState] = useState({});

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  // Google Ads Conversion Tracking Function
  const gtag_report_conversion = (url) => {
    const callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    window.gtag('event', 'conversion', {
        'send_to': 'AW-11421282636/isFfCLe1p_kYEMzii8Yq',
        'event_callback': callback
    });
    return false;
  }

  // Handle Form Submission
  const submitHandler = (event) => {
    // Call the conversion tracking function
    gtag_report_conversion();
  };

  return (
    <div>
      <div name='inscreva-se' className='w-full h-auto pt-[80px] bg-primaryBg flex justify-center items-center p-4'>
        <form className='flex flex-col max-w-[600px] w-full' onSubmit={submitHandler} action="https://formsubmit.co/dab8a2a1894adcfc80c9711b2b6da895" method="POST">
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-accent1 text-primaryText'>Inscreva-se!</p>
            <p className='text-secondaryText py-4'>Está curioso? Inscreva-se para participar dos testes de nosso protótipo através do formulário abaixo.</p>
          </div>

          <input className='p-2 bg-secondaryBg text-black' type="text" placeholder='Nome' name='name' value={formState.name || ''} onChange={changeHandler} />
          <input className='my-4 p-2 bg-secondaryBg text-black' type="email" placeholder='Email' name='email' value={formState.email || ''} onChange={changeHandler} />
          <textarea className='p-2 bg-secondaryBg text-black' name='message' rows='10' placeholder='Diga-nos se você quer participar dos testes ou se tem alguma dúvida?' value={formState.message || ''} onChange={changeHandler}></textarea>

          <button type="submit" className='text-primaryText border-2 border-accent1 hover:bg-accent1 hover:text-primaryBg w-full text-center px-4 py-3 my-8 mx-auto flex items-center justify-center font-bold'>Submeter Inscrição</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;


