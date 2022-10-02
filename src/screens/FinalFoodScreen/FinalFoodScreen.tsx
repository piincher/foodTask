import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { finalType } from "../../../App";

const FinalFood = ({ route }: finalType) => {
  const data = route.params.list;
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 32, color: "grey", textAlign: "center" }}>
        Final food list
      </Text>
      <View
        style={{
          borderWidth: 0.3,
          height: "90%",
          marginHorizontal: 20,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#D0D0D0",
        }}
      >
        <Text style={{ textAlign: "center" }}>{JSON.stringify(data)}</Text>
      </View>
    </SafeAreaView>
  );
};

export default FinalFood;
