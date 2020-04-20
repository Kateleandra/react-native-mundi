import React from 'react';
import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Header from './../../components/Header'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { UserImg } from './styles';

import userImg from '../../assets/user01.jpg'

const Main = ({ navigation }) => (
  <View style={styles.container}>

    <Header />

    <View style={styles.body}>
      <Text style={styles.title}>d</Text>
      <Text style={styles.title}>f</Text>
      <Text style={styles.title}>k</Text>
    </View>

    <View style={styles.card}>  
      <UserImg style={styles.userImg} source={userImg} />          

        <View style={styles.dataset}>
          <Text style={styles.name}>Eduardo Viana</Text>
          <Text style={styles.profes}>UX Designer</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('User') }>
          <Icon style={styles.icon} name="add" size={20} />
        </TouchableOpacity>
    </View>
  </View>
);

Main.navigationOptions = {
  title: 'Main',
}

export default Main;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#01b5e8',
    },
    body:{
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },

    title:{
        color: '#FFF',
        fontSize: 25,
        textTransform: 'uppercase',
        margin: 20,
    },

    card:{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: '#FFF',
      borderRadius: 10,
      width: 280,
      maxHeight:80,
      marginLeft: 50,
    },

    dataset: {
      flex:1,
      padding: 10,
      borderRadius: 10,
    },

    name: {
      color: '#d1d1d1',
      fontWeight: 'bold', 
    },

    profes:{
      color: '#d1d1d1',
    },

    icon:{
      color:'#adadad',
      padding: 2,
    }
})