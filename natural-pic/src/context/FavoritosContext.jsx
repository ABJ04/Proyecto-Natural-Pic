import React, { createContext, useState } from 'react';

export const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const agregarFavorito = (photo) => {
    setFavoritos((prevFavoritos) => [...prevFavoritos, photo]);
  };

  const quitarFavorito = (id) => {
    setFavoritos((prevFavoritos) => prevFavoritos.filter((photo) => photo.id !== id));
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, agregarFavorito, quitarFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};
