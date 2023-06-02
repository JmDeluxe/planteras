import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Dimensions, ImageBackground, TextInput, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
 const {height} = Dimensions.get('window')
const windowWidth = Dimensions.get('window').width;
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authentication } from '../firebase'

export default function Login(props) {
  
  const [isSignedIn, setIsSignedIn] = useState(false);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signInUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
    .then((re) => {
      props.navigation.navigate('Home');
    })
    .catch((re) => {
      Alert.alert('Lost or Lose?', 'Account not found!', [
        {text: 'really?'}
      ])
    })
  }

  return (

    <SafeAreaView>
        <View style ={{
          paddingTop: 20,
        }}>
        <ImageBackground 
        style = {{
          height: height / 2.5
        }}
        resizeMode='contain'
        source={require('../assets/log-in.png')} />
      </View>
        <View  style ={{
          paddingTop: 20,
          justifyContent:'center',
          alignItems: 'center',
        }}>
        <Text style = {{
          fontSize: 40,
        }}> Welcome back!</Text>
        </View>
        <View  style ={{
          paddingTop: 5,
          justifyContent:'center',
          alignItems: 'center',
        }}>
        <Text style = {{
          fontSize: 25,
        }}> we miss you 🥺</Text>
        </View>
        <View style = {{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 30,
        }}>
        <TextInput 
            placeholder= 'Email'
            placeholderTextColor= 'black'
            value= {email}
            onChangeText={text => setEmail(text)}
            style = {{
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 5,
                borderColor: 'black',
                borderWidth: 1
            }}
        />
      </View>
      <View style = {{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
        }}>
        <TextInput 
            placeholder= 'Password'
            placeholderTextColor= 'black'
            value= {password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            style = {{
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 5,
                borderColor: 'black',
                borderWidth: 1
            }}
        />
      </View>

      <View style ={{
        ustifyContent:'center',
        alignItems: 'center',
        paddingVertical: 1,
        paddingTop: 20
      }}> 
        <TouchableOpacity style = {{
        width: 200,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 50,
        backgroundColor: 'orange',
        }}
        onPress={signInUser}
        >
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
