import React from "react";

const AppCard = ({ imagem, titulo, descricao, imagemAlt, imagemAriaLabel }) => {
    return (
        <div className="flex flex-col items-start gap-4 p-5 border border-[#3E3E3A] rounded-2xl max-w-md bg-[#121820]">
            {imagem && <img src={imagem} alt={imagemAlt} aria-label={imagemAriaLabel} className="h-10 w-10 xl:h-12 xl:w-12" />}
            <h2 className="font-bold text-md lg:text-lg xl:text-2xl">{titulo}</h2>
            <p className="app-card-description text-sm">{descricao}</p>
        </div>
    );
};

export default AppCard;
