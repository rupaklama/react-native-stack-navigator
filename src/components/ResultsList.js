import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

// to add navigation prop directly from stack navigator
import { withNavigation } from 'react-navigation';

import { ResultsDetail } from './ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {

  if(!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return ( // passing additional object props to ResultsShowScreen
            <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultsList);