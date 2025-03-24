import { StyleSheet, Platform, Dimensions } from 'react-native';
import { Text, View } from './Themed';

const PlatformMap = () => {
  if (Platform.OS === 'web') {
    return (
      <View style={styles.webFallback}>
        <Text style={styles.webText}>
          Maps are only available in the mobile app
        </Text>
      </View>
    );
  }

  // Dynamic import for native platforms only
  const MapView = require('react-native-maps').default;

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  webFallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  webText: {
    color: '#00FF41',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default PlatformMap;