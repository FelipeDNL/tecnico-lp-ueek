import React from "react";

import { ChevronDown, PenLine, Plus, Trash2 } from 'lucide-react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { usePage, Link } from "@inertiajs/react";


export default function DepoimentosMain() {
    const { depoimentos } = (usePage().props as unknown as {
        depoimentos: Array<{
            id: number,
            usuario: string,
            mensagem: string,
            created_at: string,
            updated_at: string
        }>
    });

    return (
        <div className='text-sm'>
            <div className='flex flex-row items-center justify-between gap-2 border-b '>
                <p className='text-md p-4 sm:text-md'>Aqui você pode adicionar, editar e deletar depoimentos. </p>
                <div className='flex gap-2 pr-5'>
                    <Link
                        href={route('depoimentos.create')}
                        className='inline-block rounded-md border border-[#19140035] px-4 py-4 text-sm leading-normal bg-green-400 text-white hover:border-black'
                    >
                        <Plus />
                    </Link>
                </div>
            </div>

            {depoimentos.map((dep) => (
                <div className='border-b px-3'>
                    <div key={dep.id} className='flex flex-4 flex-row p-2'>
                        <p className='px-1'>{dep.mensagem}</p>

                        <Menu as='div' className="relative inline-block text-left">
                            <div>
                                <MenuButton className="inline-flex w-full items-center justify-center gap-x-1 rinline-block rounded-md border border-[#19140035] px-3 py-1.5 text-sm leading-normal text-white hover:border-white ring-1 ring-inset hover:cursor-pointer hover:bg-gray-10">
                                    <ChevronDown />
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
                                </div>
                            </MenuItems>
                        </Menu>

                    </div>


                    <div className='text-xs flex justify-evenly p-2 gap-2 border-t'>
                        <p>{dep.id}</p>
                        <p className='border-r pr-2'></p>
                        <p>{dep.usuario}</p>
                        <p className='border-r pr-2'></p>
                        <p className='flex items-center pt-0.5'>{new Date(dep.created_at).toLocaleString()}</p>
                    </div>
                </div>
            ))}

        </div>
    );
}