import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

export default function SearchScreen() {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const fetchResultsOnPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          results={fetchResultsOnPrice('$')}
          title='Cost Effective'
        />
        <ResultsList results={fetchResultsOnPrice('$$')} title='Bit Pricer' />
        <ResultsList results={fetchResultsOnPrice('$')} title='Big Spender' />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});
