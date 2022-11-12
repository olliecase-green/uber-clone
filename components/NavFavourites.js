import React from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";
import { useDispatch } from "react-redux";
import tw from "twrnc";
import { setDestination, setOrigin } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "W14 9TN",
    coordinates: { lat: 51.48494789999999, lng: -0.2091047 },
    description: "London W14 9TN, UK",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "The Cursitor WeWork",
    coordinates: { lat: 51.51628359999999, lng: -0.1119556 },
    description: "Chancery Lane, London WC2A 1EN, UK",
  },
];

export default function NavFavourites() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200 mr-7`, { height: 0.25 }]} />
      )}
      renderItem={({
        item: { location, destination, icon, coordinates, description },
      }) => (
        <TouchableOpacity
          onPress={() => {
            dispatch(
              setDestination({
                location: coordinates,
                description: description,
              })
            );
            navigation.navigate("RideOptionsCard");
          }}
          style={tw`flex-row items-center p-5`}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
