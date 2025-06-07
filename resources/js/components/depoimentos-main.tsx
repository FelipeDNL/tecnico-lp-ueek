import { ChevronDown, PenLine, Plus, Trash2 } from 'lucide-react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { usePage, Link } from "@inertiajs/react";
import DeleteDepoimentoModal from './depoimentos-delete-modal';

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
        <div className='text-sm md:text-sm '>
            <div className='flex flex-row items-center justify-between border-b mb-5'>
                <p className='text-md p-4 p'>Aqui você pode visualizar, adicionar, editar e deletar depoimentos. </p>
                <div className='gap-2 pr-5'>
                    <Link
                        href={route('depoimentos.create')}
                        className='inline-block rounded-md border border-[#19140035] px-2 py-1 text-xs leading-normal bg-[#A7EE43] text-black hover:ring-1 hover:ring-[#A7EE43] hover:transition-[color,box-shadow] hover:ring-offset-1 hover:ring-offset-[#19140035] hover:border-black'
                    >
                        <div className="flex flex-row justify-center items-center lg:text-sm lg:gap-1"> Depoimento <Plus className="h-4 w-4 lg:h-5 lg:w-5" /></div>
                    </Link>
                </div>
            </div>

            {depoimentos.map((dep) => (
                <div key={dep.id} className='px-3 lg:px-10 pb-3'>
                    <div className='flex flex-row p-2 justify-between gap-2'>
                        <p className='px-1 break-all'>{dep.mensagem}</p>

                        <div className='lg:hidden '>
                            <Menu as='div' className="flex text-xs inline-block text-left">
                                <MenuButton className="inline-flex w-full items-center justify-center rounded-md border border-[#19140035] px-.5 py-.5 text-sm leading-normal text-white hover:border-white ring-1 ring-inset hover:cursor-pointer hover:bg-gray-10">
                                    <ChevronDown className="h-5 w-5" />
                                </MenuButton>
                                <MenuItems
                                    className="absolute right-0 z-10 mt-2 w-40 rounded-md border bg-[#080F17] shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                >
                                    <MenuItem>
                                        <Link
                                            href={route('depoimentos.edit', dep.id)}
                                            className="rounded-t-md block px-4 py-2 text-white data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                        >
                                            <p className='flex'><PenLine className="h-4 w-4 mr-2" /> Editar </p>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <DeleteDepoimentoModal
                                            depoimentoId={dep.id}
                                            variant="menuItem"
                                            className="block px-4 py-2 text-white w-39.5 data-focus:bg-red-900 data-focus:text-white-900 data-focus:rounded-b-md data-focus:outline-hidden"
                                        />
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>

                        <div className='hidden lg:block'>
                            <div className='flex flex-row gap-2'>
                                <Link
                                    href={route('depoimentos.edit', dep.id)}
                                    className='inline-block rounded-md border border-[#19140035] px-2 py-1 text-xs leading-normal bg-white text-black hover:ring-1 hover:ring-white hover:ring-offset-1 hover:ring-offset-[#19140035] hover:border-black transition-[color,box-shadow] '
                                >
                                    <div className="flex flex-row justify-center items-center lg:text-sm lg:gap-1"> Editar <PenLine className="h-4 w-4 lg:h-5 lg:w-5" /></div>
                                </Link>
                                <DeleteDepoimentoModal
                                    depoimentoId={dep.id}
                                    className='inline-block rounded-md border border-[#19140035] px-2 py-1 text-xs leading-normal bg-red-900 text-white hover:ring-1 hover:ring-red-900 hover:ring-offset-1 hover:ring-offset-[#19140035] hover:border-black transition-[color,box-shadow]'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='text-xs flex justify-start p-2 gap-2 border-y lg:justify-start'>
                        <p className='border-r pr-3 '>ID: {dep.id}</p>
                        <p className="overflow-hidden ">{dep.usuario}</p>
                        <p className='flex items-center pt-0.5 border-l pl-2'>{new Date(dep.created_at).toLocaleString()}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}