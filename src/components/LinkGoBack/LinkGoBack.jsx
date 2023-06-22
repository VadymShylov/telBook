import { Link, useLocation } from 'react-router-dom';
import { CustomButton } from 'components/Button/Button';

const LinkGoBack = () => {
  const location = useLocation();

  return (
    <Link to={location.state ?? '/'}>
      <CustomButton type="button" variant="contained">
        Go back
      </CustomButton>
    </Link>
  );
};

export default LinkGoBack;
