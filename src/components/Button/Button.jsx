import { Button } from '@mui/material';

export const CustomButton = ({
  children,
  type,
  variant,
  state,
  href,
  style,
  startIcon,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      state={state}
      href={href}
      style={style}
      startIcon={startIcon}
      onClick={onClick}
    
      sx={{
        background:
          'linear-gradient(158deg, rgba(111,177,178,1) 0%, rgba(65,90,98,1) 53%, rgba(145,132,144,1) 100%)',
        width: '200px',
        color: '#040c0e',
        mb: '20px',
        textShadow:
          ' 0 0 5px #ffffff, 0 0 15px #ffffff, 0 0 5px #ffffff, 0 0 10px #a37c27, 0 0 20px #a37c27, 0 0 25px #a37c27, 0 0 25px #a37c27, 0 0 50px #a37c27;',
        ':hover': {
          color: '#ffffff',
          border: '1px solid rgba(111,177,178,1)',

          transform: 'scale(1.14)',
          boxShadow: '5px 5px 50px 3px #d9ceb7 ',
        },
      }}
    >
      {children}
    </Button>
  );
};
