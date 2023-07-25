import { useEffect } from 'react';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { useContacts } from 'hooks/useContacts';

export const Loader = () => {
  const { isLoading } = useContacts();

  useEffect(() => {
    isLoading ? Loading.dots() : Loading.remove();
  });

  return null;
};
