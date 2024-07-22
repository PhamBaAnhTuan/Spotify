import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { NavbarTop } from './home';
// Icons
import { Feather, AntDesign } from '@expo/vector-icons';
// Router
import { router } from 'expo-router';
// Context
import { useData } from '@/Context/DataContext';
import { useTheme } from '@/Context/ThemeContext';
import { useAuth } from '@/Context/AuthContext';

interface itemProps {
  title: String,
  onPress: any
}
const Item = (props: itemProps) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.wrap1, { backgroundColor: theme.bgc, borderColor: theme.textColor }]}>
        <Text style={[styles.title, { color: theme.textColor }]}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
};

interface cardProps {
  onPress: any,
  img: any,
  title: String,
  type: String,
  artist: String,
}
export const Card = (props: cardProps) => {
  // Context
  const { theme } = useTheme();

  return (
    <TouchableOpacity onPress={props.onPress} >
      <View style={styles.wrap2}>
        <Image resizeMode='contain' source={props.img} style={styles.imgWrap} />

        <View style={styles.textWrap}>
          <Text style={[styles.cardTitle, { color: theme.textColor }]}>{props.title}</Text>

          <View style={styles.textBox}>
            <Text style={[styles.type, { color: theme.textColor }]}>{props.type}</Text>
            <Text style={{ color: theme.textColor, paddingHorizontal: 3 }}>•</Text>
            <Text style={[styles.type, { color: theme.textColor }]}>{props.artist}</Text>
          </View>

        </View>
      </View>
    </TouchableOpacity>
  )
}

const Library = () => {
  // Theme
  const { theme } = useTheme();
  const { dailySongs, albums } = useData();
  const { navigation } = useAuth();
  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: theme.bgc }]}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <NavbarTop
          img={
            <TouchableOpacity onPress={() => router.push('Profile')} >
              <Image style={styles.img} source={require('../../assets/icon/dog.png')} />
            </TouchableOpacity>
          }
          title={
            <View style={{ justifyContent: 'center' }}>
              <Text style={[styles.welcomeText, { color: theme.textColor }]}>Library</Text>
            </View>
          }
          src1={null}
          src2={
            <TouchableOpacity>
              <Feather name="search" size={25} color={theme.textColor} />
            </TouchableOpacity>
          }
          src3={
            <TouchableOpacity>
              <AntDesign name="plus" size={25} color={theme.textColor} />
            </TouchableOpacity>
          }
        />

        <View style={styles.container1}>
          <ScrollView horizontal={true}>
            <Item
              onPress={() => router.push('PlayList')}
              title={'Playlist'}
            />
            <Item
              onPress={() => router.push('Album')}
              title={'Album'}
            />
            <Item
              onPress={null}
              title={'Favorite'}
            />
            <Item
              onPress={null}
              title={'Download'}
            />
          </ScrollView>
        </View>

        <View style={styles.container2}>
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

          {albums.map((item: any, index: number) => (
            <Card
              key={index}
              onPress={() => navigation.navigate('PlayScreen', { song: albums[index] })}
              img={{ uri: item.img }}
              title={item.name}
              type={'Playlist'}
              artist={item.artist}
            />
          ))}

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

      </ScrollView>
    </SafeAreaView>
  )
}

export default Library;

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    backgroundColor: 'grey'
  },

  img: {
    height: 50,
    width: 50,
    marginRight: 10,
    marginBottom: 5
  },
  welcomeText: {
    // borderWidth: 1,
    fontWeight: 'bold',
    color: 'white',
  },

  container1: {
    height: 35,
    width: 'auto',
    // backgroundColor: 'green',
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  wrap1: {
    height: '100%',
    // width: 130,
    borderWidth: 0.7,
    // borderColor: 'aliceblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    paddingHorizontal: 25,
    marginRight: 10
  },
  title: {
    fontSize: 11,
    fontWeight: 'bold',
    // color: 'aliceblue'
  },


  // Card container
  container2: {
    height: 'auto',
    width: '100%',
    marginTop: 20,
    // alignSelf: 'center',
    justifyContent: 'space-evenly',
  },

  // Card
  wrap2: {
    height: 70,
    width: '95%',
    // borderWidth: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 10
  },
  imgWrap: {
    height: 70,
    width: 70
  },

  textWrap: {
    height: '100%',
    width: 200,
    // backgroundColor:'red',
    justifyContent: 'center',
    paddingLeft: 10
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    // color: 'aliceblue',
  },

  textBox: {
    flexDirection: 'row',
    // borderWidth: 1,
    // width: 130,
    alignItems: 'center',
    // justifyContent: 'space-evenly'
  },
  type: {
    fontSize: 11,
    // fontWeight: 'bold',
    // color: 'aliceblue',
  }
});