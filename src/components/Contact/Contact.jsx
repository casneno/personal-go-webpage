import React, { useState } from 'react';

function Contact() {
  const [formState, setFormState] = useState({});

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const config = {
      SecureToken: '0783c68f-b982-448b-a800-93f38ba6d2a7',
      To: 'cloudneno@gmail.com',
      From: formState.email,
      Subject: `${formState.name} contacted to you in PersonalGO`,
      Body: formState.message
    };
    if (window.Email) {
      window.Email.send(config)
        .then(response => {
          console.log(response);
          alert('Attempted to send email');
        })
        .catch(error => {
          console.error("Email error:", error);
        });
    }
  };

  return (
    <div name='contact' className='w-full min-h-screen pt-[80px] bg-primaryBg flex justify-center items-center p-4'>
      <form className='flex flex-col max-w-[600px] w-full' action="https://formsubmit.co/87c3a66c9787bbe1bcc78c7a6081e46d" method="POST">

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-accent1 text-primaryText'>Contato</p>
          <p className='text-secondaryText py-4'>Está curioso? Entre em contato através do formulário abaixo</p>
        </div>

        <input className='p-2 bg-secondaryBg text-black' type="text" placeholder='Nome' name='name' value={formState.name || ''} onChange={changeHandler} />
        <input className='my-4 p-2 bg-secondaryBg text-black' type="email" placeholder='Email' name='email' value={formState.email || ''} onChange={changeHandler} />
        <textarea className='p-2 bg-secondaryBg text-black' name='message' rows='10' placeholder='Diga-nos o quê você quer saber?' value={formState.message || ''} onChange={changeHandler}></textarea>

        <button type="submit" className='text-primaryText border-2 border-accent1 hover:bg-accent1 hover:text-primaryBg w-full text-center px-4 py-3 my-8 mx-auto flex items-center justify-center font-bold'>ENVIAR</button>
      </form>
    </div>
  );
}

export default Contact;


