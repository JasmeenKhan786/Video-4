import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import Login from './screens/Login'
//Components
// Functional and Class

//JSON - Format
// {key:value, key:value, key:value}

//Props - Pass values from one component to another
//States - Store values inside a class/component

//Component Lifecycle
//Mounting
//Updating
//Unmounting

export default class App extends React.Component {
  
  render() {
    
    return (
    <Login/>
    );
  }
}

const styles = StyleSheet.create({

});
