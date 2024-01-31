import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import Autocomplete from "react-native-autocomplete-input";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { styles } from "./AddHomeWorkStyle";
import { addHomeWorkStorage } from "../../SavedHomeWork/SavedHomeWork";
import { useAppDispatch } from "../../hooks";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

const AddHomeWork = () => {
  const dispatch = useAppDispatch();
  const availableHomeWorkOptions = [
    "Инструментальные средства (Борисов)",
    "Технология разработки (Чекушкина)",
    "Внедрение и поддержка",
    "Обеспечение качества функционирования",
    "Иностранный язык",
    "Менеджмент",
  ];

  const [selectedHomeWork, setSelectedHomeWork] = useState<string>("");
  const [filteredHomeWork, setFilteredHomeWork] = useState<string[]>([]);
  const [descriptionHomeWork, setDescriptionHomeWork] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isDatePickerVisible, setDatePickerVisible] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [formattedDate, setFormattedDate] = useState<string>("");
  const handleInputChange = (text: string) => {
    const filteredTasks = availableHomeWorkOptions.filter((option) =>
      option.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredHomeWork(filteredTasks);
    setSearchText(text);
  };

  const handleConfirm = (date: Date) => {
    setDatePickerVisible(false);
    setSelectedDate(date);
    setFormattedDate(format(date, "d MMMM", { locale: ru }));
  };

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const formatDate = (date: Date) => {
    return format(date, "d MMMM", { locale: ru });
  };

  const selectHomeWork = (item: string) => {
    setSelectedHomeWork(item);
    setSearchText(item); // Обновление текста поиска
    hideOptionsAndKeyboard();
  };

  const hideOptionsAndKeyboard = () => {
    setIsFocused(false);
    setFilteredHomeWork([]);
    Keyboard.dismiss();
  };

  const addHomeWork = () => {
    if (selectedHomeWork === "") {
      Alert.alert("Внимание", "Выберите предмет");
    } else if (formattedDate === "") {
      Alert.alert("Внимание", "Выберите дату");
    } else if (descriptionHomeWork === "") {
      Alert.alert("Внимание", "Введите описание домашнего задания");
    } else {
      const newHomeWork = {
        namePair: selectedHomeWork,
        dataDelivery: formattedDate,
        descriptionHomeWork: descriptionHomeWork,
        id: null,
      };
      addHomeWorkStorage(newHomeWork, dispatch);
      setSelectedHomeWork("");
      setFormattedDate("");
      setDescriptionHomeWork("");
      setSelectedDate(null); // Добавляем сброс выбранной даты
      setSearchText("")
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.autocompleteContainer}>
        <Autocomplete
          data={filteredHomeWork}
          value={searchText}
          onChangeText={handleInputChange}
          onFocus={() => {
            setIsFocused(true);
            setFilteredHomeWork(availableHomeWorkOptions);
          }}
          onBlur={() => setIsFocused(false)}
          flatListProps={{
            renderItem: ({ item }) => (
              <TouchableOpacity onPress={() => selectHomeWork(item)}>
                <Text style={styles.namePair}>{item}</Text>
              </TouchableOpacity>
            ),
          }}
          style={styles.inputNamePair}
          placeholder="Выберите предмет"
        />
      </View>

      <TouchableOpacity onPress={showDatePicker}>
        <Text style={styles.datePickerButton}>
          {selectedDate ? formatDate(selectedDate) : "Выберите дату сдачи дз:"}
        </Text>
      </TouchableOpacity>

      {/* Компонент выбора даты */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        locale="ru-RU"
        minimumDate={new Date()}
      />
      <TextInput
        value={descriptionHomeWork}
        onChangeText={(text) => setDescriptionHomeWork(text)}
        placeholder="Опишите задание:"
        style={styles.inputDescriptionHomeWork}
      />
      <Pressable style={styles.btnAddHomeWork} onPress={addHomeWork}>
        <Text style={styles.textAddHomeWork}>Добавить задание</Text>
      </Pressable>
      {isFocused && (
        <TouchableOpacity
          style={{ flex: 1 }}
          activeOpacity={1}
          onPress={hideOptionsAndKeyboard}
        />
      )}
    </View>
  );
};

export default AddHomeWork;
