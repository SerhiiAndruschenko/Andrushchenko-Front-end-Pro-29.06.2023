import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserActions } from '../../store/UserSlice';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(UserActions.getUser());
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(UserActions.logOut());
    navigate('/login');
  }

  return(
    <>
      <div class="user-inner">
        <h2>Hello, {user.name}</h2>
        <Button 
          variant="contained" 
          color="primary" 
          type="submit"
          size="large"
          onClick={handleClick}
        >
          Log out
        </Button>
      </div>
    </>
  )
}

export default Account;