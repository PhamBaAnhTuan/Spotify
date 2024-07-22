import { createContext, useState, useContext, useEffect } from "react";
// Fire store
import {collection, getDocs} from 'firebase/firestore';
import { db } from "@/FirebaseConfig/FirebaseConfig";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
	// Music type
   const [musicType, setMusicType] = useState([]);
   useEffect(() => {
		const getMusicType = async () => {
			try {
				const ref = collection(db, "musicType/");
				const query = await getDocs(ref);
				const data = query.docs.map((doc) => doc.data());
				setMusicType(data);
				console.log("Music type data:", data);
				// console.log('User list:', userList )
			} catch (error) {
				console.log(error);
			}
		};
		getMusicType();
	}, []);

	// Daily songs
   const [dailySongs, setDailySongs] = useState([]);
   useEffect(() => {
		const getDailySongs = async () => {
			try {
				const ref = collection(db, "dailySongs/");
				const query = await getDocs(ref);
				const data = query.docs.map((doc) => doc.data());
				setDailySongs(data);
				console.log("Daily songs data:", data);
				// console.log('User list:', userList )
			} catch (error) {
				console.log(error);
			}
		};
		getDailySongs();
	}, []);

	// Albums
   const [albums, setAlbums] = useState([]);
   useEffect(() => {
		const getAlbums = async () => {
			try {
				const ref = collection(db, "album/");
				const query = await getDocs(ref);
				const data = query.docs.map((doc) => doc.data());
				setAlbums(data);
				console.log("Album data:", data);
				// console.log('User list:', userList )
			} catch (error) {
				console.log(error);
			}
		};
		getAlbums();
	}, []);

	const [artist, setArtist] = useState([]);
	useEffect(() => {
		const getArtist = async () => {
			try {
				const ref = collection(db, 'artist/');
				const query = await getDocs(ref);
				const data = query.docs.map((doc) => doc.data());
				setArtist(data);
				console.log('Artist data:', data);
			} catch (error) {
				console.log(error);
			}
		};
		getArtist();
	}, []);

   return(
      <DataContext.Provider value={{ musicType, dailySongs, albums, artist }} >
         {children}
      </DataContext.Provider>
   )
};

export const useData = () => {
   const value = useContext(DataContext);
   if (!value) {
      throw new Error('useData must be used within a DataProvider');
   }
   return value;
}