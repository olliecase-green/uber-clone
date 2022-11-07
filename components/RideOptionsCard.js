import React from "react";
import tw from "twrnc";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function RideOptionsCard() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-gr\ow`}>
      <View style={"z-index: 10"}>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          // onPress={() => console.log("hello")}
          style={tw`absolute top-3 left-5 p-3 rounded-full z-1`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a ride</Text>
      </View>
    </SafeAreaView>
  );
}
