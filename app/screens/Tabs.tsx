import React from "react";
import { View, Image } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import FavoritesScreen from "./FavoritesScreen";
import PlaylistsScreen from "./PlaylistesScreen";
import Player from "Components/Player";
import PlayerProvider from "providers/PlayerProvider";
const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <PlayerProvider>
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#fcd6f6",
          height: 60,
          borderTopWidth: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: "absolute",
          paddingBottom: 10,
          paddingTop: 10,
          elevation: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.2,
          shadowRadius: 6,
        },
        tabBarActiveTintColor: "#e91e63",
        tabBarInactiveTintColor: "#a8a8a8",
        headerShown: false,
      }}
      tabBar={(props) => (
        <View>
          <Player />
          <BottomTabBar {...props} />
        </View>
      )}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/home.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#e91e63" : "gray",
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/srch.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#e91e63" : "gray",
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/fav.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#e91e63" : "gray",
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Playlists"
        component={PlaylistsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/playlists.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#e91e63" : "gray",
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
    </PlayerProvider>
  );
}
