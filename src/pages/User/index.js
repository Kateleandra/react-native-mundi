import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, UserImg } from './styles';

import userImg from '../../assets/user01.jpg'

const User = ({ navigation }) => (


    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main') }>
          <Icon style={styles.icon} name="keyboardBackspace" size={20} />
      </TouchableOpacity>
      <View>
        <UserImg source={userImg} />
        <View style={styles.dataset}>
          <Text style={styles.name}>Eduardo Viana</Text>
          <Text style={styles.profes}>UX Designer</Text>
        </View>          
      </View>
    </View>
);

User.navigationOptions = {
  title: 'User',
}

export default User;

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: '#01b5e8',
    },

    title:{
        color: '#FFF',
        fontSize: 25,
        textTransform: 'uppercase',
        margin: 20,
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
      color:'#FFF',
      padding: 2,
    }
})