import { Whatsapplogo } from '@phosphor-icons/react';
export function Hero(){
    return(
        <section className="bg-[#E84C3D] text-white relative overflow-hidden">
            <div>
                <article>
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
                        Seu pet merece cuidado, carinho e atenção especial.
                    </div>
                    <p className="lg:text-lg">
                        Oferecemos os melhores serviços para garantir o bem-estar e a
                        felicidade do seu amigo de quatro patas.
                    </p>

                        <a
                        href="#"
                        className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center
                        justify-center w-fit"
                        ><Whatsapplogo className='w-5 h-5'/>
                            Contato via WhatsApp
                        </a>

                    <div className="mt-8">
                        <p className="text-sm mb-4">
                            <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    )
}