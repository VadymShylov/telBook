import { Typography } from '@mui/material';

export const CustomTypography = ({ children, variant, component, style }) => {
  return (
    <Typography
      variant={variant}
      component={component}
      style={style}
      sx={{
        textAlign: 'center',
        fontSize: '50px',
        margin: '50px 0px 30px',

        textShadow:
          ' 0 0 5px #ffffff, 0 0 15px #ffffff, 0 0 5px #ffffff, 0 0 10px #a37c27, 0 0 20px #a37c27, 0 0 25px #a37c27, 0 0 25px #a37c27, 0 0 50px #a37c27;',
      }}
    >
      {children}
    </Typography>
  );
};
