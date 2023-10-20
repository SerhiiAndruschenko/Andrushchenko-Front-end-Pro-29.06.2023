import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';

const Album = () => {
  const [albums, setAlbums] = useState([]);
  let { userId } = useParams();
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(data => setAlbums(data));
  }, [userId]);

  return (
    <>
      <h2>Albums for User #{userId}</h2>
      <div className='albums'>
        {albums.map(album => (
          <div className='card' key={album.id}>
            {album.title}
            <Link to={`/albums/${userId}/photos/${album.id}`}>Photos</Link>
          </div>
        ))}
      </div>
    </>
  )

}

export default Album;