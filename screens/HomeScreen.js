import React from "react";
import tw from "twrnc";
import { View, SafeAreaView, Image, Text } from "react-native";
import NavOptions from "../components/NavOptions";
import NavFavourites from "../components/NavFavourites";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

export default function HomeScreen() {
  const dispatch = useDispatch();

  function timeOfDay() {
    const date = new Date();
    const hour = date.getHours();
    if (hour >= 0 && hour < 12) return "morning";
    else if (hour >= 12 && hour < 18) return "afternoon";
    else return "evening";
  }

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`pl-7`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
            marginBottom: -20,
          }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
          }}
        />
        <Text style={tw`py-5 text-2xl`}>Good {timeOfDay()}, Ollie</Text>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
              marginLeft: -10,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
}
