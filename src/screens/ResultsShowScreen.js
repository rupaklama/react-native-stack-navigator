import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

import yelp from '../api/yelp';

export const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);

  // to get that addition object prop from ResultsList
  const id = navigation.getParam('id');

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  // To avoid other errors
  // if there's no result, return null
  // don't show anyting until we got result
  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image:{
    height: 200,
    width: 300
  }
});
