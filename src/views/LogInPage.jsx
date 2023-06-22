import Form from 'components/Form/Form';

import { useDispatch } from 'react-redux';
import { logInThunk } from 'redux/auth/authOperations';

const LogInPage = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = data => dispatch(logInThunk(data));

  return (
    <>
      <Form
        title={'Log in'}
        titleSubmit={'Log in'}
        cbSubmit={handleFormSubmit}
      />
    </>
  );
};

export default LogInPage;
