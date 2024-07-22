import { View, Text, StyleSheet, SafeAreaView, Dimensions, TextInput, Platform, StatusBar, TouchableOpacity, Image, Alert, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react';
// Icon
import { Fontisto, Feather, Ionicons } from '@expo/vector-icons';
// Router
import { router } from 'expo-router';
// Firebase
import { auth } from '../FirebaseConfig/FirebaseConfig';
// Context
import { useAuth } from '@/Context/AuthContext';
import { useTheme } from '@/Context/ThemeContext';
// Component
import { Loading } from '@/components/Animation/Animation';

const SignUp = () => {
   // Theme color
   const { theme } = useTheme();
   // Handle visible passwords
   const [eye, setEye] = useState('eye')
   const [hide, setHide] = useState(true);
   const hidePass = () => {
      eye == 'eye' ? setEye('eye-off') : setEye('eye');
      hide === true ? setHide(false) : setHide(true);
   };
   // Handle remember password
   const [remember, setRemember] = useState('checkbox-passive')
   const handleRemember = () => {
      remember == 'checkbox-passive' ? setRemember('checkbox-active') : setRemember('checkbox-passive');
   };
   // Sign up method
   const { router, SignUpMethod } = useAuth();
   const [loading, setLoading] = useState(false);

   const email = useRef("");
   const password = useRef("");
   const userName = useRef("");

   const handleSignUp = async () => {
      if (!email.current && !password.current && !userName.current) {
         ToastAndroid.show('Please enter full name, email and password', ToastAndroid.SHORT);
         return;
      }
      if (!userName.current) {
         ToastAndroid.show('Please enter full name', ToastAndroid.SHORT);
         return;
      }
      if (!email.current) {
         ToastAndroid.show('Please enter email', ToastAndroid.SHORT);
         return;
      }
      if (!password.current) {
         ToastAndroid.show('Please enter password', ToastAndroid.SHORT);
         return;
      }
      setLoading(true);
      const response = await SignUpMethod(email?.current, password?.current, userName?.current);
      setLoading(false);

      if (!response.success) {
         Alert.alert('Sign Up error', response.msg);
         // console.log('Sign Up error:', response.msg)
      };
   };


   return (
      <SafeAreaView style={[styles.safeView, {backgroundColor: theme.bgc}]}>


         <Text style={[styles.welcomeText, {color: theme.textColor}]}>Create your account</Text>


         <View>
            <View style={{ paddingBottom: 20 }}>
               <Text style={[styles.title, {color: theme.textColor}]}>Full name</Text>
               <TextInput style={[styles.textInput, {color: theme.textColor}]}
                  keyboardType='default'
                  onChangeText={value => userName.current = value}
               />
            </View >

            <View style={{ paddingBottom: 20 }}>
               <Text style={[styles.title, {color: theme.textColor}]}>Email or Username</Text>
               <TextInput style={[styles.textInput, {color: theme.textColor}]}
                  keyboardType='email-address'
                  onChangeText={value => email.current = value}
               />
            </View >

            <View>
               <Text style={[styles.title, {color: theme.textColor}]}>Password</Text>

               <View style={styles.passInput}>
                  <TextInput style={{ height: 50, width: 270, color: theme.textColor }}
                     secureTextEntry={hide}
                     onChangeText={value => password.current = value}
                  />

                  <TouchableOpacity style={{ width: 50, alignItems: 'center' }} onPress={hidePass}>
                     <Feather name={eye} size={24} color={theme.textColor} />
                  </TouchableOpacity>
               </View>

            </View>
         </View>

         <View style={styles.rememberContainer}>
            <TouchableOpacity style={styles.rmbWrapLeft} onPress={handleRemember}>
               <Fontisto name={remember} size={20} color={theme.textColor} />
               <Text style={{ fontSize: 12, color: theme.textColor }}>Remember me</Text>
            </TouchableOpacity>
            <TouchableOpacity>
               <Text style={{ color: 'tomato', fontSize: 12 }}>Forgot password?</Text>
            </TouchableOpacity>
         </View>

         <View>
            {loading
               ? (
                  <Loading size={200} />
               )
               : (
                  <TouchableOpacity style={styles.signInBtn} onPress={handleSignUp} >
                     <Text style={{ color: theme.textColor, fontSize: 17, fontWeight: 'bold' }}>Sign Up</Text>
                  </TouchableOpacity>
               )
            }
         </View>

         <View style={styles.orContainer}>
            <View style={{ height: 0.5, width: 130, backgroundColor: theme.textColor }}></View>
            <Text style={{color: theme.textColor}}>Or</Text>
            <View style={{ height: 0.5, width: 130, backgroundColor: theme.textColor }}></View>
         </View>

         <View style={styles.otherMethod}>
            <TouchableOpacity style={[styles.fbBtn, {borderColor: theme.textColor}]}>
               <Ionicons name="logo-facebook" size={27} color="blue" />

               <Text style={{ fontSize: 12, fontWeight: 'bold', paddingLeft: 10, color: theme.textColor }}>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.fbBtn, {borderColor: theme.textColor}]}>
               {/* <Ionicons name="logo-google" size={24} color="black" /> */}
               <Image source={require('../assets/icon/google.png')} style={{ height: 24, width: 23 }} />
               <Text style={{ fontSize: 12, fontWeight: 'bold', paddingLeft: 10, color: theme.textColor }}>Google</Text>
            </TouchableOpacity>
         </View>

         <View style={styles.signUpText}>
            <Text style={{ fontWeight: 'bold', color: theme.textColor }}>Have an account? </Text>
            <TouchableOpacity onPress={() => router.back()}>
               <Text style={{ color: '#16a349', fontWeight: 'bold' }}>Sign In</Text>
            </TouchableOpacity>
         </View>

      </SafeAreaView>
   )
}

export default SignUp;

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
   },
   welcomeText: {
      fontSize: 25,
      fontWeight: 'bold',
      paddingLeft: 20,
      marginVertical: 50
   },
   title: {
      // fontSize: 17,
      fontWeight: 'bold',
      alignItems: 'center',
      paddingLeft: 20,
      paddingBottom: 5
      // borderWidth: 1,
   },
   textInput: {
      height: 50,
      width: 330,
      // borderWidth: 1,
      borderRadius: 10,
      paddingLeft: 10,
      backgroundColor: 'grey',
      alignSelf: 'center',
   },
   passInput: {
      flexDirection: 'row',
      height: 50,
      width: 330,
      borderRadius: 10,
      paddingLeft: 10,
      paddingHorizontal: 10,
      backgroundColor: 'grey',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
      // borderWidth: 1
   },
   rememberContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 30,
      paddingVertical: 10,
      // borderWidth: 1
   },
   rmbWrapLeft: {
      width: 105,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // borderWidth: 1
   },
   signInBtn: {
      height: 55,
      width: 300,
      backgroundColor: '#16a349',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      marginTop: 50
   },

   orContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      paddingVertical: 20
   },

   otherMethod: {
      width: 300,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'space-around',
      // borderWidth: 1
   },

   fbBtn: {
      flexDirection: 'row',
      height: 40,
      width: 140,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      borderWidth: 0.5
   },

   signUpText: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 55,
      // borderWidth: 1
   }
});