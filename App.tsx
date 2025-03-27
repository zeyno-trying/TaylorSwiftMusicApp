import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '/Users/zizi/giftAgaiin/TaylorSwiftPlayer/app/screens/HomeScreen.tsx';
import SearchScreen from '/Users/zizi/giftAgaiin/TaylorSwiftPlayer/app/screens/SearchScreen.tsx';
import FavoritesScreen from '/Users/zizi/giftAgaiin/TaylorSwiftPlayer/app/screens/FavoritesScreen.tsx';
import PlaylistsScreen from '/Users/zizi/giftAgaiin/TaylorSwiftPlayer/app/screens/PlaylistesScreen.tsx';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Favorites" component={FavoritesScreen} />
                <Tab.Screen name="Playlists" component={PlaylistsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
