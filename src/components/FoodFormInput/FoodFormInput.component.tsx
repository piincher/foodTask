import { useState } from "react";
import { Button } from "react-native";
import { CustomButton } from "../Button/Button.component";
import { Input } from "../Input/Input.component";

export const FoodFormInput = ({
  addHandleChange,
  text,
  setText,
  setPrice,
  price,
  isEdit,
}: any) => {
  return (
    <>
      <Input label='name' onChangeText={(text) => setText(text)} value={text} />
      <Input
        label='price'
        onChangeText={(text) => setPrice(text)}
        value={price}
      />
      {isEdit ? (
        <CustomButton onSubmit={addHandleChange} title='update' />
      ) : (
        <CustomButton onSubmit={addHandleChange} title='Add' />
      )}
    </>
  );
};
