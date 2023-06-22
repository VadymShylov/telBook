import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations/contactsOperations';
import { getContacts } from 'redux/contacts/selectors/contactsSelectors';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Container } from '@mui/material';
import { CustomButton } from 'components/Button/Button';
import { CustomTypography } from 'components/CustomTypography/CustomTypography';
import { CustomTextField } from 'components/CustomTextField/CustomTextField';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleAddContact = e => {
    e.preventDefault();

    const data = { name: name, number: number };

    if (checkTwinName(data)) {
      return toast.error(`Name: ${name} is already in contacts.`);
    }

    if (checkTwinNumber(data)) {
      return toast.error(`Number: ${number} is already in contacts.`);
    }
    resetState();
    const addedContact = dispatch(addContact(data));
    if (addedContact) {
      return toast.success(`Contact added`);
    }
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  const checkTwinName = data => {
    return contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
  };

  const checkTwinNumber = data => {
    return contacts.find(contact => contact.number === data.number);
  };

  return (
    <Container>
      <CustomTypography variant="h2">Add new contacts below</CustomTypography>
      <form onSubmit={handleAddContact}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: '30px',
          }}
        >
          <CustomTextField
            style={{
              marginTop: '2.5rem',
              fontSize: '20px',
            }}
            type="text"
            name="name"
            label="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
            placeholder="Enter name"
          />
          <CustomTextField
            style={{
              fontSize: '20px',

              marginBottom: '20px',
            }}
            type="tel"
            name="number"
            label="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
          <CustomButton
            variant="contained"
            type="submit"
            style={{
              fontSize: '20px',
              borderRadius: '10px',
              minWidth: '170px',
              height: '50px',
              margin: '0 auto',
            }}
          >
            Add contact
          </CustomButton>
        </Box>
      </form>
      <CustomTypography variant="h2">Contacts</CustomTypography>
      <ToastContainer position="top-right" autoClose={5000}></ToastContainer>
    </Container>
  );
}
