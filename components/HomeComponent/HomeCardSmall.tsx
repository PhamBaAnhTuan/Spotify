import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
// Context
import { useTheme } from '@/Context/ThemeContext';


interface Card {
   name: string,
   src: any,
   onPress: any
}
const HomeCardSmall = (props: Card) => {
   const { theme } = useTheme();
   return (
      <TouchableOpacity onPress={props.onPress}>
         <View style={[styles.container, { backgroundColor: theme.textColor }]}>
            <Image source={props.src} style={{ height: 60, width: 60, borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }} />
            <Text style={[styles.cardText, { color: theme.bgc }]}>{props.name}</Text>
         </View>
      </TouchableOpacity>
   )
}

export default HomeCardSmall

const styles = StyleSheet.create({
   container: {
      height: 60,
      width: 170,
      // borderWidth: 1,
      borderRadius: 5,
      backgroundColor: 'aliceblue',
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent: 'space-between',
   },
   cardText: {
      fontSize: 12,
      fontWeight: 'bold',
      paddingLeft: 15,
   }
})