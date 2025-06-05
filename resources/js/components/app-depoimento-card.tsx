import React from 'react';

type DepoimentoCardProps = {
    usuario: string;
    mensagem: string;
    foto: string | null;
};

const DepoimentoCard = ({ usuario, mensagem, foto }: DepoimentoCardProps) => {
    return (
        <div className="bg-[#19140035] rounded-lg p-4 flex items-center gap-4">
            {foto && (
                <img src={foto} alt={usuario} className="w-12 h-12 rounded-full object-cover" />
            )}
            <div>
                <div className="font-bold">{usuario}</div>
                <div className="text-sm">{mensagem}</div>
            </div>
        </div>
    );
}

export default DepoimentoCard;