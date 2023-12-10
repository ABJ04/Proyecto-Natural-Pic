import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const PhotosContext = createContext();

const PhotosProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    try {
      const res = await axios.get("/photos.json");
      if (res.status !== 200) {
        throw new Error("Hay un error en la API");
      }

      const { photos: photosDB } = res.data;
      setPhotos(photosDB.map((photo) => ({ ...photo, isFavorite: false })));
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <PhotosContext.Provider value={{ photos, setPhotos }}>
      {children}
    </PhotosContext.Provider>
  );
};

export default PhotosProvider;
