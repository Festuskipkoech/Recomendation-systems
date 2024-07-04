import { useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function LandingPage({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Details');
    }, 1500); // delays for 1.5 secs

    return () => clearTimeout(timer); // clean up the timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.centerView}>
        <ActivityIndicator size="large" color="#F4BB44" />
        <Text style={styles.text}>Students DataSpot</Text>
        <Icon name="database" size={110} color="#343434" style={styles.icon} />
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.text}>Powered by</Text>
        <Text style={styles.brandText}>Infinity</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '300',
  },
  brandText: {
    fontSize: 24,
  },
  icon: {
    marginTop: 10,
  },
  bottomView: {
    alignItems: 'center',
    paddingBottom: 45,
  },
});
