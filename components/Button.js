import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ name, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.button}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius:15,
    alignSelf:'top',
    width: 150,
    height: 60,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    color:'white',
    fontWeight:'bold'
  }
});
