import React, { useContext } from "react";
import { PhotosContext } from "../context/photosContext";
import IconHeart from "./IconHeart";
import Badge from "react-bootstrap/Badge";
import { FavoritosContext } from "../context/FavoritosContext"; 

const Gallery = () => {
  const { photos, setPhotos } = useContext(PhotosContext);
  const { agregarFavorito, quitarFavorito } = useContext(FavoritosContext); 

  const addFavorite = (id) => {
    const newPhotos = photos.map((photo) => {
      if (photo.id === id) {
        const updatedPhoto = {
          ...photo,
          isFavorite: !photo.isFavorite,
        };

        if (updatedPhoto.isFavorite) {
          agregarFavorito(updatedPhoto);
        } else {
          quitarFavorito(id);
        }

        return updatedPhoto;
      }
      return photo;
    });

    setPhotos(newPhotos);
  };

  return (
    <>
      <div className="gallery grid-columns-5 p-3">
        {photos.map((photo) => (
          <div
            onClick={() => addFavorite(photo.id)}
            className="photo"
            style={{ backgroundImage: `url(${photo.src.medium})` }}
            key={photo.id}
          >
            <IconHeart filled={photo.isFavorite} />

            <section>
              <p> {photo.alt}</p>
              <h6>
                <Badge bg="darck">{photo.photographer}</Badge>
              </h6>
            </section>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;

