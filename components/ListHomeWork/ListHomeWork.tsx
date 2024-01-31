import React from "react";
import { View, Text, FlatList, Pressable, Alert } from "react-native";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { styles } from "./ListHomeWorkStyle";
import {
  addHomeWorkStorage,
  deleteHomeWorkStorage,
} from "../../SavedHomeWork/SavedHomeWork";
import { resetHomeWork } from "../../redux/ListHomeWorkSlice";

// Интерфейс для объекта в массиве dataHomeWork
interface HomeWorkItem {
  namePair: string;
  dataDelivery: string;
  descriptionHomeWork: string;
  id: string;
}
const checkDeleteHomeWork = (id:any, dispatch:Function) => {
  // Вызываем Alert с вопросом об удалении
  Alert.alert(
    'Подтверждение удаления',
    'Вы уверены, что хотите удалить задание из списка?',
    [
      {
        text: 'Отмена',
        style: 'cancel',
      },
      {
        text: 'Удалить',
        onPress: () => deleteHomeWorkStorage(id, dispatch),
      },
    ],
    { cancelable: false }
  );
};

const ListHomeWork = () => {
  const dataHomeWork = useAppSelector(
    (state) => state.ListHomeWorkSlice.dataHomeWork
  );
  const dispatch = useAppDispatch();
  // Ключевая функция для извлечения ключей элементов списка
  const keyExtractor = (item: HomeWorkItem, index: number) => index.toString();
  const handlePress = () => {
    addHomeWorkStorage(
      {
        namePair: "qw",
        dataDelivery: "some data",
        descriptionHomeWork: "some description",
        id: null,
      },
      dispatch
    );
  };
  // Функция для рендеринга каждого элемента списка
  const renderItem = ({ item }: { item: HomeWorkItem }) => (
    <View style={styles.containerHomeWork}>
      <Text style={styles.nameHomeWork}>{item.namePair}</Text>
      <Text style={styles.dateHomeWork}>Дата сдачи: {item.dataDelivery}</Text>
      <Text style={styles.textDescription}>Описание задания:</Text>
      <Text style={styles.descriptionHomeWork}>{item.descriptionHomeWork}</Text>
      <Pressable
        onPress={() => checkDeleteHomeWork(item.id, dispatch)}
        style={styles.btnTaskDelete}
      >
        <Text style={styles.textTaskDelivery}>Удалить задание</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dataHomeWork}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ListHomeWork;
