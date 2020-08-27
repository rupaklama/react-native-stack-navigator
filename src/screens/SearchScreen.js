import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { SearchBar } from '../components/SearchBar';

import yelp from '../api/yelp';
export const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  // error handling

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: term,
          location: 'santa rosa',
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      <Text>We have found {results.length} results!</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
