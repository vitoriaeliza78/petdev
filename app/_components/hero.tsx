"use client";

import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr';
import dogImage from '../../public/hero-dog.webp';
import CatImage from '../../public/cat-hero.png'
import Image from 'next/image';
export function Hero(){
    return(
        <section className="bg-[#E84C3D] text-white relative overflow-hidden">
            <div >
                <Image
                    data-aos="zoom-in"
                    data-aos-delay="400"
                    src={dogImage}
                    alt="Imagem do fundo do dog"
                    fill //preenche o container
                    sizes='100vw'
                    priority
                    className='object-cover opacity-60 lg:hidden'//lg: Desktop
                />
            </div>

            <div className='absolute inset-0 bg-black opacity-30 md:hidden'>

            </div>
            <div className='container mx-auto pt-16 pb-16 md:pb-0 px-10 relative'>
                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8 '>
                    
                    <div className='space-y-6'>
                        <h1 
                        className='text-3xl md:text-4xl lg:text-5xl font-bold leading-10'
                        data-aos="fade-down">
                            Seu pet merece cuidado, carinho e atenção especial.
                        </h1>
                    
                        <p className="lg:text-lg"
                            data-aos="fade-right">
                            Oferecemos os melhores serviços para garantir o bem-estar e a
                            felicidade do seu amigo de quatro patas.
                        </p>

                            <a
                            target='_blank'
                            href={'https://wa.me/5567983478457?text=Olá vim pelo site e gostaria de saber mais informações'}
                            className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center
                            justify-center w-fit gap-2"
                            data-aos="zoom-in"
                            data-aos-delay="800"
                            >
                                <WhatsappLogoIcon className='w-5 h-5'/>
                                Contato via WhatsApp
                            </a>

                        <div className="mt-8">
                            <p className="text-sm mb-4">
                                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra.
                            </p>

                            <div className='flex mt-4'>
                                <div className='w-32 hidden lg:block'>
                                <Image
                                    src={CatImage}
                                    alt='imagem do gato'
                                    quality={100}
                                    className='object-fill'
                                />     
                                </div>
                            </div>
                        </div>

                        
                    </div>
                    {/*imagem do cachorro*/}
                    <div className='hidden md:block h-full relative'> {/*md: tela do tablet*/}
                        <Image
                            src={dogImage}
                            alt="Imagem de um cachorro feliz"
                            className='object-contain '//objeto se ajusta ao container
                            fill
                            sizes="(max-width: 768px) 0vw, 50vw"
                            quality={100}// qualidade da imagem
                            priority // carrega a imagem com prioridade
                        />
                    </div>

                </article>
            </div>
        </section>
    )
}