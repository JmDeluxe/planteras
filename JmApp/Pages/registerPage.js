import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Dimensions, ImageBackground, TextInput, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
 const {height} = Dimensions.get('window')
const windowWidth = Dimensions.get('window').width;
import { authentication } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Register(props) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setcPassword] = useState('');

  const registerUser = () => {
    if(password.length <= 6) {
      Alert.alert('Password', 'Password is too weak', [
        {text: 'Fine duh'}
      ])
    }else if(password != cPassword) {
      Alert.alert('Confirm password!', 'Its not the same', [
        {text: 'My bad!'}
      ])
    }else {
    createUserWithEmailAndPassword(authentication, email, password)
    .then((re) => {
      console.log(re);
      Alert.alert('REGISTERED!', 'Thank you for joining our community', [
        {text: 'THANKS'}
      ])
      props.navigation.navigate('Login')
    })
    .catch((re) => {
      console.log(re);
      if (re.code == 'auth/email-already-in-use') {
        Alert.alert('Duplicate email', 'Something is wrong try different email', [
          {text: 'OKAY'}
        ])
      }
    })
   }
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
        source={require('../assets/cooking.png')} />
      </View>
        <View  style ={{
          paddingTop: 20,
          justifyContent:'center',
          alignItems: 'center',
        }}>
        <Text style = {{
          fontSize: 40,
        }}> Create an Account</Text>
        </View>
        <View  style ={{
          paddingTop: 5,
          justifyContent:'center',
          alignItems: 'center',
        }}>
        <Text style = {{
          fontSize: 25,
        }}> Always start a new</Text>
        </View>
        <View style = {{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 50,
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
      
      <View style = {{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
        }}>
        <TextInput 
            placeholder= 'Confirm password'
            placeholderTextColor= 'black'
            value= {cPassword}
            onChangeText={text => setcPassword(text)}
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
        onPress={registerUser}
        >
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
