import { Button, Dimensions, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
// Context
import { useTheme } from '@/Context/ThemeContext';
import { useAuth } from '@/Context/AuthContext';
// Router
import { useLocalSearchParams } from 'expo-router';
import { useRoute } from '@react-navigation/native';
// icons
import { AntDesign, Entypo, Ionicons, Fontisto, Feather } from '@expo/vector-icons';

const PlayScreen = () => {
   // Route params
   const route = useRoute();
   const song = route.params?.song;
   // Context
   const { theme } = useTheme();
   const { router, navigation } = useAuth();
   const data = () => {
      console.log('data: ', song);
   }
   // handle play icon
   const [icon, setIcon] = useState('pause-circle');
   const handleIcon = () => {
      setIcon(icon === 'pause-circle' ? 'play-circle' : 'pause-circle');
   };
   // handel heart icon
   const [love, setLover] = useState();
   return (
      <SafeAreaView style={[styles.safeView, { backgroundColor: theme.bgc }]}>

         <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
               <Ionicons name="arrow-back" size={24} color={theme.textColor} />
            </TouchableOpacity>
            <TouchableOpacity>
               <Entypo name="dots-three-vertical" size={20} color={theme.textColor} />
            </TouchableOpacity>
         </View>

         <Image style={styles.container1} resizeMode='contain' source={{ uri: song.img }} />

         <View style={styles.container2}>
            <View style={styles.wrap2a}>
               <Text style={[styles.songName, { color: theme.textColor }]}>{song.name}</Text>
               <Text style={[styles.artistName, { color: theme.textColor }]}>{song.artist}</Text>
            </View>

            <TouchableOpacity>
               <AntDesign name="hearto" size={24} color={theme.textColor} />
            </TouchableOpacity>
         </View>

         <View style={styles.container3}>
            <View style={{ height: 1.5, width: 310, alignSelf: 'center', backgroundColor: theme.textColor }}></View>
            <View style={styles.wrap3a}>
               <Text style={[styles.timeText, { color: theme.textColor }]}>0:00</Text>
               <Text style={[styles.timeText, { color: theme.textColor }]}>{song.time}</Text>
            </View>
         </View>

         <View style={styles.container4}>
            <TouchableOpacity><Ionicons name="shuffle" size={25} color={theme.textColor} /></TouchableOpacity>
            <TouchableOpacity><AntDesign name="stepbackward" size={25} color={theme.textColor} /></TouchableOpacity>
            <TouchableOpacity onPress={handleIcon}><Feather name={icon} size={70} color={theme.textColor} /></TouchableOpacity>
            <TouchableOpacity><AntDesign name="stepforward" size={25} color={theme.textColor} /></TouchableOpacity>
            <TouchableOpacity><Fontisto name="arrow-return-left" size={24} color={theme.textColor} /></TouchableOpacity>
         </View>

      </SafeAreaView>
   )
}

export default PlayScreen

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40,
   },


   header: {
      height: 50,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15
   },


   container1: {
      height: 330,
      width: 330,
      alignSelf: 'center',
      // backgroundColor: 'blue',
      marginVertical: 70,
      borderRadius: 5
   },


   container2: {
      height: 70,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 25,
      // backgroundColor: 'grey'
   },

   wrap2a: {
      height: '100%',
      width: '80%',
      justifyContent: 'center',
      // backgroundColor: 'gray'
   },
   songName: {
      fontSize: 17,
      fontWeight: 'bold'
   },
   artistName: {
      fontSize: 12,
      fontWeight: 'bold'
   },


   container3: {
      height: 30,
      width: '100%',
      justifyContent: 'space-evenly',
      // backgroundColor: 'grey'
   },

   wrap3a: {
      // height: '100%',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 28
   },
   timeText: {
      fontSize: 12,
      fontWeight: 'bold'
   },


   container4: {
      height: 70,
      width: '100%',
      // backgroundColor: 'gray',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly'
   }
})