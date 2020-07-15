import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import React, {useState} from "React";

// You can import from local files
import AssetExample from './components/AssetExample';
import Button from './components/Button';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
const [todos, setTodos] = useState([]);
function addTodo (todo){
  setTodos([todo,...todos]);
}
  const _clickMe = () => {
    alert('DONE');
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>react todo</p>
        <todoform addTodo={addTodo} />
      </header>
    </div>
    <View style={styles.container}>


     
        <Button onClick={_clickMe} name="My todo list" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
