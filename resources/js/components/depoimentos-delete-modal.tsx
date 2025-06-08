import { useState } from 'react';
import { router } from '@inertiajs/react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface DeleteDepoimentoModalProps {
    depoimentoIds: number[];
    className?: string;
}

export default function DeleteDepoimentoModal({ depoimentoIds, className}: DeleteDepoimentoModalProps) {
    const [isDeleting, setIsDeleting] = useState(false);
    const [open, setOpen] = useState(false);

    const handleDelete = () => {
        if (depoimentoIds.length === 1) {
            setIsDeleting(true);
            router.delete(route('depoimentos.destroy', depoimentoIds[0]), {
                onSuccess: () => {
                    toast.success('Depoimento excluído com sucesso!');
                    setIsDeleting(false);
                    setOpen(false); // Fecha o modal após sucesso
                },
                onError: () => {
                    toast.error('Erro ao excluir depoimento. Tente novamente.');
                    setIsDeleting(false);
                }
            });
        } else {
            setIsDeleting(true);
            router.delete(route('depoimentos.bulkDestroy'), {
                data: { ids: depoimentoIds },
                onSuccess: () => {
                    toast.success('Depoimentos excluídos com sucesso!');
                    setIsDeleting(false);
                    setOpen(false); // Fecha o modal após sucesso
                },
                onError: () => {
                    toast.error('Erro ao excluir depoimentos. Tente novamente.');
                    setIsDeleting(false);
                }
            });
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                    <button className={className}>
                        <p className='flex'><Trash2 className="h-4 w-4 mr-2" /> Excluir </p>
                    </button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Tem certeza que deseja excluir este(s) depoimento(s)?</DialogTitle>
                <DialogDescription>
                    Esta ação não pode ser desfeita. O(s) depoimento(s) será(ão) permanentemente removido(s) do sistema.
                </DialogDescription>
                <DialogFooter className="gap-2">
                    <DialogClose asChild>
                        <Button>
                            Cancelar
                        </Button>
                    </DialogClose>
                    <Button  
                        onClick={handleDelete}
                        disabled={isDeleting}
                        className="bg-red-500 hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        {isDeleting ? 'Excluindo...' : 'Excluir'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}