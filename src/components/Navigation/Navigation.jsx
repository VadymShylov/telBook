import { NavLink, useLocation } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { CustomButton } from 'components/Button/Button';
import { CustomTypography } from 'components/CustomTypography/CustomTypography';

const navItems = [
  { href: 'register', text: 'Registration' },
  { href: 'login', text: 'Sign in' },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <Container
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginRight: '-50%',
          transform: 'translate(-50% ,-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CustomTypography variant="h1">Phonebook</CustomTypography>
        {navItems.map(({ text, href }) => (
          <Typography
            variant="h6"
            component="p"
            key={href}
            style={{
              alignItems: 'center',
              marginTop: '30px',
            }}
          >
            <NavLink to={href} state={location}>
              <CustomButton variant="contained">{text}</CustomButton>
            </NavLink>
          </Typography>
        ))}

        <CustomTypography
          variant="h1"
          component="h2"
          style={{ fontStyle: 'oblique', fontSize: '35px', fontWeight: '500' }}
        >
          App number two. We try harder
        </CustomTypography>
      </Box>
    </Container>
  );
};

export default Navigation;
