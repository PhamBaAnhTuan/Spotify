import { Dimensions, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
// Context
import { useTheme } from '@/Context/ThemeContext';
import { useAuth } from '@/Context/AuthContext';
// Icons
import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome5, FontAwesome6, Ionicons, MaterialIcons } from '@expo/vector-icons';
// Components
import SettingCard from '@/components/SettingComponent/SettingCard';

const Setting = () => {
   // Theme
   const { theme } = useTheme();
   const { router, SignOutMethod } = useAuth();
   return (
      <SafeAreaView style={[styles.safeView, { backgroundColor: theme.bgc }]}>

         <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
               <Ionicons name="arrow-back" size={24} color={theme.textColor} />
            </TouchableOpacity>

            <Text style={[styles.title1, { color: theme.textColor }]}>Setting</Text>

            <TouchableOpacity><Entypo name="dots-three-vertical" size={21} color={theme.textColor} /></TouchableOpacity>
         </View>

         <ScrollView showsVerticalScrollIndicator={false}>

            <View style={[styles.container1, { borderColor: theme.textColor }]}>
               <Text style={[styles.text1, {color: theme.textColor}]}>Account</Text>
               <SettingCard
                  onPress={null}
                  icon={<Entypo name="spotify" size={24} color={theme.bgc} />}
                  name='Manage your subscription'
               />
               <SettingCard
                  onPress={null}
                  icon={<Entypo name="edit" size={20} color={theme.bgc} />}
                  name='Edit profile'
               />
               <SettingCard
                  onPress={null}
                  icon={<AntDesign name="reload1" size={20} color={theme.bgc} />}
                  name='Recover playlists'
               />
            </View>

            <View style={[styles.container1, { borderColor: theme.textColor }]}>
               <Text style={[styles.text1, {color: theme.textColor}]}>Payment</Text>
               <SettingCard
                  onPress={null}
                  icon={<Ionicons name="receipt" size={20} color={theme.bgc} />}
                  name='Order history'
               />
               <SettingCard
                  onPress={null}
                  icon={<AntDesign name="creditcard" size={20} color={theme.bgc} />}
                  name='Saved payment cards'
               />
               <SettingCard
                  onPress={null}
                  icon={<AntDesign name="tag" size={20} color={theme.bgc} />}
                  name='Redeem'
               />
            </View>

            <View style={[styles.container1, { borderColor: theme.textColor }]}>
               <Text style={[styles.text1, {color: theme.textColor}]}>Security and Privacy</Text>
               <SettingCard
                  onPress={null}
                  icon={<AntDesign name="appstore-o" size={20} color={theme.bgc} />}
                  name='Manage your subscription'
               />
               <SettingCard
                  onPress={null}
                  icon={<Ionicons name="notifications-outline" size={20} color={theme.bgc} />}
                  name='Notifications settings'
               />
               <SettingCard
                  onPress={null}
                  icon={<FontAwesome5 name="eye" size={20} color={theme.bgc} />}
                  name='Privacy settings'
               />
               <SettingCard
                  onPress={null}
                  icon={<AntDesign name="login" size={20} color={theme.bgc} />}
                  name='Edit sign in method'
               />
               <SettingCard
                  onPress={null}
                  icon={<MaterialIcons name="devices" size={20} color={theme.bgc} />}
                  name='Set devices password'
               />
               <SettingCard
                  onPress={null}
                  icon={<AntDesign name="logout" size={20} color={theme.bgc} />}
                  name='Sign out everywhere'
               />
            </View>

            <View style={[styles.container1, { borderColor: theme.textColor }]}>
               <Text style={[styles.text1, {color: theme.textColor}]}>Help</Text>
               <SettingCard
                  onPress={null}
                  icon={<Feather name="help-circle" size={24} color={theme.bgc} />}
                  name='Spotify help'
               />
               <SettingCard
                  onPress={null}
                  icon={<FontAwesome6 name="users" size={20} color={theme.bgc} />}
                  name='About us'
               />
            </View>

            <View style={[styles.container1, { borderColor: theme.textColor }]}>
               <Text style={[styles.text1, {color: theme.textColor}]}>Sign out</Text>
               <SettingCard
                  onPress={SignOutMethod}
                  icon={<AntDesign name="logout" size={20} color='tomato' />}
                  name='Sign out'
               />
            </View>
         </ScrollView>

      </SafeAreaView>
   )
}

export default Setting;

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
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15
   },
   title1: {
      fontSize: 14,
      fontWeight: 'bold',
   },


   container1: {
      height: 'auto',
      width: '95%',
      borderWidth: 1,
      borderRadius: 5,
      alignSelf: 'center',
      marginBottom: 15
   },

   text1: {
      fontSize: 17,
      fontWeight: 'bold',
      padding: 10
   }
})