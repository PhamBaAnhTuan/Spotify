import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { useTheme } from '@/Context/ThemeContext';

interface Card {
   name: string,
   artist: string,
   src: any,
   onPress: any
}
const HomeCardSquare = (props: Card) => {
   const {theme} = useTheme();
   return (
      <TouchableOpacity onPress={props.onPress}>
         <View style={[styles.container, {backgroundColor: theme.bgc}]} >
            <Image source={props.src} style={styles.imgWrap} />
            <Text style={[styles.cardName, {color: theme.textColor}]}>{props.name}</Text>
            <Text style={[styles.cardArtist, {color: theme.textColor}]}>{props.artist}</Text>
         </View>
      </TouchableOpacity>
   )
}

export default HomeCardSquare

const styles = StyleSheet.create({
   container: {
      paddingRight: 15,
   },
   imgWrap: {
      width: 145,
      height: 145,
      borderRadius: 5
   },
   cardName: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'aliceblue',
      paddingLeft: 2,
      paddingTop: 3
   },
   cardArtist: {
      fontSize: 11,
      color: 'aliceblue',
      paddingLeft: 2
   }
})