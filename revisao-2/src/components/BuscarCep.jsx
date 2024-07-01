import { useState } from "react"

export default function BuscarCep(){
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState(null)
    
    const fetchEndereco = async () => {
        try{
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const data = await response.json()
            setEndereco(data)
        } catch (error){
            console.log(error)
        }
    }

    return(
        <div className="content">
            <h1>Buscar endereço por CEP</h1>
            <input
                type="text"
                value={cep}
                placeholder="Digite aqui"
                onChange={(e) => setCep(e.target.value)}
            ></input>

            <button onClick={fetchEndereco}>Buscar</button>

            {endereco && (
                <div className="endereco">
                <p>Rua: {endereco.logradouro}</p>
                <p>Cidade: {endereco.localidade}</p>
                <p>Bairro: {endereco.bairro}</p>
                <p>UF: {endereco.uf}</p>
                </div>
            )}
        </div>
    )
}