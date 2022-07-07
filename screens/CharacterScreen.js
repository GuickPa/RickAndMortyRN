import { View, StyleSheet, Button, Text } from "react-native";

export default function CharacterScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>CharacterScreen</Text>
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
