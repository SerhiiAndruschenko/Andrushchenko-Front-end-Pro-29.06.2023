import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Account = () => {
  const [user, setUser] = useState([]);
  let { userId } = useParams();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIdNumber = parseInt(userId);
    const currentUser = users.find(user => user.id === userIdNumber);
    setUser(currentUser);
    console.log(currentUser);
  }, [userId]);

  return(
    <>
      <h2>Hello, {user.name}</h2>
    </>
  )
}

export default Account;