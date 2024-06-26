import React from "react";
import { View,StyleSheet,Dimensions,Text } from "react-native";
import { RNCamera} from 'react-native-camera';
const {width}=Dimensions.get('window');
const overLaySize=width * 0.8;
export default function FaceScanner() {
    return (
        <View style={styles.container}>
            <Text style={styles.top}>Face Scanner</Text>
            <RNCamera 
            style ={styles.camera}
            type={RNCamera.Constants.Type.front}
            captureAudio={false}
            />
            <View style={styles.overlay}>
                <View style={styles.scanBox}/>
            </View>
            <Text style={styles.text}>Algn the face within the frame</Text>
            <View style={styles.buttons}>

            </View>
            <View>
                <Text>The boxes are marked upon verification</Text>
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
    },
    camera: {
      flex: 1,
      width: '100%',
    },
    overlay: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: overlaySize,
      height: overlaySize,
      marginLeft: -overlaySize / 2,
      marginTop: -overlaySize / 2,
      borderWidth: 2,
      borderColor: '#fff',
      borderRadius: overlaySize / 2,
    },
    scanBox: {
      flex: 1,
      borderWidth: 2,
      borderColor: '#F4BB44',
      borderRadius: overlaySize / 2,
    },
    text: {
      position: 'absolute',
      bottom: 40,
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
      paddingHorizontal: 20,
    },
    top:{
        justifyContent:'center',
        textAlign:'center',
        fontSize:24,
    },
    buttons:{

    },
  });
  
