//Aqui é um server component que recebe parâmetro

import { Menu } from "../../../components/menu/Menu";

export default async function BuscaCepParams({ params: { cep } }) {
    
        const response = await fetch(`https://viacep.com.br/ws//${cep}/json/`);
        const data = await response.json();

    return (
        <div>
            <Menu />
            <h1>Busca com parâmetros</h1>
            <p>Resultado da busca pelo CEP: {cep} </p>
            <p>Logradouro: {data.logradouro}</p>
            <p>Bairro: {data.bairro}</p>
            <p>Localidade: {data.localidade}</p>
            <p>Estado: {data.estado}</p>
        </div>
    )
}