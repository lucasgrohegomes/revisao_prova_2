import React, { useState } from 'react';
import '../App.css';

export default function BuscarCep() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);

  const handleInputChange = (e) => {
    setCep(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      setAddress(data);
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    }
  };

  return (
    <div className="content">
      <h1>Buscar CEP</h1>
      <input
        type="text"
        value={cep}
        onChange={handleInputChange}
        placeholder="Digite o CEP"
      />
      <button className="search-button" onClick={handleSearch}>Buscar</button>
      {address && (
        <div className="endereco">
          <h2>Endereço:</h2>
          <p>{address.logradouro}, {address.bairro}, {address.localidade} - {address.uf}</p>
        </div>
      )}
    </div>
  );
}
