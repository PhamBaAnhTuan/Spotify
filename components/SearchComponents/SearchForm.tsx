import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';
// Icons
import { Feather } from '@expo/vector-icons';
// Context
import { useTheme } from '@/Context/ThemeContext';

const SearchForm = () => {
   const { theme } = useTheme();
  return (
   <View style={[styles.container, {backgroundColor: theme.textColor}]}>
      <Feather name="search" size={24} color={theme.bgc} />
      <TextInput placeholder='Artist, song or podcast' placeholderTextColor={theme.bgc} style={[styles.input, {color: theme.bgc}]} />
   </View>
  )
}

export default SearchForm

const styles = StyleSheet.create({
   container:{
      height: 50,
      width: 350,
      // borderWidth: 1,
      borderRadius: 5,
      // backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10
   },
   input:{
      height: 40,
      width: 300,
      paddingLeft: 5,
      fontSize: 13,
      // borderWidth: 1
   }
})