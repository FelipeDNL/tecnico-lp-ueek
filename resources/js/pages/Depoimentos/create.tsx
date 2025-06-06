import AppLayout from '@/layouts/app-layout';
import DepoimentoForm from '@/components/depoimento-form';
import { Head } from '@inertiajs/react';

export default function CreateDepoimento() {
    return (
        <AppLayout>
            <Head title="Novo Depoimento" />
            <DepoimentoForm onClose={() => window.history.back()} />
        </AppLayout>
    );
}