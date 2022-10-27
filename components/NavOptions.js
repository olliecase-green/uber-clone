import React from "react";
import tw from "twrnc";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image:
      "data:image/png;base64,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",
    screen: "EatScreen",
  },
];

export default function NavOptions() {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  function isOriginSpecified() {
    if (!origin) return "opacity-20";
  }

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-4 bg-gray-200 mr-4`}
          disabled={!origin}
        >
          <View style={tw`${isOriginSpecified()}`}>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              type="antdesign"
              color="white"
              name="arrowright"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
