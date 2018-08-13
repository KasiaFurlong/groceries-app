//import stuff
import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Keyboard, StyleSheet} from 'react-native';
import {Header, Left, Button, Icon, Body, Title, Right} from 'native-base';
import Selection from './src/selection';
import List from './src/list';

//create stuff
export default class App extends React.Component{
  state = {
      currentScreen: "List"
  }
  switchScreen = (currentScreen) => {
    this.setState({currentScreen});
  }
  renderScreen = () => {
    if(this.state.currentScreen === "Selection"){
      return(
        //in the line below, we use switchScreen as a prop
        <Selection switchScreen = {this.switchScreen}/>
        )
    }
    else if (this.state.currentScreen === "List"){
      return(
        <List switchScreen = {this.switchScreen}/>
        )
    }
    else if (this.state.currentScreen === "Landing"){
      return(
        <Landing switchScreen = {this.switchScreen}/>
        )
    }
  }


  render() {
    return (
    <View style={styles.container}>

      //the line below renders the relevant screen
      {this.renderScreen()}
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }
});