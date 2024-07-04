import React, { useState } from 'react';
import '../App.css';

function BuscarCachorro() {
  const [dogImage, setDogImage] = useState(null);

  const fetchDogImage = async () => {
    try {
      const response = await fetch('https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1');
      const data = await response.json();
      if (data.length > 0) {
        setDogImage(data[0].url);
      }
    } catch (error) {
      console.error('Erro ao buscar imagem do cachorro:', error);
    }
  };

  return (
    <div className="content">
      <h1>Buscar Imagem de Cachorro</h1>
      <button className="search-button" onClick={fetchDogImage}>Buscar</button>
      {dogImage && <img src={dogImage} alt="Cachorro" style={{ marginTop: '20px', width: '300px', height: 'auto' }} />}
    </div>
  );
}

export default BuscarCachorro;
