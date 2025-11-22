"use client";

import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { WhatsappLogoIcon } from '@phosphor-icons/react';
import tutor1 from '../../public/tutor1.png';
import MinhaImg from '../../public/vitoria-ft.jpg'
import MulherCapa from '../../public/foto-capa.jpg'
import Image from 'next/image';

const testemonials = [
    {
        content:'Desde que comecei a usar os serviços oferecidos, minha vida mudou completamente. A equipe é extremamente profissional e dedicada, garantindo que todas as minhas necessidades sejam atendidas com excelência. Recomendo a todos que buscam qualidade e confiança.',
        author:'Mariana Souza',
        role:'tutora da Luna (Shih Tzu)',
        image:MinhaImg
    },

    {
        content: 'O serviço de hotel para pets é simplesmente incrível! Meu cachorro adorou a estadia e eu pude viajar tranquilo sabendo que ele estava em boas mãos. A equipe é atenciosa e o ambiente é limpo e seguro. Com certeza voltaremos!',
        author: 'Rafael Oliveira',
        role: 'tutor do Max (Labrador)',
        image: tutor1
    },

    {
        content: 'Meus gatos nunca estiveram tão bem cuidados! A equipe é apaixonada por animais e isso transparece no atendimento. Eles oferecem um serviço personalizado, respeitando a personalidade de cada pet. Estou muito satisfeito e recomendo a todos os tutores de gatos.',
        author: 'Camila Ferreira',
        role: 'tutora da Mimi (Siamês)',
        image: MulherCapa
    }
]
export function Testimonials() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    })


    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

     function scrollNext() {
        emblaApi?.scrollNext();
    }


    return (
        <section className="bg-[#FFD449] py-16">
            <div className="container mx-auto px-4">

                <h2 className="text-4xl font-bold text-center mb-12">Depoimentos</h2>

                <div className="relative max-w-4xl mx-auto">

                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {testemonials.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">{/*Pega 100% da largura no mobile e 1/3 no desktop* do espaço quando mobile*/}
                                    <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                        <div className='flex flex-col items-center text-center space-y-4'>
                                            <div className='relative w-24 h-24'>
                                                <Image
                                                src={item.image}
                                                alt={item.content}
                                                fill
                                                sizes='96px'
                                                className='object-cover rounded-full '
                                                />
                                            </div>

                                                <p className='text-gray-200'>{item.content}</p>
                                       
                                                <p className='font-bold'>{item.author}</p>
                                                <p className='text-sm text-gray-400'>{item.role}</p>
                                            
                                        </div>

                                       
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Botões de navegação */}

                    <button
                        className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3
                        -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                        onClick={scrollPrev}
                        >
                        <ChevronLeft
                            className='w-6 h-6 text-gray-600 '
                        />
                    </button>
                    
                    <button
                        className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6
                        -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                        onClick={scrollNext}
                        >
                        <ChevronRight
                            className='w-6 h-6 text-gray-600 '
                        />
                    </button>
                </div>
            </div>
        </section>
    )
}