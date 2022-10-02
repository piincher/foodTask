import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import FinalFood from "./src/screens/FinalFoodScreen/FinalFoodScreen";
import Home from "./src/screens/HomeScreen/HomeScreen";

import { foodType } from "./src/screens/HomeScreen/helper/data";

type RootStackParamList = { home: undefined; final: { list: foodType[] } };

const Stack = createNativeStackNavigator<RootStackParamList>();

export type homeType = NativeStackScreenProps<RootStackParamList, "home">;
export type finalType = NativeStackScreenProps<RootStackParamList, "final">;
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='home'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen component={Home} name='home' />
        <Stack.Screen component={FinalFood} name='final' />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
