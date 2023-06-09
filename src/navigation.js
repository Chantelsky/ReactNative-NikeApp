import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5 } from "@expo/vector-icons";

import ProductScreen from "./screens/ProductScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { Pressable, Text } from "react-native";
import { useSelector } from "react-redux";
import { itemsInCart } from "./store/cartSlice";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const numberOfItemsInCart = useSelector(itemsInCart);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="Products"
          component={ProductScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={{ marginLeft: 5, fontWeight: "500" }}>
                  {numberOfItemsInCart}
                </Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={{ marginLeft: 5, fontWeight: "500" }}>
                  {numberOfItemsInCart}
                </Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
