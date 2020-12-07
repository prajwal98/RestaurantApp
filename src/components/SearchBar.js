import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function SearchBar({ term, onTermChange, onTermSubmit }) {
  return (
    <View style={styles.container}>
      <Feather name='search' style={styles.iconStyles} />
      <TextInput
        autoCapitalize='none'
        style={styles.inputStyles}
        placeholder='Search'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputStyles: {
    flex: 1,
    fontSize: 18,
  },
  iconStyles: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});
