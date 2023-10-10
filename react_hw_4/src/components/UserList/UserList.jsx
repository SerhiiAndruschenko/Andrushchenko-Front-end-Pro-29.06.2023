import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
      <h2>User list</h2>
      <div className='users'>
        {users.map(user => (
          <div className='card' key={user.id}>
            {user.name}
            <Link to={`/albums/${user.id}`}>Album</Link>
          </div>
        ))}
      </div>
    </>
  )

}

export default UserList;