import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { SearchBar } from '../components/SearchBar';
import ResultsList from '../components/ResultsList';


import useResults from '../hooks/useResults';

// passing default navigation prop to a child component
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
    // adding flex 1 to parent view to solve styling issue like not able to scroll up or down
    // this will make it to only use the screen space available, don't try to expand in all the spaces
    // <View style={{ flex: 1 }}>
    // better approach for issue above by removing View with empty tags which
    // don't render any element on screen
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title="Cost effective"
          
        />
        <ResultsList
          results={filterResultsByPrice('$$')}
          title="Bit Pricier"
         
        />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title="Big Spender"
          
        />
      </ScrollView>
    </>
  ); // Scroll view is to scroll up or down to see any hidden content
};

const styles = StyleSheet.create({});
