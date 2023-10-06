import React from 'react';

const About = () => {
  return (
    <div name='sobre' className='w-full min-h-screen pt-[80px] bg-primaryBg text-primaryText'>
      <div className='flex flex-col justify-center items-center w-full h-full'>

        {/* Title */}
        <div className='max-w-[1000px] w-full px-4 pb-8 text-center'>
          <h2 className='text-4xl font-bold inline border-b-4 border-accent1'>
            Em breve, conectando você aos seus objetivos
          </h2>
        </div>

        {/* Introduction */}
        <div className='max-w-[1000px] w-full px-4 text-center mb-8'>
          <p className='text-lg sm:text-xl text-secondaryText mb-4'>
          Em breve você conhecerá um aplicativo que vai revolucionar a sua forma de malhar! Conecte-se ao seu personal trainer, acompanhe estatísticas precisas dos seus exercícios e receba treinos personalizados com apenas alguns toques. Se ainda não tem um personal? Não se preocupe! Nossa plataforma te ajuda a encontrar o profissional perfeito, considerando seu tempo, orçamento e objetivos. Treine com eficiência, conecte-se com os melhores e transforme sua rotina fitness. Venha conhecer e sentir a diferença!
          </p>
        </div>

        {/* Content */}
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-center'>

          {/* Left Column */}
          {/* <div className='text-lg sm:text-xl text-secondaryText space-y-4 text-right'>
            <h3 className='text-2xl font-semibold mb-4'>Nossa Missão</h3>
            <p>
              Revolucionar a relação das pessoas com a saúde, trazendo conhecimento técnico e inteligência de dados para as suas rotinas fisiológicas, com foco em exercícios físicos e nutrição.
            </p>

            <h3 className='text-2xl font-semibold mb-4'>Nossa Visão</h3>
            <p>
              Melhorar a saúde de 100 milhões de usuários até 2030.
            </p>
          </div> */}

          {/* Right Column */}
          {/* <div className='text-lg sm:text-xl text-secondaryText space-y-4 text-left'>
            <h3 className='text-2xl font-semibold mb-4'>Nossos Valores</h3>
            <ul className='list-none'>
              <li><strong>Inteligência</strong>: utilizamos ciência de dados para diferenciar e dar credibilidade a tudo o que fazemos.</li>
              <li><strong>Integridade</strong>: todas as nossas recomendações são voltadas para a melhoria da saúde do usuário.</li>
              <li><strong>Hospitalidade</strong>: trabalhamos para proporcionar sempre a melhor experiência para o usuário</li>
              <li><strong>Contextualização</strong>: buscamos embasar as nossas orientações em uma compreensiva observância da realidade do usuário.</li>
              <li><strong>Inovação</strong>: olhamos para a informação como uma fonte de oportunidades para elevar o potencial da ciência.</li>
            </ul>
          </div> */}

        </div>
      </div>
    </div>
  )
}




export default About;


