import React from 'react';
import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Header from './../../components/Header'
import Icon from 'react-native-vector-icons/MaterialIcons'


const Main = ({ navigation }) => (
  <View style={styles.container}>

    <Header />

    <View style={styles.body}>
      <Text style={styles.title}>d</Text>
      <Text style={styles.title}>f</Text>
      <Text style={styles.title}>k</Text>
    </View>

    <View style={styles.card}>                 
      <Text style={styles.dataset}>Eduardo Viana</Text>
      <Text style={styles.dataset}>UX Designer</Text>
      <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={() => navigation.navigate('User') }>
      <Icon name="add" size={20} color="#adadad" />
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
        display: 'flex'
    },
    title:{
        color: '#FFF',
        fontSize: 25,
        textTransform: 'uppercase',
    },
    card:{
      backgroundColor: '#FFF',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      width: 150,
      height: 50,
    },
    dataset: {
      color: '#d1d1d1',
    },

    button:{
    }
})