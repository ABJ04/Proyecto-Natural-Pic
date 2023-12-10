import React, { useContext } from 'react';
import { FavoritosContext } from '../context/FavoritosContext';
import Badge from 'react-bootstrap/Badge';
import IconHeart from '../components/IconHeart';

const Favorites = () => {
  const { favoritos } = useContext(FavoritosContext);

  return (
<>
  <h2 className='titleFavorite'>Favorite</h2>
    <div className="gallery grid-columns-5 p-3"> 

      {favoritos.map((photo) => (
        <div 
        onClick={() => addFavorite(photo.id)}
        className="photo"
        style={{ backgroundImage: `url(${photo.src.medium})` }}
        key={photo.id}
        >
          <IconHeart filled={true} />
          
          <section>
            <p>{photo.alt}</p>
            <h6>
              <Badge bg="dark">{photo.photographer}</Badge>
            </h6>
          </section>
        </div>
      ))}
    </div>
</>
  );
};

export default Favorites;
