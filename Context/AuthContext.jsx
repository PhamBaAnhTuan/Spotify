import { createContext, useState, useContext, useEffect } from "react";
// Firebase auth
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "@firebase/auth";
import { auth, db } from "@/FirebaseConfig/FirebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter, useNavigation } from "expo-router";
import { ToastAndroid } from "react-native";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
   // Router
   const router = useRouter();
   const navigation = useNavigation();
   // Short alert
   // const showToast = () => {
   //    ToastAndroid.show('Signed in successfully !', ToastAndroid.LONG);
   //  };
   // User sign in provider
   const [user, setUser] = useState(null);
   const [isAuthenticated, setIsAuthenticated] = useState(undefined);

   useEffect(() => {
      const unsub = onAuthStateChanged(auth, (user) => {
         if (user) {
            setIsAuthenticated(true);
            setUser(user);
         } else {
            setIsAuthenticated(false);
            setUser(null);
         }
      })
      // setIsAuthenticated(true);
   }, [isAuthenticated]);

   const SignInMethod = async (email, password) => {
      try {
         const response = await signInWithEmailAndPassword(auth, email, password);
         console.log('User Signed In:', response?.user?.email);

         // Get user data
         const userRef = doc(db, "user", response?.user?.uid);
         const docSnap = await getDoc(userRef);
         const data = docSnap.data();

         if (docSnap.exists()) {
            console.log("User data:", data);
            setUser(data);
         } else {
            console.log("No such document!");
         }
         ToastAndroid.show('Signed in successfully !', ToastAndroid.LONG);
         return { success: true, data: response?.user?.email }
      } catch (error) {
         let msg = error.message;
         if (msg.includes('(auth/invalid-email)')) { msg = 'Invalid email!' }
         if (msg.includes('(auth/missing-password)')) { msg = 'Please enter your password' }
         if (msg.includes('(auth/invalid-credential)')) { msg = 'Invalid email or password!' }
         return { success: false, msg };
      }
   };

   const SignUpMethod = async (email, password, userName) => {
      try {
         const response = await createUserWithEmailAndPassword(auth, email, password, userName);
         console.log('User Signed Up: ', response?.user?.email);

         const userRef = doc(db, 'user', response?.user?.uid);
         // Set user data
         const setData = await setDoc(userRef, {
            id: response?.user?.uid,
            userName,
            email,
            password
         });
         // Get user data
         const getData = await getDoc(userRef);
         const data = getData.data();

         if (getData.exists()) {
            console.log("User data:", data);
            setUser(data);
         } else {
            console.log("No such document!");
         }
      
         console.log('Saved user: ', response?.user?.email);
         ToastAndroid.show('Signed up successfully !', ToastAndroid.LONG);
         return { success: true, data: response?.user?.email };
      } catch (error) {
         let msg = error.message;
         if (msg.includes('(auth/invalid-email)')) { msg = 'Invalid email!' }
         if (msg.includes('(auth/email-already-in-use)')) { msg = 'Email already in use!' }
         if (msg.includes('(auth/missing-email)')) { msg = 'Please enter your email' }
         if (msg.includes('(auth/missing-password)')) { msg = 'Please enter your password' }
         if (msg.includes('(auth/weak-password)')) { msg = 'Invalid password!\nPassword required 6 characters' }
         return { success: false, msg };
      }
   };

   const SignOutMethod = async () => {
      try {
         await auth.signOut();
         console.log('User Signed Out');
         ToastAndroid.show('Signed out successfully !', ToastAndroid.LONG);
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <AuthContext.Provider value={{ router, navigation, user, isAuthenticated, SignUpMethod, SignInMethod, SignOutMethod }} >
         {children}
      </AuthContext.Provider>
   )
};

export const useAuth = () => {
   const value = useContext(AuthContext);
   if (!value) {
      throw new Error('useAuth must be used within a AuthProvider');
   }
   return value;
}