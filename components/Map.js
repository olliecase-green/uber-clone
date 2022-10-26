import React from "react";
import tw from "twrnc";
import MapView, { Marker } from "react-native-maps";
import { selectOrigin } from "../slices/navSlice";
import { useSelector } from "react-redux";

export default function Map() {
  const origin = useSelector(selectOrigin);

  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Pick up"
          description={origin.description}
          identifier="origin"
        />
      )}
    </MapView>
  );
}
