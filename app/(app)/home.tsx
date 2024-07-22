import { SafeAreaView, Button, Dimensions, Image, Platform, TouchableOpacity, ScrollView, StatusBar, StyleSheet, Text, View, ToastAndroid } from 'react-native';

import { router, useLocalSearchParams, useNavigation } from 'expo-router';
// Component
import HomeCardSmall from '@/components/HomeComponent/HomeCardSmall';
import HomeCardSquare from '@/components/HomeComponent/HomeCardSquare';
// Icons
import { Ionicons, Fontisto } from '@expo/vector-icons';
// Context
import { useAuth } from '@/Context/AuthContext';
import { useTheme } from '@/Context/ThemeContext';
import { useData } from '@/Context/DataContext';
import ArtistCard from '@/components/HomeComponent/ArtistCard';


interface navbarProps {
  title: any,
  img: any,
  src1: any,
  src2: any,
  src3: any,
}

export const NavbarTop = (props: navbarProps) => {

  return (
    <View style={styles.navbarTop}>
      <View style={{ flexDirection: 'row' }}>
        {props.img}
        {props.title}
      </View>
      <View style={styles.navbarRight}>
        {props?.src1}
        {props?.src2}
        {props?.src3}
      </View>
    </View>
  )
};


export default function Home() {
  // Navigation to pass params
  // const navigation = useNavigation();
  // Context
  const { navigation, SignOutMethod, user } = useAuth();
  const { theme } = useTheme();
  const { musicType, dailySongs, albums, artist } = useData();
  const data = () => {
    console.log(musicType);
  }

  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: theme.bgc }]}>

      <NavbarTop
        img={null}
        title={<Text style={[styles.welcomeText, { color: theme.textColor }]}>Welcome {user?.userName}!</Text>}
        src1={
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color={theme.textColor} />
          </TouchableOpacity>
        }
        src2={<Fontisto name="clock" size={20} color={theme.textColor} />}
        src3={
          <TouchableOpacity onPress={() => router.push('Setting')}>
            <Ionicons name="settings-outline" size={24} color={theme.textColor} />
          </TouchableOpacity>
        }
      />

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.cardContainer}>
          {/* {musicType.map((item: any, index: number) => ( */}
          <View style={styles.cardWrap}>
            {musicType.map((item: any, index: number) => (
              <HomeCardSmall
                key={index}
                onPress={() => navigation.navigate('PlayScreen', { song: musicType[index] })}
                name={item.name}
                src={{ uri: item.img }} />
            ))}
          </View>

          <View style={styles.cardWrap}>
            {musicType.map((item: any, index: number) => (
                <HomeCardSmall 
                key={index}
                onPress={() => navigation.navigate('PlayScreen', { song: musicType[index] })}
                name={item.name} 
                src={{ uri: item.img }} 
                />
            ))}
          </View>
          {/* ))} */}
        </View>

        <View style={styles.dailySongContainer}>
          <Text style={[styles.title, { color: theme.textColor }]}>Daily song</Text>
          <ScrollView horizontal={true}>
            {dailySongs.map((item: any, index: number) => (
              <HomeCardSquare
                onPress={() => navigation.navigate('PlayScreen', { song: dailySongs[index] })}
                key={index}
                src={{ uri: item.img }}
                name={item.name}
                artist={item.artist}

              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.dailySongContainer}>
          <Text style={[styles.title, { color: theme.textColor }]}>Artists</Text>
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

        <View style={styles.dailySongContainer}>
          <Text style={[styles.title, { color: theme.textColor }]}>Albums</Text>
          <ScrollView horizontal={true}>
            {albums.map((item: any, index: number) => (
              <HomeCardSquare
                key={index}
                onPress={() => navigation.navigate('PlayScreen', { song: albums[index] })}
                src={{ uri: item.img }}
                name={item.name}
                artist={item.artist}
              />
            ))}
          </ScrollView>
        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    backgroundColor: 'grey',
    // borderWidth: 1
  },
  // Navbar top
  navbarTop: {
    // borderWidth: 1,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    // paddingVertical: 10,
  },
  welcomeText: {
    // fontSize: 15,
    fontWeight: 'bold',
    // color: 'white',
  },
  navbarRight: {
    // borderWidth: 1,
    width: 110,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  cardContainer: {
    flexDirection: 'row',
    // borderWidth: 1,
    // alignItems: 'center',
    justifyContent: 'space-evenly',

  },
  cardWrap: {
    flexDirection: 'column',
    height: 450,
    width: '50%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  // Daily card container
  dailySongContainer: {
    height: 230,
    // borderWidth: 1,
    marginTop: 10,
    paddingLeft: 10,
  },
  title: {
    // fontSize: 20,
    // borderWidth: 1,
    fontWeight: 'bold',
    paddingVertical: 10,
    // paddingLeft: 10
  }
});
