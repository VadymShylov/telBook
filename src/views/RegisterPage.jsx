import Form from 'components/Form/Form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/authOperations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = data => dispatch(registerThunk(data));

  return (
    <>
      <Form
        title={'Registration'}
        titleSubmit={'Sign up'}
        register
        cbSubmit={handleFormSubmit}
      />
    </>
  );
};

export default RegisterPage;
