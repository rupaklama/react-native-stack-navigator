import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
export const ResultsDetail = ({ result }) => {
  return (
    // uri - url
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  );
};

// by default, image wants to close itself, add height prop
const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    borderRadius: 5,
    height: 120,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold',
    // default font-size in react native is 14
  
  }
});
