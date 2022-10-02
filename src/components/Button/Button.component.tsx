import { Button } from "react-native";

interface props {
  onSubmit: () => void;
  title: string;
}
export const CustomButton = ({ onSubmit, title }: props) => {
  return <Button title={title} onPress={() => onSubmit()} />;
};
