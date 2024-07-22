import { Dimensions, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { router } from 'expo-router';
// Icons
import { Feather, AntDesign, Ionicons, Entypo } from '@expo/vector-icons';
// Components
import { NavbarTop } from './(app)/home';
// Context
import { useData } from '@/Context/DataContext';
import { useTheme } from '@/Context/ThemeContext';

interface ItemProps {
   onPress: any,
   img: any,
   songName: String,
   type: String,
   artist: String
}
const Item = (props: ItemProps) => {
   const {theme} = useTheme();
   return (
      <View style={styles.itemContainer}>
         <TouchableOpacity style={styles.wrapLeft} onPress={props.onPress} >
            <View>
               <Image resizeMode='cover' source={props.img} style={styles.img} />
            </View>

            <View style={styles.nameWrap}>
               <View style={styles.songNameWrap}>
                  <Text style={[styles.songNameText, {color: theme.textColor}]}>{props.songName}</Text>
               </View>

               <View style={styles.nameBox}>
                  <View style={styles.typeWrap}>
                     <Text style={[styles.typeText, {color: theme.textColor}]}>{props.type}</Text>
                  </View>
                  <Text style={[styles.artistText, {color: theme.textColor}]}>{props.artist}</Text>
               </View>
            </View>
         </TouchableOpacity>

         <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: 50 }}>
            <TouchableOpacity>
               <AntDesign name="hearto" size={20} color={theme.textColor} />
            </TouchableOpacity>
            <TouchableOpacity>
               <Entypo name="dots-three-vertical" size={18} color={theme.textColor} />
            </TouchableOpacity>
         </View>
      </View>
   )
}

const PlayList = () => {
   const {theme} = useTheme();
   const { dailySongs } = useData();
   return (
      <SafeAreaView style={[styles.safeView, {backgroundColor: theme.bgc}]}>

         <NavbarTop
            img={null}
            title={
               <TouchableOpacity onPress={() => router.replace('library')}>
                  <Ionicons name="arrow-back" size={24} color={theme.textColor} />
               </TouchableOpacity>
            }
            src1={null}
            src2={null}
            src3={null}
         />

         <View style={styles.container1}>

            <View style={styles.wrap1}>
               <Text style={[styles.title, {color: theme.textColor}]}>Your Playlist</Text>
               <Text style={[styles.text, {color: theme.textColor}]}>277 songs</Text>
            </View>

            <TouchableOpacity >
               <Image source={require('../assets/icon/Shuffle.png')} />
            </TouchableOpacity>

         </View>

         <View style={styles.container2}>
            {dailySongs.map((item: any, index: number) => (
               <Item
                  key={index}
                  onPress={null}
                  img={{ uri: item.img }}
                  songName={item.name}
                  type={'LYRICS'}
                  artist={item.artist}
               />
            ))}
         </View>
      </SafeAreaView>
   )
}

export default PlayList

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      backgroundColor: 'grey',
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40,
   },

   // container 1
   container1: {
      height: 60,
      width: 'auto',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10
   },

   wrap1: {
      // borderWidth: 1,
      height: 'auto',
      width: 130,
      // alignItems: 'center',
      // justifyContent: 'center',
   },
   title: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'aliceblue',
   },
   text: {
      fontSize: 10,
      fontWeight: 'bold',
      color: 'aliceblue',
   },

   container2: {
      height: 'auto',
      width: '100%',
      // paddingHorizontal: 10,
      // borderWidth: 1,
      justifyContent: 'space-evenly'
   },

   // Item
   itemContainer: {
      height: 50,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 3,
      paddingHorizontal: 10
   },

   wrapLeft: {
      height: '100%',
      width: 280,
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   img: {
      height: 50,
      width: 50,
      // borderWidth: 1,
   },

   nameWrap: {
      height: '100%',
      width: '77%',
      // borderWidth: 1,
      // alignItems: 'center',
      justifyContent: 'center',
   },
   songNameWrap: {
      // height: '50%',
      width: '100%',
      justifyContent: 'center',
   },
   songNameText: {
      fontSize: 13,
      fontWeight: 'bold',
      color: 'aliceblue'
   },

   nameBox: {
      // height: '50%',
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
   },
   typeWrap: {
      height: 13,
      width: 35,
      backgroundColor: 'darkgray',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
   },
   typeText: {
      fontSize: 8,
      fontWeight: 'bold',
      color: 'aliceblue'
   },

   artistWrap: {
      // borderWidth: 1
   },
   artistText: {
      fontSize: 11,
      paddingLeft: 5,
      color: 'aliceblue'
   },
})