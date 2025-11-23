import { FacebookLogoIcon, InstagramLogoIcon, YoutubeLogoIcon } from '@phosphor-icons/react/dist/ssr'
import golden from '../../public/golden.png'
import natural from '../../public/natural.png'
import primier from '../../public/primier.png'
import royal from '../../public/royal.png'
import whiskas from '../../public/whiskas.png'
import Image from 'next/image'

const brands = [
    {name: 'Royal Canin', logo: royal},
    {name: 'Golden', logo: golden},
    {name: 'Primier', logo: primier},
    {name: 'Formula Natural', logo: natural},
    {name: 'Whiskas', logo: whiskas},
    {name: 'Golden', logo: golden},
]

export function Footer(){
    return(
        <section className="bg-[#E84c3d] py-16 text-white">
            <div className='container mx-auto px-4'>

                <div className='border-b border-white/20 pb-8'>
                    <h4 className='text-3xl font-semibold mb-8 text-center'>Marcas que Trabalhamos</h4>
                
                    <div className='grid grid-cols-2 lg:grid-cols-6 gap-8' data-aos="zoom-in-down" data-aos-delay="700">
                        {brands.map((item, index) => (
                            <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'>
                                <Image
                                src={item.logo}
                                alt={item.name}
                                width={100}
                                height={50}
                                quality={100}
                                style={{
                                    width: 'auto',
                                    height:'auto',
                                }}
                                className='object-contain'
                                />
                            </div>
                        ))}
                    </div>          
                
                </div>
                
                <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
                    {/*Primeira coluna*/}
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Pet Shop Dev</h3>
                        <p className='mb-3'>Cuidando do seu melhor amigo com amor e dedicação.</p>
                        <a
                            target='_blank'
                            href={'https://wa.me/5567983478457?text=Olá vim pelo site e gostaria de saber mais informações'} 
                        className='bg-green-500 px-4 py-1 rounded-md'>
                            Contato via WhatsApp    
                        </a>     
                    </div>
                    
                    {/*Segunda coluna*/}
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
                        <p>Email: teste@teste.com</p>
                        <p>Telefone:(61) 123456679</p>
                        <p>Rua Maria avestruz, Brasília | DF</p>
                    </div>

                    {/*Terceira coluna*/}
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Redes Sociais</h3>
                        <div className='flex gap-4'>
                            <a href="#" target="_blank" >
                                <FacebookLogoIcon className='w-8 h-8'/>
                            </a>
                            <a href="#" target="_blank" >
                                <InstagramLogoIcon className='w-8 h-8'/>
                            </a>
                            <a href="#" target="_blank" >
                                <YoutubeLogoIcon className='w-8 h-8'/>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    )
}