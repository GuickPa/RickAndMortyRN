import { View, StyleSheet, Button } from "react-native";
import { useState } from 'react';
import CharacterList from "../components/CharacterList";
import CharacterItem from '../components/CharacterItem';
import HttpHandler from '../shared/HttpHandler';

export default function MainScreen ({ navigation }) {
  const [characterList, setCharacterList] = useState([]);

  async function getData () {
    const response = await (new HttpHandler()).get('/character?page=1')
    if (response.data) {
      setCharacterList((list) => response.data.results)
    } else {
      console.log('No data!')
    }
  }

  function renderCharacterItem({ item }) {
    function pressHandler() {
      navigation.navigate('CharacterScreen')
    }
    
    return (
      <CharacterItem item={item} onPress={pressHandler} />
    )
  }

  return (
    <View style={styles.container}>
      <Button style={styles.button} onPress={getData} title="LOAD"></Button>
      <CharacterList list={characterList} renderItem={renderCharacterItem}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  button: {
    margin: 20
  }
});
