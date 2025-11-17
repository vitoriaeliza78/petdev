"use client";

import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr';
import dogImage from '../../public/hero-dog.webp';
import Image from 'next/image';
export function Hero(){
    return(
        <section className="bg-[#E84C3D] text-white relative overflow-hidden">
            <div>
                <Image
                    src={dogImage}
                    alt="Imagem de um cachorro feliz"
                />
            </div>

            <div className='container mx-auto pt-16 pb-16 md:pb-0 px-10 relative'>
                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8 '>
                    
                    <div className='space-y-6'>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-10'>
                            Seu pet merece cuidado, carinho e atenção especial.
                        </h1>
                    
                        <p className="lg:text-lg">
                            Oferecemos os melhores serviços para garantir o bem-estar e a
                            felicidade do seu amigo de quatro patas.
                        </p>

                            <a
                            href="#"
                            className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center
                            justify-center w-fit gap-2"
                            >
                                <WhatsappLogoIcon className='w-5 h-5'/>
                                Contato via WhatsApp
                            </a>

                        <div className="mt-8">
                            <p className="text-sm mb-4">
                                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra.
                            </p>
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