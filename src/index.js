import React from 'react';
import { View, Image, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

export default function App(){

  const datas = {
    'name': 'Kate',
    'profissao': 'Desenvolvedora Front End'
  };

  async function openData(){
    console.log("teste2")
  }

    return (
    <>
      <StatusBar barStyle="ligh-content" />
      <View style={styles.container}>
        <Text>Hello wold</Text>
        
        <View style={styles.body}>
            <Text style={styles.title}  >d</Text>
            <Text style={styles.title}>f</Text>
            <Text style={styles.title}>k</Text>
        </View>

        <View style={styles.card}>

          <FlatList data={datas} keyExtractor={datas => datas.id}
          renderItem={({item: datas}) =>(
            <Text style={styles.dataset}>{datas.name}</Text>

          )}/>
                   
          <Text style={styles.dataset}>Eduardo Viana</Text>
          <Text style={styles.dataset}>UX Designer</Text>
          <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={openData}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
    )
}

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