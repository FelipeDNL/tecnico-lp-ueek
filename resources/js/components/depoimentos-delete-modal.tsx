import { useState } from 'react';
import { router } from '@inertiajs/react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface DeleteDepoimentoModalProps {
    depoimentoId: number;
    className?: string;
    variant?: 'button' | 'menuItem';
}

export default function DeleteDepoimentoModal({ depoimentoId, className, variant = 'button' }: DeleteDepoimentoModalProps) {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = () => {
        setIsDeleting(true);
        router.delete(route('depoimentos.destroy', depoimentoId), {
            onSuccess: () => {
                toast.success('Depoimento excluído com sucesso!');
                setIsDeleting(false);
            },
            onError: () => {
                toast.error('Erro ao excluir depoimento. Tente novamente.');
                setIsDeleting(false);
            }
        });
    };

    const TriggerContent = () => (
        <div className="flex flex-row justify-center items-center lg:text-sm lg:gap-1">
            <Trash2 className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
            {variant === 'menuItem' ? 'Excluir' : 'Apagar'}
        </div>
    );

    return (
        <Dialog>
            <DialogTrigger asChild>
                {variant === 'menuItem' ? (
                    <button className={className}>
                        <p className='flex'><Trash2 className="h-4 w-4 mr-2" /> Excluir </p>
                    </button>
                ) : (
                    <button className={className}>
                        <TriggerContent />
                    </button>
                )}
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Tem certeza que deseja excluir este depoimento?</DialogTitle>
                <DialogDescription>
                    Esta ação não pode ser desfeita. O depoimento será permanentemente removido do sistema.
                </DialogDescription>
                <DialogFooter className="gap-2">
                    <DialogClose asChild>
                        <Button variant="secondary">
                            Cancelar
                        </Button>
                    </DialogClose>
                    <Button 
                        variant="destructive" 
                        onClick={handleDelete}
                        disabled={isDeleting}
                    >
                        {isDeleting ? 'Excluindo...' : 'Excluir'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}