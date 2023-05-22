import { StatusBar } from 'expo-status-bar';
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const {height} = Dimensions.get('window')
const windowWidth = Dimensions.get('window').width;
import Welcome from './Pages/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Stack} from 'react-native-gesture-handler';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView>
          <View  style ={{
        paddingTop: 40,
        justifyContent:'center',
        alignItems: 'center',
      }}>
      <Text style = {{
        fontSize: 20,
      }}> L O G I N </Text>
    </View>
    <View style ={{
        paddingTop: 5,
      }}>
      <ImageBackground 
      style = {{
        height: height / 2.5
      }}
      resizeMode='contain'
      source={require('./assets/log-in.png')} />
    </View>

    <View style ={{
        paddingTop: 20,
    }}></View>

    <View style={{
      marginVertical: 4,
      paddingLeft: 30,
      paddingRight: 30,
    }}>
      <TextInput
      placeholder='Email'
      underlineColorAndroid="transparent"
      style = {{
        fontSize: 20,
        paddingLeft: 40,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
        borderRadius: 40,
        borderColor: 'orange',
        borderWidth: 1
      }}
      />
    </View>

    <View style={{
      marginVertical: 4,
      paddingLeft: 30,
      paddingRight: 30,
    }}>
      <TextInput
      placeholder='Password'
      secureTextEntry
      style = {{
        fontSize: 20,
        paddingLeft: 40,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
        borderRadius: 40,
        borderColor: 'orange',
        borderWidth: 1,
        
      }}
      />
    </View>
    <View style ={{
        paddingTop: 20,
    }}></View>

<View style ={{
      ustifyContent:'center',
      alignItems: 'center',
      paddingVertical: 1,
      paddingHorizontal: 2
      
    }}> 
      <TouchableOpacity style = {{
      width: 200,
      paddingVertical: 5,
      paddingHorizontal: 20,
      borderRadius: 50,
      with: 50,
      backgroundColor: 'orange',
      }}>
        <Text style ={{
          color: 'black',
          fontSize: 30,
          textAlign: 'center'
      }}> Login </Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  );
}