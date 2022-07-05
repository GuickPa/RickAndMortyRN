import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Button, View } from 'react-native';
import { useState } from 'react';
import { get } from './shared/http'
import HttpHandler from './shared/HttpHandler';
import CharacterItem from './components/CharacterItem';

export default function App() {
  const [characterList, setCharacterList] = useState([]);

  async function getData () {
    const response = await (new HttpHandler()).get('/character?page=1')
    if (response.data) {
      console.log(response.data.results.length)
      setCharacterList((list) => response.data.results)
    } else {
      console.log('No data!')
    }
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button style={styles.button} onPress={getData} title="LOAD"></Button>
      <FlatList style={styles.list}
        data={characterList}
        keyExtractor={(item) => item.id}
        renderItem={CharacterItem}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  list: {
    backgroundColor: 'transparent'
  },
  button: {
    margin: 20
  }
});
