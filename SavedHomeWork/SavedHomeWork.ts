import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  addHomeWork,
  resetHomeWork,
  setHomeWork,
} from "../redux/ListHomeWorkSlice";
import { useAppDispatch } from "../hooks";
import uuid from "react-native-uuid";
import { Alert } from "react-native";
interface IHomeWork {
  namePair: string;
  dataDelivery: string;
  descriptionHomeWork: string;
  id: any; // Добавляем поле id
}
// сохранение домашки

export const addHomeWorkStorage = async (
  newHomeWork: IHomeWork,
  dispatch: Function
) => {
  try {
    const jsonValue = await AsyncStorage.getItem("savedHomeWork");
    const currentHomeWork: IHomeWork[] = jsonValue ? JSON.parse(jsonValue) : [];
    const id = uuid.v4();
    currentHomeWork.push({ ...newHomeWork, id });
    console.log(123);
    await AsyncStorage.setItem(
      "savedHomeWork",
      JSON.stringify(currentHomeWork)
    );
    dispatch(addHomeWork(newHomeWork));
    Alert.alert("Домашнее задание добавленно!");
  } catch (error) {
    console.error("Error adding and saving data to AsyncStorage:", error);
  }
};

export const loadHomeWorkStorage = async (dispatch: Function) => {
  try {
    const jsonValue = await AsyncStorage.getItem("savedHomeWork");
    if (jsonValue) {
      const parsedValue = JSON.parse(jsonValue);
      dispatch(setHomeWork(parsedValue));
    }
  } catch (error) {
    console.error("Error loading data from AsyncStorage:", error);
  }
};

export const deleteHomeWorkStorage = async (
  idToDelete: string,
  dispatch: Function
) => {
  try {
    const jsonValue = await AsyncStorage.getItem("savedHomeWork");
    if (jsonValue) {
      const currentHomeWork: IHomeWork[] = JSON.parse(jsonValue);

      // Фильтруем элементы, оставляя только те, у которых id не совпадает с idToDelete
      const updatedHomeWork = currentHomeWork.filter(
        (item) => item.id !== idToDelete
      );

      dispatch(resetHomeWork(idToDelete));
      // Обновляем хранилище и Redux-состояние
      await AsyncStorage.setItem(
        "savedHomeWork",
        JSON.stringify(updatedHomeWork)
      );
    }
  } catch (error) {
    console.error("Error deleting data from AsyncStorage:", error);
  }
};
