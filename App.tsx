import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const nomes = [
    'Ana Maria',
    'Bruno Alves',
    'Carlos José',
    'Daniel Martins',
    'Efraim Gomes',
    'Francisco Junior',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Nomes</Text>
      <FlatList
        data={nomes}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item}</Text>
          </View>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default App;
