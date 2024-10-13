"use client"

import { useSearchParams } from "next/navigation";
import { Menu } from "../../components/menu/Menu";

export default function Busca() {
    const searchParams = useSearchParams(); //Usamos esse hook para pegar a info enviada por outra pag

    const cep = searchParams.get('cep'); 
    
    return (
        <div>
            <Menu />
            <h1>Busca</h1>
            <p>pesquisa pelo CEP: {cep}</p>
        </div>
    )
}