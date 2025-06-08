import AppLayout from '@/layouts/app-layout';
import DepoimentoForm from '@/components/depoimento-form';
import { Head, router } from '@inertiajs/react';
import { BreadcrumbItem } from '@/types';
import toast from 'react-hot-toast';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Novo Depoimento',
        href: '#',
    }
];

interface FormData {
    usuario: string;
    mensagem: string;
    [key: string]: string;
}

export default function CreateDepoimento() {
    function handleSubmit(data: FormData, resetForm: () => void): void {
        router.post(route('depoimentos.store'), data, {
            onSuccess: () => {
                resetForm();
                toast.success('Depoimento criado com sucesso!');
                router.visit(route('dashboard'));
            },
            onError: (errors) => {
                toast.error('Erro ao criar depoimento. Verifique os dados e tente novamente.');
                console.log('Erro ao criar:', errors);
            }
        });
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Novo Depoimento" />
            <DepoimentoForm
                initialData={{
                    usuario: '',
                    mensagem: '',
                }}
                onSubmit={handleSubmit}
                onClose={() => router.visit(route('dashboard'))}
                processing={false}
                errors={{}}
            />
        </AppLayout>
    );
}