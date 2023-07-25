import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from 'redux/operations';
import {
  selectContacts,
  selectError,
  selectFilterValue,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilterValue);
  const filteredContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const addContact = (name, phone) => {
    dispatch(actions.addContact(name, phone));
  };
  const deleteContact = contactId => dispatch(actions.deleteContact(contactId));

  const fetchContacts = useCallback(
    () => dispatch(actions.fetchContacts()),
    [dispatch]
  );

  return {
    contacts,
    isLoading,
    error,
    filter,
    filteredContacts,
    addContact,
    deleteContact,
    fetchContacts,
  };
};
