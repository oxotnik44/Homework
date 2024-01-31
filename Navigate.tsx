import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Image, Dimensions, View } from "react-native";
import ListHomeWork from "./components/ListHomeWork/ListHomeWork";
import AddHomeWork from "./components/AddHomeWork/AddHomeWork";
import { useAppDispatch } from "./hooks";
import { useEffect } from "react";
import { loadHomeWorkStorage } from "./SavedHomeWork/SavedHomeWork";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export type RootStackParamList = {
  AddHomeWork: undefined;
  ListHomeWork: undefined;
};
type GroupsProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};
interface TabIconProps {
  route: { name: string };
  focused: boolean;
  size: number;
  color: string;
}

const Tab = createBottomTabNavigator();

const Navigation = ({ navigation }: GroupsProps) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    loadHomeWorkStorage(dispatch);
  });
  const getTabIcon = ({ route, focused, size, color }: TabIconProps) => {
    let iconSource;
    if (route.name === "AddHomeWork") {
      iconSource = require("./assets/AddHomeWork.png");
    } else if (route.name === "ListHomeWork") {
      iconSource = require("./assets/ListHomeWork.png");
    }
    return (
      <Image
        source={iconSource}
        style={{
          width: screenWidth * 0.12,
          height: screenHeight * 0.1,
          tintColor: color,
          resizeMode: "contain",
        }}
      />
    );
  };

  const getHeaderTitle = (route: { name: string }) => {
    if (route.name === "AddHomeWork") {
      return "Новое домашнего задания";
    } else if (route.name === "ListHomeWork") {
      return "Список домашнего задания";
    }
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="ListHomeWork"
        backBehavior="history"
        screenOptions={({ route, navigation }) => ({
          tabBarIcon: ({ focused, size, color }) =>
            getTabIcon({ route, focused, size, color }),
          tabBarStyle: {
            paddingBottom: 5,
            borderRadius: 20,
            height: screenHeight * 0.08,
            width: screenWidth * 0.9,
            position: "absolute",
            marginBottom: screenHeight * 0.03,
            marginLeft: screenWidth * 0.04,
          },
          tabBarInactiveTintColor: "grey",
          tabBarActiveTintColor: "blue",

          headerTitle: getHeaderTitle(route),
          headerTitleAlign: "center",
          headerTintColor: "black",
          headerStyle: {
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          },
          headerTitleStyle: {
            fontSize: screenWidth * 0.05,
            marginBottom: screenHeight * 0.01,
          },
        })}
      >
        <Tab.Screen
          name="AddHomeWork"
          component={AddHomeWork}
          options={() => ({
            tabBarLabel: "Добавить домашнее задание",
            tabBarLabelStyle: {
              fontSize: screenWidth * 0.03,
            },
          })}
        />
        <Tab.Screen
          name="ListHomeWork"
          component={ListHomeWork}
          options={() => ({
            tabBarLabel: "Список домашнего задания",
            tabBarLabelStyle: {
              fontSize: screenWidth * 0.03,
            },
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
