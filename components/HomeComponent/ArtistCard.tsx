import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { useTheme } from '@/Context/ThemeContext';

const ArtistCard = (props: any) => {
   const {theme} = useTheme();
  return (
    <TouchableOpacity style={styles.wrap}>
         <Image style={styles.img} source={props.img} resizeMode='contain' />
      <Text style={[styles.name, {color: theme.textColor}]}>{props.artistName}</Text>
    </TouchableOpacity>
  )
}

export default ArtistCard

const styles = StyleSheet.create({
   wrap:{
      // borderWidth: 1,
      marginRight: 15
   },
   img:{
      borderRadius: 100,
      height: 145,
      width: 145
   },
   name:{
      fontSize: 14,
      fontWeight: 'bold',
      marginTop: 10,
      textAlign: 'center'
   }
})