import Image from "next/image";
import About1Imag from '../../public/about-1.png'
import About2Imag from '../../public/about-2.png'
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
export function About() {
    return (
        <section className="bg-[#FDF6ec] py-16">
            <div className="container px-4 mx-auto"> {/*Delimitar o tamanho*/}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">

                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden"> {/*overflow-hidden para cortar o que passar do container*/}
                            <Image
                                src={About1Imag}
                                alt="foto do cachorro"
                                fill //preenche o container
                                quality={100}
                                priority //carrega a imagem com prioridade
                                className="object-cover hover:scale-110 duration-300"
                            />
                        </div>
                        <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg
                            border-4 overflow-hidden border-white">
                            <Image
                                src={About2Imag}
                                alt="foto do cachorro"
                                fill //preenche o container
                                quality={100}
                                priority //carrega a imagem com prioridade
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/*Sobre do texto*/}
                    <div className="space-y-6 m-10">{/*Espaçamento entre os elementos*/}
                        <h2 className="text-4xl font-bold">SOBRE</h2>

                        <p>
                            Ter um pet é como ter um amigo fiel que está sempre lá,
                            abandonando o rabo ou ronronando de contentamento.
                            Eles nos ensinaram sobre amor incondicional, paciência
                            e importância de viver o momento presente. Seja um cãozinho animado correndo atrás da bolinha,
                            um gatinho tranquilo dormindo no sofá, ou qualquer outro bichinho que complete uma família,
                            a presença deles ilumina nossos dias e enche a casa de vida.
                        </p>
                        {/*Lista com ícones*/}
                        <ul className="space-y-6">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Aberto desde 2006
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Equipe com mais de 10 veterinários.
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Qualidade é nossa prioridade.
                            </li>
                        </ul>

                        <div className="flex gap-2">
                            <a href="#"
                                className="bg-[#E84C3D] text-white flex items-center justify-center
                                    w-fit gap-2 px-4 py-2 rounded-b-md">
                                <WhatsappLogoIcon className="w-5 h-5 text-white" />
                                Contato via WhatsApp
                            </a>

                            <a href="#"
                                className="text-black flex items-center justify-center
                                w-fit gap-2 px-4 py-2 rounded-b-md">
                                <MapPin className="w-5 h-5 text-black" />
                                Endereço da Loja
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}