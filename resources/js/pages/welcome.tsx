import { Head, Link, usePage } from '@inertiajs/react';
import AppCard from '../components/app-card';

export default function LandingPage() {

    return (
        <>
            <Head title="movefit">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="flex min-h-screen flex-col items-center px-0 p-3 text-[#EDEDEC] bg-[#080F17]">
                <header className="border-b border-[#FFFFFF33] mb-3 text-m pb-4 w-full max-w-7xl ">

                    <nav className="flex gap-4">

                        <div className='flex items-center justify-start gap-9 text-[#EDEDEC]'>
                            
                            <div className="flex items-center gap-2">
                                <img
                                    src="/landing-page-images/logo-movefit.png"
                                    className="object-scale-down h-10 w-auto"
                                    alt="Logo Movefit"
                                    aria-label="Logo Movefit"
                                />
                            </div>

                            <div className="hidden md:flex items-center gap-6">
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
                                <p className="inline-block rounded-md border border-[#19140035] px-5 py-1.5 text-2xl leading-normal font-medium text-[#000A14] bg-[#A7EE43] hover:border-[#1915014a] hover:cursor-pointer">
                                    Teste grátis
                                </p>

                                <p className="inline-block rounded-md border border-white px-5 py-1.5 text-2xl leading-normal font-medium text-[#EDEDEC] hover:border-[#3E3E3A] hover:cursor-pointer">
                                    Fale conosco
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center relative w-full flex justify-center bg-[#080F17]"
                        style={{ height: '1900px' }}>
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
                                    bottom: 1550,
                                    width: '1200px',
                                    maxWidth: '90%',
                                    height: 'auto'
                                }}
                            />
                        </div>

                        <div className="flex flex-col max-w-7xl ">
                            <h1 className='text-5xl font-semibold mb-4 text-start text-[#EDEDEC] pb-5'
                                id='beneficios'
                            >
                                Benefícios
                            </h1>

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

                            <div className='flex flex-col lg:flex-row items-start justify-start gap-6'>
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

                            <div className='flex flex-col items-start justify-start gap-3 pt-15'>
                                <h1 className='text-5xl font-semibold mb-4 text-start text-[#EDEDEC]'
                                    id='depoimentos'
                                >
                                    Depoimentos
                                </h1>
                            </div>

                            <div className='flex flex-col items-start justify-start gap-3 border-b border-[#3E3E3A] pb-15'>
                                <h1 className='text-5xl font-semibold mb-4 text-start text-[#EDEDEC] pt-50'
                                    id='galeria'
                                >
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

                <footer className="flex w-full max-w-7xl items-center justify-between pb-20 px-15">
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
