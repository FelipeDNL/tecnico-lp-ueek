import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@headlessui/react';

type DepoimentoFormProps = {
    initialData?: {
        usuario: string;
        mensagem: string;
    };
    onSubmit: (data: { usuario: string; mensagem: string }, reset: () => void) => void;
    onClose: () => void;
    processing?: boolean;
    errors?: Record<string, string>;
};

export default function DepoimentoForm({
    initialData = { usuario: '', mensagem: '' },
    onSubmit,
    onClose,
    processing = false,
    errors = {},
}: DepoimentoFormProps) {
    const { data, setData, reset } = useForm(initialData);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        onSubmit(data, () => reset());
        
    };

    return (
        <form onSubmit={submit} className="space-y-4 p-4 flex flex-col px-5 md:px-20 max-w-4xl">
            <h2 className="text-lg font-semibold">{initialData.usuario ? 'Editar Depoimento' : 'Novo Depoimento'}</h2>
            <p>Preencha os campos abaixo para {initialData.usuario ? 'editar' : 'enviar um novo'} depoimento.</p>
            <div>
                <Input
                    type="text"
                    placeholder="Nome"
                    value={data.usuario}
                    onChange={e => setData('usuario', e.target.value)}
                    disabled={processing}
                />
                {errors.usuario && <div className="text-red-500 text-xs">{errors.usuario}</div>}
            </div>
            <div>
                <Textarea
                    placeholder="Depoimento"
                    rows={4}
                    cols={50}
                    value={data.mensagem}
                    onChange={e => setData('mensagem', e.target.value)}
                    disabled={processing}
                    className={"w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-[color,box-shadow] "}
                />
                {errors.mensagem && <div className="text-red-500 text-xs">{errors.mensagem}</div>}
            </div>
            <div className="flex gap-2 transition-[color,box-shadow] ">
                <Button type="submit" disabled={processing}>Salvar</Button>
                <Button type="button" variant="secondary" onClick={onClose}>Cancelar</Button>
            </div>
        </form>
    );
}