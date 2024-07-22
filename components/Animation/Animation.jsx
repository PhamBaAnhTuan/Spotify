import { View } from "react-native";
import LottieView from "lottie-react-native";

export const Loading = () => {
   return (
      <View style={{ height: 80 }}>
         <LottieView style={{ flex: 1 }} source={require('../../assets/animation/loading.json')} autoPlay loop />
      </View>
   )
};