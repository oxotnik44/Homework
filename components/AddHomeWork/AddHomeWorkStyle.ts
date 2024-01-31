import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "#f4f4f4", // светло-серый фон
  },
  autocompleteContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 10,
    zIndex: 1,
    padding: 15,
  },
  inputNamePair: {
    height: 40,
    borderColor: "#2b456d", // синий цвет
    borderWidth: 1,
    paddingHorizontal: 10,
    color: "#2b456d", // синий цвет
  },
  namePair: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
    color: "#2b456d", // синий цвет
  },
  datePickerButton: {
    height: 40,
    borderColor: "#2b456d", // синий цвет
    padding:10,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 20,
    alignSelf: "center",
    backgroundColor: "#ffffff", // белый фон
  },
  inputDescriptionHomeWork: {
    height: 80,
    borderColor: "#2b456d", // синий цвет
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 20,
    color: "#2b456d", // синий цвет
  },
  btnAddHomeWork: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 20,
    alignSelf: "center",
    backgroundColor: "#2b456d", // синий цвет
    justifyContent: "center",
  },
  textAddHomeWork: {
    color: "white",
    fontSize: screenWidth * 0.035,
    fontWeight: "bold",
    textAlign: "center",
  },
});
