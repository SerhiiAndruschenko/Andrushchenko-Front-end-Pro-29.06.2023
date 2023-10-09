import React, {useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  let { albumId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => response.json())
      .then(data => setPhotos(data));
  }, [albumId]);

  return (
    <>
    <h2>Photos from Album #{albumId}</h2>
      <div className='photos'>
        {photos.map(photo => (
          <div key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </div>
        ))}
      </div>
    </>
  )

}

export default Photos;