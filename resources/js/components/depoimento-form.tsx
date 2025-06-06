import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function DepoimentoForm({ onClose }: { onClose: () => void }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        usuario: '',
        mensagem: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('depoimentos.store'), {
            onSuccess: () => {
                reset();
                onClose();
            },
        });
    };

    return (
        <form onSubmit={submit} className="space-y-4 p-4">
            <div>
                <Input
                    type="text"
                    placeholder="Seu nome"
                    value={data.usuario}
                    onChange={e => setData('usuario', e.target.value)}
                    disabled={processing}
                />
                {errors.usuario && <div className="text-red-500 text-xs">{errors.usuario}</div>}
            </div>
            <div>
                <Input
                    type="text"
                    placeholder="Mensagem"
                    value={data.mensagem}
                    onChange={e => setData('mensagem', e.target.value)}
                    disabled={processing}
                />
                {errors.mensagem && <div className="text-red-500 text-xs">{errors.mensagem}</div>}
            </div>
            <div className="flex gap-2">
                <Button type="submit" disabled={processing}>Salvar</Button>
                <Button type="button" variant="secondary" onClick={onClose}>Cancelar</Button>
            </div>
        </form>
    );
}