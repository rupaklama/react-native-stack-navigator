import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { SearchBar } from '../components/SearchBar';
import { ResultsList } from '../components/ResultsList';
import useResults from '../hooks/useResults';

export const SearchScreen = () => {
  const [term, setTerm] = useState('');

  // from useResults hook
  const [searchApi, results, errorMessage] = useResults();

  // grouping results
  const filterResultsByPrice = price => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>We have found {results.length} results!</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title="Cost effective"
        />
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title="Big Spender"
        />
      </ScrollView>
    </View> // Scroll view is to scroll up/down to see any hidden content
  );
};

const styles = StyleSheet.create({});
