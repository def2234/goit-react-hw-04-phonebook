import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Btn, Label, P, Input } from './FormContacts-styled';

export function FormContacts({ createContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dataContact = { name, number };

  const handleInputChange = ({ target }) => {
    console.log(target.name);
    if (target.name === 'name') {
      setName(target.value);
    } else {
      setNumber(target.value);
    }
  };

  const handleAddContact = e => {
    if (name === '') {
      return;
    }
    createContact(dataContact);
    setName('');
    setNumber('');
  };

  return (
    <Form>
      <Label>
        <P>Name</P>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
          value={name}
        />
      </Label>

      <Label>
        <P>Number</P>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
          value={number}
        />
      </Label>

      <Btn
        type="button"
        disabled={name === '' ? true : false}
        name="addContact"
        onClick={handleAddContact}
      >
        Add Contact
      </Btn>
    </Form>
  );
}

FormContacts.propTypes = {
  createContact: PropTypes.func.isRequired,
};

export default FormContacts;
