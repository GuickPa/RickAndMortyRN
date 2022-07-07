import { FlatList, StyleSheet } from 'react-native';

function CharacterList({ list: characterList, renderItem }) {
  return (
    <FlatList style={styles.list}
        data={characterList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}>
    </FlatList>
  );
};

export default CharacterList;

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'transparent',
    flex: 1,
    width: '100%'
  }
});