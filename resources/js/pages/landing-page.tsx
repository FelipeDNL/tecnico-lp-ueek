import { Head, Link, usePage } from '@inertiajs/react';
import AppCard from '../components/app-card';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import AppHeader from '../components/app-header';

import '../../css/embla-carousel.css'

export default function LandingPage() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
    const { depoimentos } = (usePage().props as unknown as { depoimentos: Array<{ id: number, usuario: string, mensagem: string, created_at: string, updated_at: string }> });

    depoimentos.sort((a, b) => b.id - a.id);
    depoimentos.length = 6;

    return (
        <>
            <Head title="movefit">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="flex flex-col items-center px-0 text-[#EDEDEC] bg-[#080F17]">

                <AppHeader />

                <main id="inicio">
                    <div className="flex flex-col px-5 pt-30 transition-opacity duration-1000 starting:opacity-0">
                        <p className='text-4xl font-semibold mb-4 text-center gap-1 sm:text-5xl md:text-7xl'>
                            Transforme sua jornada fitness
                        </p>

                        <div className='text-xl mb-6 text-center sm:px-10 md:px-20 lg:px-30 xl:px-60 2xl:px-100 3xl:px-140'>
                            Descubra nossos planos personalizados, elaborados especialmente para se adequar ao seu estilo de vida.
                            Esses planos são projetados não apenas para atender às suas necessidades, mas também para te capacitar em sua jornada rumo à realização de seus objetivos com facilidade e eficiência.
                        </div>

                        <div className='flex items-center justify-center gap-4 pt-7'>
                            <p className="rounded-md border border-[#19140035] px-5 py-1 text-lg font-medium text-[#000A14] bg-[#A7EE43] hover:border-[#1915014a] hover:cursor-pointer md:text-xl md:py-1.5">
                                Teste grátis
                            </p>

                            <p className="rounded-md border border-white px-5 py-1 text-lg font-medium text-[#EDEDEC] hover:border-[#3E3E3A] hover:cursor-pointer md:text-xl md:py-1.5">
                                Fale conosco
                            </p>
                        </div>
                    </div>

                    <div className="h-[400px] bg-[radial-gradient(ellipse_55%_60%_at_40%_0%,#080F17_110%,rgb(60,84,27)_210%)] md:h-[500px] lg:h-[600px]" />

                    <div className="flex flex-col items-center relative w-full flex justify-center bg-[#080F17]">
                        <div className='flex items-center justify-center'>
                            <img
                                ref={img => {
                                    if (img) {
                                        img.style.transition = 'transform 1s cubic-bezier(0.4,0,0.2,1), opacity 1s';
                                        img.style.transform = 'translateX(-50%) translateY(60px)';
                                        img.style.opacity = '0';
                                        setTimeout(() => {
                                            img.style.transform = 'translateX(-50%) translateY(0)';
                                            img.style.opacity = '1';
                                        }, 300);
                                    }
                                }}
                                src='/landing-page-images/tabela-meio.png'
                                className='absolute left-1/2 md:max-w-auto lg:max-w-[1020px] h-auto'
                                alt="Tabela demonstrativa"
                                aria-label="Tabela demonstrativa"
                            />
                        </div>

                        <div className="flex flex-col pt-40 sm:pt-60 md:pt-70 md:p-5 lg:max-w-7xl">
                            <h1 className='text-3xl font-semibold mb-4 px-5 text-start text-[#EDEDEC] pb-5 md:text-4xl md:px-0 scroll-m-25'
                                id='beneficios'
                            >
                                Benefícios
                            </h1>
                            <div className='flex flex-col items-center justify-center gap-3 md:flex-row lg:flex-col '>
                                <div className='flex flex-col items-center lg:flex-row pb-6 gap-6'>
                                    <AppCard
                                        imagem="/landing-page-images/lock.png"
                                        titulo="Transações rápidas e seguras"
                                        descricao="Uma ferramenta notável com suporte excepcional. Não poderia pedir mais."
                                        imagemAlt="Ícone de cadeado representando segurança"
                                        imagemAriaLabel="Ícone de cadeado representando segurança"
                                    />

                                    <AppCard
                                        imagem="/landing-page-images/info-circle.png"
                                        titulo="Interface amigável ao usuário"
                                        descricao="Uma ferramenta notável com suporte excepcional. Não poderia pedir mais."
                                        imagemAlt="Ícone de informação representando interface amigável"
                                        imagemAriaLabel="Ícone de informação representando interface amigável"
                                    />

                                    <AppCard
                                        imagem="/landing-page-images/info-circle.png"
                                        titulo="Suporte 24 horas"
                                        descricao="Uma ferramenta notável com suporte excepcional. Não poderia pedir mais."
                                        imagemAlt="Ícone de informação representando suporte 24 horas"
                                        imagemAriaLabel="Ícone de informação representando suporte 24 horas"
                                    />
                                </div>

                                <div className='flex flex-col items-center lg:flex-row pb-6 gap-6'>
                                    <AppCard
                                        imagem="/landing-page-images/lock.png"
                                        titulo="Planos de preços flexíveis"
                                        descricao="Uma ferramenta notável com suporte excepcional. Não poderia pedir mais."
                                        imagemAlt="Ícone de cadeado representando planos flexíveis"
                                        imagemAriaLabel="Ícone de cadeado representando planos flexíveis"
                                    />

                                    <AppCard
                                        imagem="/landing-page-images/info-circle.png"
                                        titulo="Integração sem costura"
                                        descricao="Uma ferramenta notável com suporte excepcional. Não poderia pedir mais."
                                        imagemAlt="Ícone de informação representando integração"
                                        imagemAriaLabel="Ícone de informação representando integração"
                                    />

                                    <AppCard
                                        imagem="/landing-page-images/bar-chart.png"
                                        titulo="Análises abrangentes"
                                        descricao="Uma ferramenta notável com suporte excepcional. Não poderia pedir mais."
                                        imagemAlt="Ícone de gráfico representando análises"
                                        imagemAriaLabel="Ícone de gráfico representando análises"
                                    />
                                </div>
                            </div>
                            {depoimentos && depoimentos.length !== 0 && (
                                <div className='flex flex-col items-start justify-start gap-3 pt-15 px-3'>
                                    <h1 className='text-3xl px-2 font-semibold mb-4 text-start text-[#EDEDEC] md:text-4xl md:px-0 scroll-m-25'
                                        id='depoimentos'
                                    >
                                        Depoimentos
                                    </h1>
                                    
                                    <div className="flex flex-col gap-4 px-3 w-full lg:flex-row lg:flex-wrap lg:justify-evenly lg:items-start">
                                        {depoimentos && depoimentos.map((dep, idx) => (
                                            <div
                                                key={dep.id}
                                                className="bg-[#19140035] border border-[#A7EE43] rounded-lg p-4 gap-4 mb-4 lg:mb-0 lg:w-[30%] lg:mr-[1%] lg:last:mr-0"
                                                style={{
                                                    marginRight: (idx + 1) % 3 === 0 ? 0 : undefined,
                                                }}
                                            >
                                                <div className='break-all gap-2'>
                                                    <p className="font-bold">{dep.usuario}</p>
                                                    <p className="text-sm">{dep.mensagem}</p>
                                                    <p className='text-xs'>{new Date(dep.created_at).toLocaleString().split(',')[0]}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            )}
                            <div className='flex flex-col items-start justify-start gap-3 border-b pb-15'>
                                <h1 className='text-3xl px-5 font-semibold mb-4 text-start text-[#EDEDEC] pt-50 md:text-4xl md:px-0'
                                    id='galeria'
                                >
                                    Galeria de imagens
                                </h1>

                                <div className='flex flex-col items-start justify-start gap-6 lg:flex-row '>

                                    <div className="flex items-center justify-center embla xl:hidden hover:cursor-grabbing" ref={emblaRef}>
                                        <div className="embla__container">
                                            <img className="embla__slide" src="/landing-page-images/frame 1.png" />
                                            <img className="embla__slide" src="/landing-page-images/frame 2.png" />
                                            <img className="embla__slide" src="/landing-page-images/frame 3.png" />
                                            <img className="embla__slide" src="/landing-page-images/frame 4.png" />
                                        </div>
                                    </div>

                                    <div className='hidden xl:flex flex-row items-center justify-center gap-6 '>
                                        <img
                                            src="/landing-page-images/frame 1.png"
                                            className=' w-[290px] '
                                            alt="Galeria de imagens"
                                            aria-label="Galeria de imagens"
                                        />
                                        <img
                                            src="/landing-page-images/frame 2.png"
                                            className=' w-[290px] '
                                            alt="Galeria de imagens"
                                            aria-label="Galeria de imagens"
                                        />
                                        <img
                                            src="/landing-page-images/frame 3.png"
                                            className=' w-[290px] '
                                            alt="Galeria de imagens"
                                            aria-label="Galeria de imagens"
                                        />
                                        <img
                                            src="/landing-page-images/frame 4.png"
                                            className=' w-[290px] '
                                            alt="Galeria de imagens"
                                            aria-label="Galeria de imagens"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="flex w-full max-w-7xl items-center justify-between py-10 px-15">
                    <div className='flex items-center gap-2'>
                        <img
                            src="/landing-page-images/logo-movefit.png"
                            className="object-scale-down h-10 w-auto"
                            alt="Logo Movefit"
                            aria-label="Logo Movefit"
                        />
                    </div>

                    <div className='text-[#EDEDEC]'>
                        <p
                            className="inline-block rounded-sm border px-5 py-1.5 text-md leading-normal text-[#1b1b18] hover:border-[#19140035] text-white hover:cursor-pointer md:text-lg md:py-2 md:px-6"
                        >
                            Fale conosco
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}
