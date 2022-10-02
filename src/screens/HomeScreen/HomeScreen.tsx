//built in
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

//third party
import { SafeAreaView } from "react-native-safe-area-context";
import uuid from "react-native-uuid";

//component
import { FoodFormInput } from "../../components/FoodFormInput/FoodFormInput.component";
import { ModalPoup } from "../../components/ModalPopup/ModalPopup.component";

//dummy data and type
import { homeType } from "../../../App";
import { data, foodType } from "./helper/data";

const dimension = Dimensions.get("screen").height;

const Home = ({ navigation }: homeType) => {
  const [list, setList] = useState<foodType[]>(data);
  const [text, setText] = useState("");
  const [price, setPrice] = useState("");
  const [visible, setVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [foodData, setFoodData] = useState<foodType>();
  const id = uuid.v4() as string;

  const addHandleChange = () => {
    const newList = list.concat({ name: text, price, id });
    setList(newList);
    setText("");
    setPrice("");
  };

  const onEditHandler = (data: foodType) => {
    setVisible(true);
    setIsEdit(true);
    setFoodData(data);
    setText(data.name);
    setPrice(data.price);
  };

  const editChange = () => {
    const newList = list.map((item) => {
      if (item.id === foodData?.id) {
        const updatedItem = {
          ...item,
          name: text,
          price,
        };

        return updatedItem;
      }

      return item;
    });

    setList(newList);
    setText("");
    setPrice("");
    setIsEdit(false);
    setVisible(false);
  };

  const deleteHandler = (id: string) => {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  };
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 32, marginTop: 10 }}>
          Food List
        </Text>
        {list.map((el) => {
          return (
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                justifyContent: "space-between",
                borderColor: "gray",
                borderWidth: 0.5,
                padding: 2,
                marginHorizontal: 19,
                alignItems: "center",
              }}
              key={el.id}
            >
              <Text style={{ fontWeight: "bold" }}>{el.name}</Text>
              <Text style={{ color: "gray" }}>Price :₹{el.price}</Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignContent: "space-between",
                  margin: 4,
                  height: "100%",
                  borderColor: "gray",
                  padding: 3,
                  borderLeftWidth: 0.9,
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => onEditHandler(el)}
                  style={{ marginRight: 3 }}
                >
                  <FontAwesome5 name='edit' size={24} color='black' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteHandler(el.id)}>
                  <FontAwesome5 name='trash-alt' size={24} color='black' />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}

        <View
          style={{
            marginTop: 19,
            borderWidth: 1,
            borderStyle: "dotted",
            borderColor: "grey",
            borderTopColor: "white",
            borderRadius: 1,
          }}
        ></View>

        <TouchableOpacity
          onPress={() => setVisible(true)}
          style={{
            borderColor: "green",
            borderWidth: 1,
            padding: 6,
            borderRadius: 9,
            backgroundColor: "#99cc00",
            marginHorizontal: 32,
            marginTop: 32,
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            Open modal
          </Text>
        </TouchableOpacity>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("final", { list })}
            style={{
              borderColor: "green",
              borderWidth: 1,
              top: dimension / 2,
              marginHorizontal: 32,
              padding: 6,
              borderRadius: 9,
              backgroundColor: "green",
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              Final food list
            </Text>
          </TouchableOpacity>
        </View>
        <ModalPoup visible={visible}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.header}>
              <TouchableOpacity>
                <Text>Add food</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setVisible(false);
                  setText("");
                  setPrice("");
                }}
              >
                <Text>hi</Text>
              </TouchableOpacity>
            </View>
          </View>

          <FoodFormInput
            text={text}
            setText={setText}
            price={price}
            setPrice={setPrice}
            isEdit={isEdit}
            addHandleChange={isEdit ? editChange : addHandleChange}
          />
        </ModalPoup>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",

    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
export default Home;
