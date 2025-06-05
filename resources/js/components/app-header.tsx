import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { usePage } from "@inertiajs/react";
import { Link } from "lucide-react";
import { pegarNome } from "@/hooks/use-nome";

const AppHeader = () => {
    const { auth } = usePage().props as { auth?: { user?: any } };
    const estaLogado = !!auth?.user;
    const getInitials = pegarNome();

    return (
        <header className="sticky top-0 z-50 border-b border-[#FFFFFF33] bg-[#080F17] mb-3 text-m pb-4 pt-2 px-4 lg:px-65 w-full ">
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

                    {!estaLogado ? (
                        <Link
                            href={route('login')}
                            className="inline-block rounded-md border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-white hover:border-white"
                        >
                            Login
                        </Link>
                    ) : (
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rinline-block rounded-md border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-white hover:border-white ring-1 ring-inset hover:cursor-pointer hover:bg-gray-10">
                                    {getInitials(auth.user.name)}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </MenuButton>
                            </div>

                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border bg-[#080F17] shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                            >
                                <div className="py-1">
                                    <MenuItem>
                                        <a
                                            href={route('dashboard')}
                                            className="block px-4 py-2 text-sm text-white data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                        >
                                            Dashboard
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                            href={route('login')}
                                            className="block px-4 py-2 text-sm text-white data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                        >
                                            Leads
                                        </a>
                                    </MenuItem>
                                    <form method="POST" action={route('logout')}>
                                        <MenuItem>
                                            <button
                                                type="submit"
                                                className="block w-full px-4 py-2 text-left text-sm text-white data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                            >
                                                Sair
                                            </button>
                                        </MenuItem>
                                    </form>
                                </div>
                            </MenuItems>
                        </Menu>
                    )}

                    <p className="inline-block rounded-md border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#000A14] font-bold bg-[#A7EE43] hover:border-[#1915014a] hover:cursor-pointer">
                        Teste grátis
                    </p>
                </div>
            </nav>
        </header>

    )
}

export default AppHeader;