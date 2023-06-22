import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations/contactsOperations';
import {
  getContacts,
  getFilter,
  getIsLoadingContacts,
} from 'redux/contacts/selectors/contactsSelectors';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import { Container, Grid, ListItem, Typography } from '@mui/material';
import { CustomButton } from 'components/Button/Button';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoadingContacts);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
    return toast.success('Contact deleted');
  };

  const getFilterSearchContact = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterSearchContact = getFilterSearchContact();

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <Grid
          container
          spacing={{ xs: 1, sm: 3, md: 8 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={8} md={12}>
            {filterSearchContact.map(contact => (
              <ListItem
                sx={{
                  justifyContent: 'space-between',
                  paddingLeft: '0',
                  paddingRight: '0',
                  overflow: 'hidden',
                }}
                key={contact.id}
              >
                <Typography
                  component="p"
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#040c0e',
                    textShadow:
                      ' 0 0 5px #ffffff, 0 0 15px #ffffff, 0 0 5px #ffffff, 0 0 10px #a37c27, 0 0 20px #a37c27, 0 0 25px #a37c27, 0 0 25px #a37c27, 0 0 50px #a37c27;',
                  }}
                >
                  {contact.name}:
                </Typography>

                <a href={'tel:number'}>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#040c0e',
                      textShadow:
                        ' 0 0 5px #ffffff, 0 0 15px #ffffff, 0 0 5px #ffffff, 0 0 10px #a37c27, 0 0 20px #a37c27, 0 0 25px #a37c27, 0 0 25px #a37c27, 0 0 50px #a37c27;',
                    }}
                  >
                    {contact.number}
                  </Typography>
                </a>
                <CustomButton
                  type="button"
                  style={{
                    width: '40px',
                    paddingLeft: '0',
                    paddingRight: '0',
                  }}
                  onClick={() => onDeleteContact(contact.id)}
                >
                  Delete
                </CustomButton>
              </ListItem>
            ))}
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
