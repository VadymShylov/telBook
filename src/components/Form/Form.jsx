import { useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Container } from '@mui/material';
import LinkGoBack from 'components/LinkGoBack/LinkGoBack';
import { CustomButton } from 'components/Button/Button';
import { CustomTypography } from 'components/CustomTypography/CustomTypography';
import { CustomTextField } from 'components/CustomTextField/CustomTextField';

const Form = ({ title, titleSubmit, register = false, cbSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    register === true
      ? cbSubmit({ name, email, password })
      : cbSubmit({ email, password });

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CustomTypography
          variant="h2"
          style={{
            alignItems: 'center',
            fontSize: '30px',
            marginBottom: '30px',
          }}
        >
          {title}
        </CustomTypography>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {register && (
              <CustomTextField
                required
                label="Name"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            )}

            <CustomTextField
              required
              type="email"
              label="Email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleChange}
            />

            <CustomTextField
              required
              type="password"
              name="password"
              label="Password"
              value={password}
              placeholder="Password"
              onChange={handleChange}
            />
            <CustomButton type="submit" variant="contained">
              {titleSubmit}
            </CustomButton>
          </Box>
        </form>

        <LinkGoBack />
      </Box>
    </Container>
  );
};

Form.propTypes = {
  title: PropTypes.string,
  titleSubmit: PropTypes.string.isRequired,
  register: PropTypes.bool,
  cbSubmit: PropTypes.func.isRequired,
};

export default Form;
