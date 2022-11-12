import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";

const data = [
  {
    id: "123",
    title: "KFC",
    image: "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png",
  },
  {
    id: "456",
    title: "McDonald's",
    image:
      "https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png",
  },
  {
    id: "789",
    title: "Subway",
    image:
      "https://seeklogo.com/images/S/subway-logo-5E2F09E018-seeklogo.com.png",
  },
];

export default function EatScreen() {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`pl-7`}>
        <Image
          style={{
            width: 200,
            height: 100,
            resizeMode: "contain",
            marginBottom: -20,
            marginLeft: -10,
          }}
          source={{
            uri: "https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Logo.png",
          }}
        />
        <Text style={tw`py-5 text-2xl mb-5`}>Options near you</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, image }, item }) => (
          <TouchableOpacity style={tw`flex-row ml-7`}>
            <Image
              style={{
                width: 75,
                height: 75,
                marginBottom: 10,
              }}
              source={{ url: image }}
            />
            <Text style={tw`text-lg font-semibold ml-5 mt-5`}>{title}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
