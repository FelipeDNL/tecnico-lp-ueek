import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import AppCard from '../components/app-card';

export default function LandingPage() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="movefit">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="flex min-h-screen flex-col items-center px-6 text-[#EDEDEC] lg:justify-center lg:px-0 p-3 bg-[#080F17]">
                <header className="mb-3 w-full max-w-[335px] text-m not-has-[nav]:hidden lg:max-w-7xl border-b border-[#3E3E3A] pb-4">
                    <nav className="flex gap-4">
                        <div className='flex items-center justify-start gap-9 text-[#EDEDEC]'>
                            <div className="flex items-center gap-2">
                                <img
                                    src="/landing-page-images/logo-movefit.png"
                                    className="object-scale-down h-10 w-auto"
                                />
                            </div>

                            <div>
                                Início
                            </div>

                            <div>
                                Benefícios
                            </div>

                            <div>
                                Depoimentos
                            </div>

                            <div>
                                Galeria
                            </div>
                        </div>

                        <div className='flex items-center justify-end gap-2 ml-auto'>
                            <Link
                                href={route('login')}
                                className="inline-block rounded-xl border border-white px-5 py-1.5 text-sm leading-normal text-white hover:border-[#19140035]"
                            >
                                Login
                            </Link>
                            <Link
                                href={route('register')}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#000A14] font-bold bg-[#A7EE43] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:hover:border-[#62605b]"
                            >
                                Teste grátis
                            </Link>
                        </div>
                    </nav>
                </header>

                <main>
                    <div className="flex flex-col items-start pt-30 lg:grow p-6"
                        style={{
                            background: 'radial-gradient(ellipse 55% 70% at 50% 0%, #080F17 110%,rgb(60, 84, 27) 210%)',
                            height: '1100px'
                        }}
                    >
                        <div className="flex flex-col items-center justify-center transition-opacity duration-2000 starting:opacity-0 px-100 gap-6">
                            <p className='text-7xl font-semibold mb-4 text-center gap-1'>
                                Transforme sua jornada fitness
                            </p>

                            <p className='text-xl mb-6 text-center'>
                                Descubra nossos planos personalizados, elaborados especialmente para se adequar ao seu estilo de vida.
                                Esses planos são projetados não apenas para atender às suas necessidades, mas também para te capacitar em sua jornada rumo à realização de seus objetivos com facilidade e eficiência.
                            </p>

                            <div className='flex items-center justify-center gap-4 pt-7'>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-2xl leading-normal font-bold text-[#000A14] bg-[#A7EE43] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:hover:border-[#62605b]"
                                >
                                    Teste grátis
                                </Link>

                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-sm border px-5 py-1.5 text-2xl leading-normal text-[#1b1b18] font-bold hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Fale conosco
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center relative w-full flex justify-center bg-[#080F17]"
                        style={{ height: '1500px' }}>
                        <div>
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
                                className=""
                                style={{
                                    position: 'absolute',
                                    left: '50%',
                                    bottom: 1150,
                                    width: '1200px',
                                    maxWidth: '90%',
                                    height: 'auto'
                                }}
                            />
                        </div>

                        <div className="flex flex-col items-start justify-start h-500px w-full max-w-7xl pt-50">
                            <h1 className='text-5xl font-semibold mb-4 text-start text-[#EDEDEC]'>
                                Benefícios
                            </h1>

                            <div className='flex flex-col lg:flex-row items-start justify-start pb-6 gap-6'>
                                <AppCard
                                    imagem="/landing-page-images/lock.png"
                                    titulo="Transações rápidas e seguras"
                                    descricao="Uma ferramenta notável com suporte excepcional. Não poderia pedir mais."
                                />

                                <AppCard
                                    imagem="/landing-page-images/info-circle.png"
                                    titulo="Transações rápidas e seguras"
                                    descricao="Uma ferramenta notável com suporte excepcional. Não poderia pedir mais."
                                />

                                <AppCard
                                    imagem="/landing-page-images/info-circle.png"
                                    titulo="Transações rápidas e seguras"
                                    descricao="Uma ferramenta notável com suporte excepcional. Não poderia pedir mais."
                                />
                            </div>

                            <div className='flex flex-col lg:flex-row items-start justify-start gap-6'>
                                <AppCard
                                    imagem="/landing-page-images/lock.png"
                                    titulo="Transações rápidas e seguras"
                                    descricao="Uma ferramenta notável com suporte excepcional. Não poderia pedir mais."
                                />

                                <AppCard
                                    imagem="/landing-page-images/info-circle.png"
                                    titulo="Transações rápidas e seguras"
                                    descricao="Uma ferramenta notável com suporte excepcional. Não poderia pedir mais."
                                />

                                <AppCard
                                    imagem="/landing-page-images/info-circle.png"
                                    titulo="Transações rápidas e seguras"
                                    descricao="Uma ferramenta notável com suporte excepcional. Não poderia pedir mais."
                                />
                            </div>

                            <div className='flex flex-col items-start justify-start gap-3 border-b border-[#3E3E3A] pb-15'>
                                <h1 className='text-5xl font-semibold mb-4 text-start text-[#EDEDEC] pt-50'>
                                    Galeria de imagens
                                </h1>
                                <div className='flex flex-col lg:flex-row items-start justify-start gap-6'>
                                    <img
                                        src='/landing-page-images/frame 1.png'
                                        className='h-70.5'
                                    />

                                    <img
                                        src='/landing-page-images/frame 2.png'
                                        className='h-70.5'
                                    />

                                    <img
                                        src='/landing-page-images/frame 3.png'
                                        className='h-70.5'
                                    />

                                    <img
                                        src='/landing-page-images/frame 4.png'
                                        className='h-70.5'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="flex w-full max-w-7xl items-center justify-between pb-20">
                    <div className='flex items-center gap-2'>
                        <img
                            src="/landing-page-images/logo-movefit.png"
                            className="object-scale-down h-10 w-auto"
                        />
                    </div>

                    <div className='text-[#EDEDEC] pr-20'>
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


//animação fade-in
//transition-opacity duration-750 starting:opacity-0