"use client";

import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { WhatsappLogoIcon } from '@phosphor-icons/react';
import { title } from 'process';

const services = [
    {
        title: "Banho e Tosa",
        description: "Oferecemos serviços completos de banho e tosa para manter seu pet limpo e saudável.",
        duration: '1h',
        price: "$50",
        icon: <Scissors />,
        LinkText: "Olá, gostaria de saber mais sobre Banho e Tosa."
    },

    {
        title: "Consulta Veterinária",
        description: "oferece atendimento veterinário especializado para garantir a saúde do seu pet.",
        duration: '1h',
        price: "$45",
        icon: <Syringe />,
        LinkText: "Olá, gostaria de saber mais sobre Consulta Veterinária."
    },

    {
        title: "Taxi Pet",
        description: "Serviço de transporte seguro e confortável para levar seu pet ao veterinário ou salão de beleza.",
        duration: '2h',
        price: "$80",
        icon: <CarTaxiFront />,
        LinkText: "Olá, gostaria de saber mais sobre Taxi Pet."
    },

    {
        title: "Hotel para Pets",
        description: "Serviço de hospedagem para pets com conforto e cuidados especiais enquanto você estiver ausente.",
        duration: '1h',
        price: "$60",
        icon: <Hotel />,
        LinkText: "Olá, gostaria de saber mais sobre Hotel para Pets."
    }
]
export function Service() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        slidesToScroll: 1, // Mobile fica 1 slide por vez
        breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 3 }, // Desktop fica 3 slides por vez
        }
    })

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">

                <h2 className="text-4xl font-bold mb-12">Nossos Serviços</h2>

                <div className="relative'">

                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {services.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">{/*Pega 100% da largura no mobile e 1/3 no desktop* do espaço quando mobile*/}
                                    <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                        <div className='flex-1 flex items-start justify-between'>
                                            <div>
                                                <span className='text-3xl'>{item.icon}</span>
                                                <div>
                                                    <h3 className='font'>{item.title}</h3>
                                                    <p>
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}