import React from 'react';
import { Pressable, StyleSheet, View, Text, Image } from 'react-native';
import {Track} from "../types"


type TrackListItemProp = {
    track:Track;
}
const TrackListItem = ({track}:TrackListItemProp) => {
    const image = track.album?.images?.[0];
    return (
      <Pressable
      onPress={() => console.log('Playing track ', track.id)}
      className='w-[100%] p-10 gap-5 flex-row center'>
{image && <Image source={{ uri: image.url }} style={styles.image} />}
<View>
    <Text className='font-semibold font-white '>{track.name}</Text>
    <Text className='from-neutral-400'>{track.artists[0]?.name}</Text>
</View>
      </Pressable>
    );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    aspectRatio: 1,
    marginRight: 10,
    borderRadius: 5,
  },  
})

export default TrackListItem;
