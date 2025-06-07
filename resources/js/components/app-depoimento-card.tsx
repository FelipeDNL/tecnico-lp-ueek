import React from 'react';

type DepoimentoCardProps = {
    usuario: string;
    mensagem: string;
};

const DepoimentoCard = ({ usuario, mensagem }: DepoimentoCardProps) => {
    return (
        <div className="bg-[#19140035] rounded-lg p-4 flex items-center gap-4">
            <div className="font-bold">{usuario}</div>
            <div className="text-sm">{mensagem}</div>
        </div>
    );
}

export default DepoimentoCard;