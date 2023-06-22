import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from '../../redux/contacts/actions/contactsActions';
import { getFilter } from '../../redux/contacts/selectors/contactsSelectors';

import { Box, Container } from '@mui/material';
import { CustomTypography } from 'components/CustomTypography/CustomTypography';
import { CustomTextField } from 'components/CustomTextField/CustomTextField';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    const { value } = e.target;
    dispatch(addFilter(value));
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: '30px',
        }}
      >
        <CustomTypography variant="h2" component="p">
          Find contacts by name
        </CustomTypography>

        <CustomTextField
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Search"
          label="Search"
          style={{
            marginBottom: '40px',
            marginTop: '40px',
            fontSize: '20px',
          }}
        />
      </Box>
    </Container>
  );
}
