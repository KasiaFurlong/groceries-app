import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Keyboard, Input, AsyncStorage} from 'react-native';
import {Header, Left, Button, Icon, Body, Title, Right, Item} from 'native-base';

class List extends React.Component{
  state = {
    text: "",
    tobuy: []
  }
  /*getStore = async () => {
  try {
    const value = await AsyncStorage.getItem('list');
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
     // Error retrieving data
   }
  }
  componentWillMount(){
    this.getStore()
    }*/
  switchScreen = (currentScreen) => {
      this.setState({currentScreen})
      console.log()
  }
  addTobuy = () => {
    var newTobuy = this.state.text;
    var arr = this.state.tobuy;
    arr.push(newTobuy);
    // below we are setting the state of todo to the new array (variable above)
    this.setState({tobuy: arr, text:""});
    //this.setStore();
    console.log()
  }
  deleteTobuy = (t) => {
    var arr = this.state.tobuy;
    //below we are finding the position of t in the array
    var pos = arr.indexOf(t);
    arr.splice(pos, 1);
    this.setState({tobuy: arr});
    console.log()
  }

//this function below will render the array "todo". We use the map function to render each item individually. 
//The key must be on the uppermost level
  renderTobuy = () => {
    return this.state.tobuy.map(t =>{
      return(
        <TouchableOpacity key = {t}>
          <Text 
            style = {styles.tobuy}
            onPress = {() => {this.deleteTobuy(t)}}
            >{t}</Text>
        </TouchableOpacity>
        )
    })
    console.log()
  }
  render(){
    return(
      <View style ={styles.wholeStyle}>
        <Header>
          <Left>
          <Button transparent
            onPress={()=> this.props.switchScreen("Selection")}
          >
              <Icon name="bookmark"/>
            </Button>
          </Left>
          <Body>
            <Title> Shopping List </Title>
          </Body>
          <Right>
            <Button transparent
            onPress={()=> this.props.switchScreen("List")}
            >
              <Icon name="basket"/>
            </Button>
          </Right>
        </Header>
      <View style ={styles.viewStyle}>
        <Item rounded>
          <TextInput
            placeholder='Add Item'
            style={styles.inputStyle}
            onChangeText={(text)=>this.setState({text})}
            value={this.state.text}
            onSubmitEditing={Keyboard.dismiss, this.addTobuy()}
          /> 
        </Item>
        <View style={{marginTop: 50}}/>
          //something is wrong here with an invariant violation
          {this.renderTobuy()}
        </View>
      </View>
      )
  }
}
const styles = {
  wholeStyle: {
    flex: 1,
    backgroundColor: "white",
    width: '100%'
  },
  viewStyle: {
    //marginTop: 30, 
    alignItems: 'center', 
    justifyContent: 'flex-start',
    margin: 10,
    flex: 1
  },
  inputStyle: {
    height:40,
    width: '100%'
  },
  header: {
    fontSize: 30,
    color: "#696969",
    fontWeight: "bold"
  },
  tobuy: {
    fontSize: 20
  }
};

//export stuff
export default List;