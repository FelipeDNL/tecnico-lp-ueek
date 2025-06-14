import AppLayout from '@/layouts/app-layout';
import DepoimentoForm from '@/components/depoimento-form';
import { Head, router, usePage } from '@inertiajs/react';
import { BreadcrumbItem } from '@/types';
import toast from 'react-hot-toast';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Editar Depoimento',
        href: '#',
    }
];

interface Depoimento {
    id: number;
    usuario: string;
    mensagem: string;
    created_at: string;
    updated_at: string;
}

interface FormData {
    usuario: string;
    mensagem: string;
    [key: string]: string;
}

export default function EditDepoimento() {
    const { depoimentos } = usePage<{ depoimentos: Depoimento }>().props;
    
    function handleSubmit(data: FormData, resetForm: () => void): void {
        router.put(route('depoimentos.update', depoimentos.id), data, {
            onSuccess: () => {
                resetForm();
                toast.success('Depoimento atualizado com sucesso!');
                router.visit(route('dashboard'));
            },
            onError: (errors) => {
                toast.error('Erro ao atualizar depoimento. Verifique os dados e tente novamente.');
                console.log('Erro ao atualizar:', errors);
            }
        });
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Editar Depoimento" />
            <DepoimentoForm
                initialData={{
                    usuario: depoimentos.usuario,
                    mensagem: depoimentos.mensagem,
                }}
                onSubmit={handleSubmit}
                onClose={() => router.visit(route('dashboard'))}
                processing={false}
                errors={{}}
            />
        </AppLayout>
    );
}