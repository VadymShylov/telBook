import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/auth/authOperations';
import { getUserName } from 'redux/auth/authSelectors';

import { Container, Typography } from '@mui/material';
import { CustomButton } from 'components/Button/Button';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  const handleLogOut = e => dispatch(logOutThunk());

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        mt: '10px',
      }}
    >
      <Typography
        variant="h5"
        component="p"
        sx={{
          borderRadius: '10px',
          textShadow:
            ' 0 0 5px #ffffff, 0 0 15px #ffffff, 0 0 5px #ffffff, 0 0 10px #a37c27, 0 0 20px #a37c27, 0 0 25px #a37c27, 0 0 25px #a37c27, 0 0 50px #a37c27;',
        }}
      >
        Hello: {userName}
      </Typography>
      <CustomButton
        variant="contained"
        type="button"
        onClick={handleLogOut}
        style={{
          borderRadius: '10px',
          width: '100px',
        }}
      >
        Log out
      </CustomButton>
    </Container>
  );
};

export default UserMenu;
