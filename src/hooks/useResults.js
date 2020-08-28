import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    try {
      const abortController = new AbortController();

      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'santa rosa',
        },
      }, { signal: abortController.signal });
      setResults(response.data.businesses);
    } catch (error) {
      // showing generic error message
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    
    searchApi('pasta');

    return () => {
      abortController.abort();
    }
  }, []);

  return [searchApi, results, errorMessage];
};
