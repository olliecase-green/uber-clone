import React from "react";
import tw from "twrnc";
import { View } from "react-native";
import Map from "../components/Map";

export default function MapScreen() {
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}></View>
    </View>
  );
}
