import { tracks } from "assets/data/tracks";
import TrackListItem from "Components/TrackListItem";
import { FlatList } from 'react-native';
import React from "react";
import { Text } from "react-native";

type Props = {
  token: string;
};
function HomeScreen() {
  return (
  <FlatList
  data={tracks}
  renderItem={({item}) => <TrackListItem track={item} />}>

  </FlatList>
  )
}

export default HomeScreen;
