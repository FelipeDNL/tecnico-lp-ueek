import { Head, Link, usePage } from '@inertiajs/react';
import AppCard from '../components/app-card';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import '../../css/embla-carousel.css'

export default function LandingPage() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

    return (
        <>
            <Head title="movefit">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="flex flex-col items-center px-0 p-3 text-[#EDEDEC] bg-[#080F17]">
                <header className="border-b border-[#FFFFFF33] mb-3 text-m pb-4 w-full px-5 lg:max-w-7xl">
                    <nav className="flex gap-4">
                        <div className='flex items-center justify-start gap-9 text-[#EDEDEC]'>

                            <div className="flex md:hidden items-center">
                                <button
                                    aria-label="Abrir menu"
                                    className="p-1 rounded focus:outline-none focus:ring-2 focus:ring-[#A7EE43]"
                                    onClick={() => {
                                        const menu = document.getElementById('mobile-menu');
                                        if (menu) {
                                            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
                                        }
                                    }}
                                >
                                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                                        <rect y="4" width="24" height="2" rx="1" fill="#EDEDEC" />
                                        <rect y="11" width="24" height="2" rx="1" fill="#EDEDEC" />
                                        <rect y="18" width="24" height="2" rx="1" fill="#EDEDEC" />
                                    </svg>
                                </button>

                                <div
                                    id="mobile-menu"
                                    className="absolute top-16 left-0 w-full bg-[#080F17] border-b border-[#FFFFFF33] flex flex-col gap-1 px-6 py-4 z-50 hidden transition-opacity duration-300 starting:opacity-0"
                                >
                                    <div
                                        className="cursor-pointer py-2"
                                        onClick={() => {
                                            document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' });
                                            document.getElementById('mobile-menu')!.style.display = 'none';
                                        }}
                                    >
                                        Início
                                    </div>
                                    <div
                                        className="cursor-pointer py-2"
                                        onClick={() => {
                                            document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' });
                                            document.getElementById('mobile-menu')!.style.display = 'none';
                                        }}
                                    >
                                        Benefícios
                                    </div>
                                    <div
                                        className="cursor-pointer py-2"
                                        onClick={() => {
                                            document.getElementById('depoimentos')?.scrollIntoView({ behavior: 'smooth' });
                                            document.getElementById('mobile-menu')!.style.display = 'none';
                                        }}
                                    >
                                        Depoimentos
                                    </div>
                                    <div
                                        className="cursor-pointer py-2"
                                        onClick={() => {
                                            document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' });
                                            document.getElementById('mobile-menu')!.style.display = 'none';
                                        }}
                                    >
                                        Galeria
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <img
                                    src="/landing-page-images/logo-movefit.png"
                                    className="object-scale-down h-10 w-auto"
                                    alt="Logo Movefit"
                                    aria-label="Logo Movefit"
                                />
                            </div>

                            <div className="hidden md:flex items-center gap-6"
                                id='menu-navegacao'>
                                <div
                                    className="cursor-pointer"
                                    onClick={() => {
                                        const section = document.getElementById('inicio');
                                        if (section) {
                                            section.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    Início
                                </div>

                                <div
                                    className="cursor-pointer"
                                    onClick={() => {
                                        const section = document.getElementById('beneficios');
                                        if (section) {
                                            section.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    Benefícios
                                </div>

                                <div
                                    className="cursor-pointer"
                                    onClick={() => {
                                        const section = document.getElementById('depoimentos');
                                        if (section) {
                                            section.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    Depoimentos
                                </div>

                                <div
                                    className="cursor-pointer"
                                    onClick={() => {
                                        const section = document.getElementById('galeria');
                                        if (section) {
                                            section.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    Galeria
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-end gap-2 ml-auto'>
                            <Link
                                href={route('login')}
                                className="inline-block rounded-md border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-white hover:border-white"
                            >
                                Login
                            </Link>
                            <p className="inline-block rounded-md border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#000A14] font-bold bg-[#A7EE43] hover:border-[#1915014a] hover:cursor-pointer">
                                Teste grátis
                            </p>
                        </div>
                    </nav>
                </header>

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

                        <div className="flex flex-col pt-40 sm:pt-60 md:pt-70">
                            <h1 className='text-3xl font-semibold mb-4 px-5 text-start text-[#EDEDEC] pb-5 md:text-4xl md:px-0'
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

                            <div className='flex flex-col items-start justify-start gap-3 pt-15'>
                                <h1 className='text-3xl px-5 font-semibold mb-4 text-start text-[#EDEDEC] md:text-4xl md:px-0'
                                    id='depoimentos'
                                >
                                    Depoimentos
                                </h1>
                            </div>

                            <div className='flex flex-col items-start justify-start gap-3 border-b border-[#3E3E3A] pb-15'>
                                <h1 className='text-3xl px-5 font-semibold mb-4 text-start text-[#EDEDEC] pt-50 md:text-4xl md:px-0'
                                    id='galeria'
                                >
                                    Galeria de imagens
                                </h1>

                                <div className='flex flex-col items-start justify-start gap-6 lg:flex-row '>

                                    <div className="embla lg:hidden" ref={emblaRef}>
                                        <div className="embla__container">
                                            <img className="embla__slide" src="/landing-page-images/frame 1.png" />
                                            <img className="embla__slide" src="/landing-page-images/frame 2.png" />
                                            <img className="embla__slide" src="/landing-page-images/frame 3.png" />
                                            <img className="embla__slide" src="/landing-page-images/frame 4.png" />
                                        </div>
                                    </div>

                                    <div className='hidden xl:flex flex-row items-center justify-center gap-6'>
                                        <img
                                            src="/landing-page-images/frame 1.png"
                                            className="max-w-[700px] 3xl:max-w-[800px]"
                                            alt="Galeria de imagens"
                                            aria-label="Galeria de imagens"
                                        />
                                        <img
                                            src="/landing-page-images/frame 2.png"
                                            className="max-w-[700px] 3xl:max-w-[800px]"
                                            alt="Galeria de imagens"
                                            aria-label="Galeria de imagens"
                                        />
                                        <img
                                            src="/landing-page-images/frame 3.png"
                                            className="max-w-[700px] 3xl:max-w-[800px]"
                                            alt="Galeria de imagens"
                                            aria-label="Galeria de imagens"
                                        />
                                        <img
                                            src="/landing-page-images/frame 4.png"
                                            className="max-w-[700px] 3xl:max-w-[800px]"
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
                        <Link
                            href={route('login')}
                            className="inline-block rounded-sm border px-5 py-1.5 text-md leading-normal text-[#1b1b18] hover:border-[#19140035] text-white"
                        >
                            Fale conosco
                        </Link>
                    </div>
                </footer>
            </div>
        </>
    );
}
