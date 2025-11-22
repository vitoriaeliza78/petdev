"use client";

import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { WhatsappLogoIcon } from '@phosphor-icons/react';
import tutor1 from '../../public/'
const testemonials = [
    {
        content:
        author:
        role:
        image:
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
                            {services.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">{/*Pega 100% da largura no mobile e 1/3 no desktop* do espaço quando mobile*/}
                                    <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                        
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