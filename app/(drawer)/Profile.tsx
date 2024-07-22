import { Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
// Icons
import { Entypo, Ionicons } from '@expo/vector-icons';
// Context
import { useTheme } from '@/Context/ThemeContext';
import { useAuth } from '@/Context/AuthContext';
import { useData } from '@/Context/DataContext';
// Components
import { NavbarTop } from '../(app)/home';
import { Card } from '../(app)/library';
import ArtistCard from '@/components/HomeComponent/ArtistCard';

const Profile = () => {
   const { theme } = useTheme();
   const { router, navigation, SignOutMethod, user } = useAuth();
   const { dailySongs, artist } = useData();
   return (
      <SafeAreaView style={[styles.safeView, { backgroundColor: theme.bgc }]}>

         <View style={styles.header}>
            <TouchableOpacity onPress={() => router.replace('library')}>
               <Ionicons name="arrow-back" size={24} color={theme.textColor} />
            </TouchableOpacity>
            <Text style={[styles.title1, {color: theme.textColor}]}>Profile</Text>
            <TouchableOpacity>
               <Entypo name="dots-three-vertical" size={21} color={theme.textColor} />
            </TouchableOpacity>
         </View>



         <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.container1}>
               <TouchableOpacity>
                  <Image source={require('../../assets/icon/dog.png')} style={styles.avt} />
               </TouchableOpacity>

               <View style={styles.nameContainer}>
                  <Text style={[styles.nameText, { color: theme.textColor }]}>{user?.userName}</Text>

                  <View style={styles.flwContainer}>
                     <View style={{ alignItems: 'center' }}>
                        <Text style={[styles.text, { color: theme.textColor }]}>Follower</Text>
                        <Text style={[styles.text, { color: theme.textColor }]}>99319</Text>
                     </View>

                     <View style={{ alignItems: 'center' }}>
                        <Text style={[styles.text, { color: theme.textColor }]}>Following</Text>
                        <Text style={[styles.text, { color: theme.textColor }]}>27</Text>
                     </View>

                  </View>

               </View>

               <View style={[styles.slide, {borderColor: theme.textColor}]}>
                  <Ionicons name="chevron-back" size={24} color={theme.textColor} />
               </View>

            </View>

            <View style={styles.container2}>
               <Text style={[styles.title3, {color: theme.textColor}]}>Following</Text>

               <ScrollView horizontal={true}>
                  {artist.map((item: any, index: number) => (
                     <ArtistCard
                        key={index}
                        img={{ uri: item.img }}
                        artistName={item.name}
                     />
                  ))}
               </ScrollView>
            </View>

            <View style={styles.container3}>
               <View>
                  <Text style={[styles.title3, {color: theme.textColor}]}>Recently played songs</Text>
               </View>

               <View style={styles.wrap3}>
                  {dailySongs.map((item: any, index: number) => (
                     <Card
                        key={index}
                        onPress={() => navigation.navigate('PlayScreen', { song: dailySongs[index] })}
                        img={{ uri: item.img }}
                        title={item.name}
                        type={'Playlist'}
                        artist={item.artist}
                     />
                  ))}
               </View>
            </View>

         </ScrollView>

      </SafeAreaView>
   )
}

export default Profile

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40
   },

   signOutBtn: {
      height: 30,
      width: 70,
      // borderWidth: 1,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'tomato'
   },


   header:{
      height: 50,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between',
      paddingHorizontal: 15
   },
   title1:{
      fontSize: 14,
      fontWeight: 'bold'
   },


   container1: {
      height: 150,
      width: 'auto',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent: 'center',
      paddingHorizontal: 10
   },

   avt: {
      borderRadius: 100,
      height: 130,
      width: 130,
      borderWidth: 1
   },

   nameContainer: {
      // borderWidth: 1,
      paddingLeft: 5,
      width: 200
   },
   nameText: {
      fontSize: 22,
      fontWeight: 'bold',
      // paddingLeft: 10
   },

   flwContainer: {
      height: 50,
      width: 120,
      // borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   text: {
      fontSize: 12,
      fontWeight: '500'
   },

   slide: {
      height: 40,
      width: 30,
      // marginLeft: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderTopLeftRadius: 30,
      borderBottomLeftRadius: 30
   },


   container2: {
      height: 230,
      // borderWidth: 1,
      marginTop: 10,
      paddingLeft: 10,
      justifyContent: 'space-around'
   },


   container3: {
      height: 'auto',
      width: '100%',
      paddingHorizontal: 5,
      // borderWidth: 1,
      // justifyContent: 'space-evenly'
   },

   title3: {
      // fontSize: 13,
      fontWeight: 'bold',
      paddingVertical: 10,
      paddingLeft: 10
   },

   wrap3: {
      // height: 'auto',
      // width: '100%',
      // borderWidth: 1,
   }
})