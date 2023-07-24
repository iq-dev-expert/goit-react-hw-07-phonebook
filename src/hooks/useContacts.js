import { useDispatch, useSelector } from 'react-redux';
import * as actions from 'redux/operations';
import {
  selectContacts,
  selectFilterValue,
  selectVisibleContacts,
} from 'redux/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterValue);
  const filteredContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const addContact = (name, phone) => {
    dispatch(actions.addContact(name, phone));
  };
  const deleteContact = contactId => dispatch(actions.deleteContact(contactId));

  return { contacts, filter, filteredContacts, addContact, deleteContact };
};
