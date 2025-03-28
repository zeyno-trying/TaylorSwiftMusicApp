import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Pressable,
} from "react-native";
import bgimg from "/Users/zizi/giftAgaiin/TaylorSwiftPlayer/assets/img.png";
import { useSpotifyAuth} from "hooks/useSpotifyAuth";

export default function AuthScreen( { navigation } : any ) {
  const { request, response, promptAsync } = useSpotifyAuth();
  const [accessToken, setAccessToken] = useState<string | null>(null);



  useEffect(() => {
    if (response?.type === 'success') {
      const { access_token } = response.params;
      setAccessToken(access_token);
      navigation.navigate('tabs', { token: access_token });
    }
  }, [response]);

  return (
    <ImageBackground source={bgimg} resizeMode="cover" className="flex-1">
      <View className="flex-1 justify-center items-center">
        <Text className="text-4xl text-white font-bold mb-8">
          Log in your spotify Account
        </Text>
        <TextInput
          className="border border-blueBg text-white font-semibold w-[304px] rounded-[10px] mb-8 text-[17px] "
          placeholder="Email"
          placeholderTextColor="#FFFFFF"
        />

        <TextInput
          className="border border-blueBg text-white rounded-[10px] w-[304px] text-[17px] font-semibold mb-8"
          placeholder="Password"
          placeholderTextColor="#FFFFFF"
        />
        <Pressable

          className="bg-transparent w-[304px] items-center border rounded-[20px] border-blueBg pb-3
            pt-3"
          onPress={() => promptAsync()}
          disabled={!request}
        >
          <Text className="text-white font-semibold text-[20px] tracking-widest">
            LOG IN
          </Text>

        </Pressable>
        <View className="flex-row w-full items-center my-6">
          <View className="flex-1 h-px bg-blueBg" />
          <Text className="text-bueBg font-bold mx-2 text-[20px]">OR</Text>
          <View className="flex-1 h-px bg-blueBg" />
        </View>
      </View>
    </ImageBackground>
  );
}
