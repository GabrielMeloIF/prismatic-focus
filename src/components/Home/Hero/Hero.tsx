import Image from 'next/image';

export default function Hero() {
  return (
    <section className='bg-[#f5f5f5] px-[8%] py-16 lg:px-[10%]'>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 lg:flex-row'>

        {/* text column */}
        <div className='w-full lg:w-1/2'>
          <h1 className='GolosText text-4xl font-bold leading-tight text-[var(--black)] md:text-6xl'>
            O mundo
            <br />
            por outros olhos.
            <br />

            <span className='text-[var(--second)]'>
              Equipamentos de ponta para capturar cada momento
            </span>
            <br />
            com foco e nitidez.
          </h1>

          <p className='mt-4 text-gray-600'>
            Fotografe, pare o tempo, guarde memórias...
          </p>

          {/* Botões */}
          <div className='mt-6 flex gap-4'>
            <button className='rounded-lg bg-[var(--second)] px-6 py-3 font-semibold text-white hover:opacity-90'>
              Comprar
            </button>

            <button className='rounded-lg border border-gray-400 px-6 py-3 font-semibold hover:bg-gray-100'>
              Ver detalhes
            </button>
          </div>
        </div>
        
        {/* Image column */}
        <div className='w-full lg:w-1/2'>

          {/* fundo colorido */}
          <div className='absolute h-[320px] w-[260px] rounded-[30px] bg-gradient-to-br from-[var(--second)] to-[var(--prim)] md:h-[450px] md:w-[520px]' />

          <div className='hero-image'>
            <Image
              src="/camera.png"
              alt='Imagem Banner'
              width={600}
              height={700}
              className='relative z-10 w-full md:w-[80%] lg:w-[80%]'
            />
          </div>
        </div>

      </div>
    </section>
  );
}