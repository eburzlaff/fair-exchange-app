import { 
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  Image,
  SafeAreaView,
  ToastAndroid,
  Alert,
  StatusBar,
  Button,
  Dimensions,
  Platform
} from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Card from './app/components/Card'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

export default function App() {
  console.log(useDeviceOrientation());
  console.log(Dimensions.get('screen'))

  return (
    <ListingDetailsScreen/>

  );
}
