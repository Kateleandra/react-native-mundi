import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { UserImg, QRcode } from './styles';

import userImg from '../../assets/user01.jpg'
import qrCode from '../../assets/QRcode.png'

const User = ({ navigation }) => (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main') }>
        <Icon style={styles.icon} name="chevron-left" size={20} />
      </TouchableOpacity>

      <View style={styles.body}>
        <UserImg style={styles.userImg} source={userImg} />          
        <View style={styles.dataset}>
          <Text style={styles.name}>Eduardo Viana</Text>
          <Text style={styles.office}>UX Designer</Text>
        </View>  

          <View style={styles.cardData}>
            <Text style={{ color: '#FFFF' }}>eduardo.viana@mundiale.com.br</Text>
          </View>   
          <QRcode style={styles.qrCode} source={qrCode} />          
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

    body:{
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
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
      color: '#FFFF',
      fontWeight: 'bold', 
    },

    office:{
      color: '#FFFF',
    },

    icon:{
      color:'#FFF',
      padding: 2,
    },

    cardData:{
      borderRadius: 10,
      backgroundColor: '#405364',
      width:350,
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 100,
    }
})