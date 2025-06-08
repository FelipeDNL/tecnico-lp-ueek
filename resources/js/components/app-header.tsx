import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { router, usePage } from "@inertiajs/react";
import { ChevronDown } from "lucide-react";
import { usePegarNome } from "@/hooks/use-nome";

type AuthUser = {
    name?: string;
    [key: string]: string | undefined;
};

type AuthProps = {
    user?: AuthUser;
    [key: string]: string | AuthUser | undefined;
};

const AppHeader = () => {
    const auth = usePage().props.auth as AuthProps;
    const estaLogado = !!auth?.user;
    const getNome = usePegarNome();
    const nome = getNome(auth?.user?.name ?? "");
    const cleanup = useMobileNavigation();

    const handleLogout = () => {
        cleanup();
        router.flushAll();
    }

    return (
        <header className="sticky top-0 z-50 border-b border-[#FFFFFF33] bg-[#080F17] pt-2.5 pb-4 px-4 lg:px-65 w-full" aria-label="Cabeçalho principal">
            <nav className="flex gap-4" aria-label="Navegação principal">
                <div className='flex items-center justify-start gap-9 text-[#EDEDEC]'>

                    <div className="flex md:hidden items-center">
                        <button
                            aria-label="Abrir menu de navegação móvel"
                            className="p-1 rounded focus:outline-none focus:ring-2 focus:ring-[#A7EE43]"
                            onClick={() => {
                                const menu = document.getElementById('mobile-menu');
                                if (menu) {
                                    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
                                }
                            }}
                            tabIndex={0}
                        >
                            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <rect y="4" width="24" height="2" rx="1" fill="#EDEDEC" />
                                <rect y="11" width="24" height="2" rx="1" fill="#EDEDEC" />
                                <rect y="18" width="24" height="2" rx="1" fill="#EDEDEC" />
                            </svg>
                        </button>

                        <div
                            id="mobile-menu"
                            className="absolute top-16 left-0 w-full bg-[#080F17] border-b border-[#FFFFFF33] flex flex-col gap-1 px-6 py-4 z-50 hidden transition-opacity duration-300 starting:opacity-0"
                            aria-label="Menu de navegação móvel"
                            tabIndex={-1}
                        >
                            <div
                                className="cursor-pointer py-2"
                                onClick={() => {
                                    document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' });
                                    document.getElementById('mobile-menu')!.style.display = 'none';
                                }}
                                tabIndex={0}
                                role="button"
                                aria-label="Ir para Início"
                            >
                                Início
                            </div>
                            <div
                                className="cursor-pointer py-2"
                                onClick={() => {
                                    document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' });
                                    document.getElementById('mobile-menu')!.style.display = 'none';
                                }}
                                tabIndex={0}
                                role="button"
                                aria-label="Ir para Benefícios"
                            >
                                Benefícios
                            </div>
                            <div
                                className="cursor-pointer py-2"
                                onClick={() => {
                                    document.getElementById('depoimentos')?.scrollIntoView({ behavior: 'smooth' });
                                    document.getElementById('mobile-menu')!.style.display = 'none';
                                }}
                                tabIndex={0}
                                role="button"
                                aria-label="Ir para Depoimentos"
                            >
                                Depoimentos
                            </div>
                            <div
                                className="cursor-pointer py-2"
                                onClick={() => {
                                    document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' });
                                    document.getElementById('mobile-menu')!.style.display = 'none';
                                }}
                                tabIndex={0}
                                role="button"
                                aria-label="Ir para Galeria"
                            >
                                Galeria
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <img
                            src="/landing-page-images/logo-movefit.png"
                            className="object-scale-down h-10 w-auto min-w-[100px]"
                            alt="Logo da Movefit"
                            aria-label="Logo da Movefit"
                        />
                    </div>

                    <div className="hidden md:flex items-center gap-6 sm:text-base"
                        id='menu-navegacao'
                        aria-label="Menu de navegação"
                    >
                        <div
                            className="cursor-pointer hover:border-b-2 hover:border-[#A7EE43] transition-all duration-300"
                            onClick={() => {
                                const section = document.getElementById('inicio');
                                if (section) {
                                    section.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            tabIndex={0}
                            role="button"
                            aria-label="Ir para Início"
                        >
                            Início
                        </div>

                        <div
                            className="cursor-pointer hover:border-b-2 hover:border-[#A7EE43] transition-all duration-300 "
                            onClick={() => {
                                const section = document.getElementById('beneficios');
                                if (section) {
                                    section.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            tabIndex={0}
                            role="button"
                            aria-label="Ir para Benefícios"
                        >
                            Benefícios
                        </div>

                        <div
                            className="cursor-pointer hover:border-b-2 hover:border-[#A7EE43] transition-all duration-300"
                            onClick={() => {
                                const section = document.getElementById('depoimentos');
                                if (section) {
                                    section.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            tabIndex={0}
                            role="button"
                            aria-label="Ir para Depoimentos"
                        >
                            Depoimentos
                        </div>

                        <div
                            className="cursor-pointer hover:border-b-2 hover:border-[#A7EE43] transition-all duration-300"
                            onClick={() => {
                                const section = document.getElementById('galeria');
                                if (section) {
                                    section.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            tabIndex={0}
                            role="button"
                            aria-label="Ir para Galeria"
                        >
                            Galeria
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-end gap-2 ml-auto'>

                    {!estaLogado ? (
                        <a
                            href={route('login')}
                            className="inline-block rounded-md border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-white hover:border-white"
                            aria-label="Fazer login"
                            tabIndex={0}
                        >
                            Login
                        </a>
                    ) : (
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <MenuButton
                                    className="break-all inline-flex w-full items-center justify-center gap-x-1 inline-block rounded-md border border-[#19140035] px-3 py-1.5 text-xs leading-normal text-white hover:border-white ring-1 ring-inset hover:cursor-pointer hover:bg-gray-10"
                                    aria-label="Abrir menu do usuário"
                                    tabIndex={0}
                                >
                                    {nome}
                                    <ChevronDown aria-hidden="true" />
                                </MenuButton>
                            </div>

                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border bg-[#080F17] shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                aria-label="Menu do usuário"
                            >
                                <div className="py-1">
                                    <MenuItem>
                                        <a
                                            href={route('dashboard')}
                                            className="block px-4 py-2 text-sm text-white data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                            aria-label="Ir para Dashboard"
                                            tabIndex={0}
                                        >
                                            Dashboard
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                            href={route('logout')}
                                            className="block px-4 py-2 text-sm text-white data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                            onClick={e => {
                                                e.preventDefault();
                                                handleLogout();
                                                router.post(route('logout'));
                                            }}
                                            aria-label="Sair"
                                            tabIndex={0}
                                        >
                                            Sair
                                        </a>
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </Menu>
                    )}

                    <p
                        className="flex items-center justify-center inline-block rounded-md border border-[#19140035] px-4 py-2 text-xs text-[#000A14] font-bold bg-[#A7EE43] hover:border-[#1915014a] hover:cursor-pointer lg:text-sm"
                        aria-label="Teste grátis"
                        tabIndex={0}
                    >
                        Teste grátis
                    </p>
                </div>
            </nav>
        </header>
    )
}

export default AppHeader;