import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Dimensions, ImageBackground, TextInput, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
 const {height} = Dimensions.get('window')
const windowWidth = Dimensions.get('window').width;
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authentication } from '../firebase'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Home() {
  
    const[jobs, setFruit] = useState([
        {jobName: 'IT', key: 1},
        {jobName: 'Accounting', key: 2},
        {jobName: 'Cashier', key: 3},
        {jobName: 'Announcer', key: 4},
        {jobName: 'Private Driver', key: 5},
    ]);

  return (
       <View style={styles.cotainer}>
        {jobs.map((job)=>{
            return(
            <View key={job.key}>
                <Text style={styles.item}>Job: {job.jobName}</Text>
                <View style={styles.cotainers}>
                <Ionicons onPress={() => {}} style = {styles.cotainers} name='information-circle-outline' size={30}></Ionicons>
                <Ionicons style = {styles.cotainers} name='mail-outline' size={30}></Ionicons>
                </View>

            </View>
            )
        })}
       </View>
  );
}

const styles = StyleSheet.create({
    cotainer: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 20,
    //   alignItems: 'center',
    //   justifyContent: 'center'
    },
    item: {
        fontSize: 22,
        backgroundColor: 'orange',
        marginTop: 40,
        padding:15
    },
    cotainers: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
      //   alignItems: 'center',
      //   justifyContent: 'center'
      },
  });