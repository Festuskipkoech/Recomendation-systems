import { useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text,StyleSheet, ActivityIndicator} from 'react-native';
export default function LandingPage({navigation}) {
    useEffect(() => {
        const timer= setTimeout(() =>{
            navigation.navigate('FaceScanner');
        }, 1500); //delays for 1.5 secs
        return () =>clearTimeout(timer); //clean up the timer
    }, [navigation]);
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#F4BB44"/>
            <Text style={styles.text}>Students DataSpot</Text>
            <Icon name="database" size={110} color="#343434"/>
            <Text style={styles.text}>Botton stuff</Text>

        </View>
    );
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    icon:{
        marginTop:10,
    },
  });