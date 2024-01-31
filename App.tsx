import { StyleSheet, View } from "react-native";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import React, { useEffect } from "react";
import AddHomeWork from "./components/AddHomeWork/AddHomeWork";
import { RootStackParamList } from "./Navigate";
import { StackNavigationProp } from "@react-navigation/stack";
import Navigate from "./Navigate";
import { loadHomeWorkStorage } from "./SavedHomeWork/SavedHomeWork";
import { useAppDispatch } from "./hooks";
type GroupsProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};
const App = ({ navigation }: GroupsProps): JSX.Element => {
  
  return (
    <Provider store={store}>
      <Navigate navigation={navigation} />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b456d",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
