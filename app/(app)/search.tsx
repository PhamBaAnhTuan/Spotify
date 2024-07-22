import SearchForm from '@/components/SearchComponents/SearchForm';
import { Platform, StatusBar, StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, Image } from 'react-native';
import { NavbarTop } from './home';
// Context
import { useTheme } from '@/Context/ThemeContext';

export default function Search() {
  const { theme } = useTheme();
  return (
    <SafeAreaView style={[styles.safeView, {backgroundColor: theme.bgc}]}>
      <ScrollView showsVerticalScrollIndicator={false} >

        {/* <View style={styles.titleWrap}>
          <Text style={styles.title}>Search</Text>
        </View> */}
        <NavbarTop
          img={null}
          title={<Text style={{fontWeight: 'bold', color: theme.textColor}}>Search</Text>}
          src1={null}
          src2={null}
          src3={null}
        />

        <View>
          <SearchForm />
        </View>

        {/* Container 1 */}
        <View style={styles.container1}>

          <View style={styles.text1Wrap}>
            <Text style={[styles.text1, {color: theme.textColor}]}>Your top genres</Text>
          </View>

          {/* Wrap 1 */}
          <View style={styles.wrap}>

            <View style={styles.col}>
              <Image resizeMode='contain' style={{ height: 95, width: 170 }}
                source={require('../../assets/search/card/Pop.png')}
              />
              <Image resizeMode='contain' style={{ height: 95, width: 170 }}
                source={require('../../assets/search/card/Indie.png')}
              />
            </View>

            <View style={styles.col}>
              <Image resizeMode='contain' style={{ height: 95, width: 170 }}
                source={require('../../assets/search/card/Christian&Gospel.png')}
              />
              <Image resizeMode='contain' style={{ height: 95, width: 170 }}
                source={require('../../assets/search/card/Rock.png')}
              />
            </View>

          </View>

        </View>

        {/* Container 2 */}
        <View style={styles.container2}>

          <View style={styles.text1Wrap}>
            <Text style={[styles.text1, {color: theme.textColor}]}>Top Trending</Text>
          </View>

          {/* Wrap 2 */}
          <View style={styles.wrap}>

            <View style={styles.col}>
              <Image resizeMode='contain' style={{ height: 95, width: 170 }}
                source={require('../../assets/search/card/Podcasts.png')}
              />
              <Image resizeMode='contain' style={{ height: 95, width: 170 }}
                source={require('../../assets/search/card/Charts.png')}
              />
              <Image resizeMode='contain' style={{ height: 95, width: 170 }}
                source={require('../../assets/search/card/Radio.png')}
              />
              <Image resizeMode='contain' style={{ height: 95, width: 170 }}
                source={require('../../assets/search/card/Live Events.png')}
              />
            </View>

            <View style={styles.col}>
              <Image resizeMode='contain' style={{ height: 95, width: 170 }}
                source={require('../../assets/search/card/Made For You.png')}
              />
              <Image resizeMode='contain' style={{ height: 95, width: 170 }}
                source={require('../../assets/search/card/New Releases.png')}
              />
              <Image resizeMode='contain' style={{ height: 95, width: 170 }}
                source={require('../../assets/search/card/Discover.png')}
              />
              <Image resizeMode='contain' style={{ height: 95, width: 170 }}
                source={require('../../assets/search/card/Afro.png')}
              />
            </View>

          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    backgroundColor: 'grey'
  },
  titleWrap: {
    height: 70,
    // borderWidth: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    // borderWidth: 1,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 20,
  },

  // Container 1
  container1: {
    height: 240,
    width: '100%',
    // backgroundColor: 'white',
    marginTop: 20
  },

  text1Wrap: {
    height: 30,
    // borderWidth: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingVertical: 5
  },
  text1: {
    fontSize: 13,
    fontWeight: 'bold',
    justifyContent: 'center',
    // borderWidth: 1
  },
  wrap: {
    height: '90%',
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',

  },
  col: {
    height: '100%',
    width: '50%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  // Container 2
  container2: {
    height: 450,
    width: 'auto',
    // backgroundColor: 'white',
    marginTop: 20,
  }
});
