import * as React from "react";
import { usePage, Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
    SortingState,
    ColumnFiltersState,
    VisibilityState,
} from "@tanstack/react-table";
import { ChevronDown, PenLine, Plus, Trash2, MoreHorizontal } from "lucide-react";
import DeleteDepoimentoModal from './depoimentos-delete-modal';

type Depoimento = {
    id: number;
    usuario: string;
    mensagem: string;
    created_at: string;
    updated_at: string;
};

export function DepoimentosMain() {
    const { depoimentos } = (usePage().props as unknown as { depoimentos: Depoimento[] });

    // Table states
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});

    // Columns definition
    const columns = React.useMemo<ColumnDef<Depoimento>[]>(
        () => [
            {
                id: "select",
                header: ({ table }) => (
                    <Checkbox
                        checked={
                            table.getIsAllPageRowsSelected() ||
                            (table.getIsSomePageRowsSelected() && "indeterminate")
                        }
                        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
                        aria-label="Selecionar todos"
                    />
                ),
                cell: ({ row }) => (
                    <Checkbox
                        checked={
                            row.getIsSelected()
                        }
                        onCheckedChange={value => row.toggleSelected(!!value)}
                        aria-label="Selecionar linha"
                    />
                ),
                enableSorting: false,
                enableHiding: false,
            },
            {
                accessorKey: "mensagem",
                header: "Depoimento",
                cell: ({ row }) => <div className="break-all sm:min-w-[200px] lg:min-w-[200px] xl:min-w-[300px] 2xl:min-w-[500px] 3xl:min-w-[600px]">{row.original.mensagem}</div>,
            },
            {
                accessorKey: "usuario",
                header: "Usuário",
                cell: ({ row }) => <span>{row.original.usuario}</span>,
            },
            {
                accessorKey: "created_at",
                header: "Criado em",
                cell: ({ row }) => (
                    <span>{new Date(row.original.created_at).toLocaleString()}</span>
                ),
            },
            {
                id: "actions",
                enableHiding: false,
                header: "Ações",
                cell: ({ row }) => {
                    const dep = row.original;
                    return (
                        <>
                            <div className="lg:hidden">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                            <span className="sr-only">Abrir menu</span>
                                            <MoreHorizontal />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem asChild>
                                            <Link href={route('depoimentos.edit', dep.id)}>
                                                <PenLine className="h-4 w-4 mr-2" /> Editar
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem asChild>
                                            <DeleteDepoimentoModal
                                                depoimentoIds={[dep.id]}
                                                className="hover:bg-red-900 w-39 hover:text-white"
                                            />
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            <div className='hidden lg:block'>
                                <div className='flex flex-row gap-2'>
                                    <Link
                                        href={route('depoimentos.edit', dep.id)}
                                        className='inline-block rounded-md border border-white px-2 py-1 text-xs leading-normal hover:bg-white text-black hover:ring-1 hover:ring-white hover:ring-offset-1 hover:ring-offset-[#19140035] hover:border-black transition-[color,box-shadow] '
                                    >
                                        <div className="text-white hover:text-black flex flex-row justify-center items-center lg:text-sm lg:gap-1"> Editar <PenLine className="h-4 w-4 lg:h-5 lg:w-5" /></div>
                                    </Link>
                                    <DeleteDepoimentoModal
                                        depoimentoIds={[dep.id]}
                                        className='inline-block rounded-md border border-[#19140035] px-2 py-1 text-xs leading-normal bg-red-900 text-white hover:ring-1 hover:ring-red-900 hover:ring-offset-1 hover:ring-offset-[#19140035] hover:border-black transition-[color,box-shadow]'
                                    />
                                </div>
                            </div>
                        </>
                    );
                },
            },
        ],
        []
    );

    // Table instance
    const table = useReactTable({
        data: depoimentos,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    const selectedRows = table.getFilteredSelectedRowModel().rows;
    const selectedIds = selectedRows.map(row => row.original.id);

    return (
        <div className="w-full px-4">
            <div className="flex flex-row items-center justify-between mb-2">
                <p className="text-sm p-4" id="depoimentos-desc">
                    Aqui você pode visualizar, adicionar, editar, deletar e exportar depoimentos no modelo CSV.
                    <br />Caso queira excluir vários depoimentos, selecione-os e clique no botão de exclusão.
                </p>
                <Link
                    href={route('depoimentos.create')}
                    className="inline-block rounded-md border border-[#19140035] px-2 py-1 text-xs leading-normal bg-[#A7EE43] text-black hover:ring-1 hover:ring-[#A7EE43] hover:transition-[color,box-shadow] hover:ring-offset-1 hover:ring-offset-[#19140035] hover:border-black"
                    aria-label="Adicionar novo depoimento"
                    tabIndex={0}
                >
                    <div className="flex flex-row justify-center items-center lg:text-sm lg:gap-1">
                        Depoimento <Plus className="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
                    </div>
                </Link>
            </div>
            <div className="rounded-md border" role="region" aria-labelledby="depoimentos-desc">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map(headerGroup => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <TableHead key={header.id} tabIndex={0} aria-label={typeof header.column.columnDef.header === 'string' ? header.column.columnDef.header : undefined}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map(row => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                    tabIndex={0}
                                    aria-selected={row.getIsSelected()}
                                >
                                    {row.getVisibleCells().map(cell => (
                                        <TableCell key={cell.id} tabIndex={0}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center" tabIndex={0}>
                                    Nenhum resultado.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4" aria-label="Paginação e ações">
                <div className="text-muted-foreground flex-1 text-sm" aria-live="polite">
                    {table.getFilteredSelectedRowModel().rows.length} de{" "}
                    {table.getFilteredRowModel().rows.length} linha(s) selecionada(s).
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                        aria-label="Página anterior"
                        tabIndex={0}
                    >
                        Anterior
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                        aria-label="Próxima página"
                        tabIndex={0}
                    >
                        Próxima
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(route('depoimentos.export'), '_blank')}
                        className="bg-green-600 hover:bg-green-900"
                        aria-label="Exportar depoimentos em CSV"
                        tabIndex={0}
                    >
                        Exportar leads
                    </Button>
                </div>
            </div>
            <div className="flex items-center justify-end space-x-2" tabIndex={0} aria-label="Ações em massa">
                {selectedIds.length > 1 && (
                    <DeleteDepoimentoModal
                        depoimentoIds={selectedIds}
                        className="text-xs bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-md"
                        aria-label="Excluir depoimentos selecionados"

                    />
                )}
            </div>
        </div>
    );
}

export default DepoimentosMain;