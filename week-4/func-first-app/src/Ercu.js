import { useEffect, useState } from 'react';
import Card from './components/Card';

import './App.css';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const Ercu = () => {
  const [fetchApi, setFetchApi] = useState(initialState);

  useEffect(() => {
    let mounted = false;

    const getData = async () => {
      try {
        const response = await fetch(
          'https://614f3e1cb4f6d30017b48511.mockapi.io/api/youtube'
        );

        const data = await response.json();

        setFetchApi((prev) => ({ ...prev, data }));
      } catch (error) {
        setFetchApi((prev) => ({ ...prev, error }));
      } finally {
        setFetchApi((prev) => ({ ...prev, error: false, loading: false }));
      }
    };

    getData();

    return () => {
      mounted = true;
    };
  }, []);

  if (fetchApi.error) return <div>Error</div>;
  if (fetchApi.loading) return <div>Loading</div>;

  const renderCards = (cards) => cards.map((card) => <Card card={card} />);

  return (
    <div className='container py-5'>
      <div className='row'>{renderCards(fetchApi.data)}</div>
    </div>
  );
};

export default Ercu;
