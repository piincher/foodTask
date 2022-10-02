import { StyleSheet, Text, TextInput, View } from "react-native";

interface props {
  onChangeText: (arg: string) => void;
  value: string;
  label: string;
}
export const Input = ({ onChangeText, value, label }: props) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        style={styles.textStyle}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    borderColor: "grey",
    borderRadius: 6,
    height: 40,
    borderWidth: 1,
  },
  inputContainer: {
    flexDirection: "row",
  },
});
