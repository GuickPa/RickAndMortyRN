import { StyleSheet, Text, View } from 'react-native';

function CharacterItem({ item }) {
  return (
    <View style={styles.container}>
      <Text>
        { item.name }
      </Text>
    </View>
  );
};

export default CharacterItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1252fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});