import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

function CharacterItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.pressable}
        onPress={onPress}>
        <View style={styles.innerContainer}>
          <Image style={styles.picture} source={{uri: item.image}}></Image>
          <View style={styles.textContainer}>
            <Text style={styles.name}>
              { item.name }
            </Text>
            <Text style={styles.info}>
              { item.species } { item.gender } { item.status}
            </Text>
          </View>
      </View>
      </Pressable>
    </View>
  );
};

export default CharacterItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pressable: {
    flex: 1,
    width: '100%'
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'left',
    height: 80,
    padding: 8
  },
  textContainer: {
    flex: 1,
    marginLeft: 16
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  info: {
    fontSize: 16,
    fontWeight: 'normal'
  },
  picture: {
    width: 80,
    height: '100%'
  }
});