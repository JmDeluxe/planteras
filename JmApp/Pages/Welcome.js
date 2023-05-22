import { StatusBar } from 'expo-status-bar';
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const {height} = Dimensions.get('window')
const windowWidth = Dimensions.get('window').width;

export default function Welcome() {
  return (
    <SafeAreaView>
      {/* <View style ={{
          paddingTop: 60,
        }}>
        <ImageBackground 
        style = {{
          height: height / 2.5
        }}
        resizeMode='contain'
        source={require('./assets/checking.png')} />
      </View> */}
      <View  style ={{
          paddingTop: 40,
          justifyContent:'center',
          alignItems: 'center',
        }}>
        <Text style = {{
          fontSize: 20,
        }}> Welcome to my application</Text>
      </View>
      <View style ={{
          paddingTop: 100,
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
        }}> Register </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
