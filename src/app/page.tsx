"use client" // Client component -> Quando tem interação como o usuário (ex: form).

import { Menu } from "../components/menu/Menu"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Home() {
  const router = useRouter(); //Usamos isso para mandar informação para outra pág

  const [cep, setCep] = useState<string>('')

  const handleChange = (event: any) => {
    setCep(event?.target.value)
  }

  const handleClick = () => {
    //Query Params
    router.push(`/busca?cep=${cep}`) //Aqui dissemos qual parâmetro será enviada e para onde
  }

  const handleClickParams = () => { //Fizemos só pra usar os dois params
    //Path Params
    router.push(`/busca-cep/${cep}`)
  }

  return (
    <main>
      <Menu />
      <form>
        <label htmlFor="cep">CEP</label>
        <input
          type="text"
          name="cep"
          id="cep"
          placeholder="Digite seu cep"
          onChange={handleChange}
        />
        <button type="button" onClick={handleClick}>Pesquisar</button>
        <hr />

        <button
          type="button"
          onClick={handleClickParams}
        >
          Pesquisar
        </button> {/*Fizemos só pra usar os dois params*/}

      </form>
    </main>
  )
}

