import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    height: screenHeight * 0.82,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f4f4", // светло-серый фон
  },
  containerHomeWork: {
    width: screenWidth * 0.8,
    padding: 16,
    backgroundColor: "#2b456d", // синий цвет
    marginTop: screenHeight * 0.05,
    borderRadius: 20,
    alignItems: "center",
  },
  nameHomeWork: {
    color: "white",
    fontSize: screenWidth * 0.06,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  dateHomeWork: {
    color: "white",
    fontSize: screenWidth * 0.04,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  descriptionHomeWork: {
    color: "white",
    fontSize: screenWidth * 0.05,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  btnTaskDelete: {
    backgroundColor: "#3498db", // голубой цвет
    width: screenWidth * 0.6,
    height: screenHeight * 0.06,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  textTaskDelivery: {
    color: "white",
    fontSize: screenWidth * 0.035,
    fontWeight: "bold",
    textAlign: "center",
  },
  textDescription: {
    color: "white",
    fontSize: screenWidth * 0.05,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
});
