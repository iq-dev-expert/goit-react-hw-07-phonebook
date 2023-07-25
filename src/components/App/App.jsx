import { ThemeProvider } from '@emotion/react';
import { useEffect } from 'react';
import { useContacts } from 'hooks/useContacts';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Container } from 'components/App/App.styled';
import { theme } from 'utils-style/Theme';

export const App = () => {
  const { fetchContacts } = useContacts();

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <ThemeProvider theme={theme}>
      <Loader />
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    </ThemeProvider>
  );
};
