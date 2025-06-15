import React from 'react';
import { Pressable, StyleSheet, View, Text, Image } from 'react-native';
import {Track} from "../types"
import { usePlayerContext } from "../providers/PlayerProvider"


type TrackListItemProp = {
    track:Track;
}
const TrackListItem = ({track}:TrackListItemProp) => {
   const { setTrack } = usePlayerContext();
    const image = track.album?.images?.[0];

    
    return (
      <Pressable
      onPress={() => setTrack(track)} style={styles.container}>
{image && <Image source={{ uri: image.url }} style={styles.image} />}
<View>
    <Text className='font-semibold font-white '>{track.name}</Text>
    <Text className='from-neutral-400'>{track.artists[0]?.name}</Text>
</View>
      </Pressable>
    );
}

const styles = StyleSheet.create({
  container: {
  width: '100%',
  padding: 10,
  flexDirection: 'row',
  alignItems: 'center',
  gap: 5, 
},

  image: {
    width: 50,
    aspectRatio: 1,
    marginRight: 10,
    borderRadius: 5,
  },  
})

export default TrackListItem;
