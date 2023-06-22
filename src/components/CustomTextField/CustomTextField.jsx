import { TextField } from '@mui/material';

export const CustomTextField = ({
  children,
  required,
  label,
  type,
  name,
  value,
  onChange,
  style,
  placeholder,
}) => {
  return (
    <TextField
      required={required}
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      style={style}
      placeholder={placeholder}
      sx={{
        mb: '1.5rem',
        background: '#040c0e8a',
        color: '#daa83a',
        borderRadius: '10px',

        ':hover': {
          boxShadow:
            ' 0 0 2px #ffffff, 0 0 10px #ffffff, 0 0 2px #ffffff, 0 0 2px #a37c27, 0 0 2px #a37c27, 0 0 25px #a37c27, 0 0 25px #a37c27, 0 0 50px #a37c27;',
        },
      }}
    >
      {children}
    </TextField>
  );
};
