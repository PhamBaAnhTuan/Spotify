import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
// Icons
import { AntDesign, Entypo } from '@expo/vector-icons';
// Context
import { useTheme } from '@/Context/ThemeContext';

interface Props {
   onPress: any,
   icon: any,
   name: string
}
const SettingCard = (props: Props) => {
   const { theme } = useTheme();
   return (
      <TouchableOpacity style={styles.container} onPress={props.onPress} >

         <View style={styles.wrap}>
            <View style={styles.iconWrap}>
               {props.icon}
            </View>
   
            <Text style={[styles.name, {color: theme.textColor}]}>{props.name}</Text>
         </View>

         <View style={styles.arrow}>
            <AntDesign name="right" size={17} color={theme.textColor} />
         </View>
      </TouchableOpacity>
   )
}

export default SettingCard

const styles = StyleSheet.create({
   container: {
      height: 50,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // borderWidth: 1,
      paddingHorizontal: 10
   },

   wrap:{
      height: '100%',
      width: 'auto',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent: 'space-between',

   },
   
   iconWrap: {
      height: 35,
      width: 35,
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1,
      borderRadius: 5,
      backgroundColor: 'grey',
   },

   name: {
      fontSize: 14,
      fontWeight: 'bold',
      paddingLeft: 10
   },

   arrow: {

   }
})