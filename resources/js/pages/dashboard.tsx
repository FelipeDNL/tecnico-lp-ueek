import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import DepoimentosMain from '@/components/depoimentos-main';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Gestão de Depoimentos',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Gestão de Depoimentos" />
            <DepoimentosMain />
        </AppLayout>
    );
}
