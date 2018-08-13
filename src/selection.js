import React from 'react';
import {View, Text, Platform, Image, ImageBackground, TouchableOpacity, ScrollView, AsyncStorage} from 'react-native';
import {Header, Left, Button, Icon, Body, Title, Right } from 'native-base';

class Selection extends React.Component{
	state = {
    	name: "Eggs",
      text: "",
    	selectionList: ["Olive oil", "Eggs", "Butter", "Oat milk", "Parmesan", "Cherry tomatoes", "Spinach", "Ice cream", "Zucchini", "Popcorn", "Sweetcorn", "Deodorant", "Pipe cleaner", "Flour", "Blueberries", "Bananas", "Coffee", "Yoghurt", "Emergency pizza", "Toilet paper", "Kitchen roll", "Cheese", "Toast bread", "Muesli", "Orange juice", "Wine", "Beer", "Veggie sausages", "Lemon", "Pear", "Apple", "Salmon", "Tortellini", "Spaghetti", "Shower gel", "Shaving foam", "Hand soap", "Dishwasher tabs", "Laundry detergent"],
      tobuyfromlist: ["Test Eggs", "Butter"]
  }
  switchScreen = (currentScreen) => {
    	this.setState({currentScreen});
  }
  addTobuy = (l) => {
    //var list = this.state.selectionList
    var arr = this.state.tobuyfromlist
    arr.push(l)
    this.setState({tobuyfromlist: arr});
    console.log(this.state.tobuyfromlist);
    this.setStore()
  }
  /*setStore = () => {
      var stringifiedlist = JSON.stringify(this.state.tobuyfromlist);
      AsyncStorage.setItem('2', stringifiedlist);
      //this.setState({ '2': value });
    }*/
  setStore = async list => {
    var list = JSON.stringify(this.state.tobuyfromlist)
      try {
      await AsyncStorage.setItem('list', list);
      }  
      catch (error) {
    // Error retrieving data
    console.log(error.message);
      }
  }
  getStore = async () => {
      try {
        const value = await AsyncStorage.getItem('list');
        if (value !== null) {
          // We have data!!
          console.log(value);
        }
        else {console.log ("no data")}
      }
      catch (error) {
         // Error retrieving data
      }
  }
  renderSelectionList = () => {
  		return this.state.selectionList.map(l =>{
      		return (
            <TouchableOpacity 
              key = {l}
              onPress = {() => {this.addTobuy(l)}}
              >
        		  <Text style={styles.tobuystyle}>{l}</Text>
            </TouchableOpacity>
        	)
    	})
  }
  	/*addToList = () => {
    	var newSelection = this.state.text;
    	var arr = this.state.tobuy;
    	arr.push(newSelection);
    // below we are setting the state of todo to the new array (variable above)
    	this.setState({tobuy: arr, text:""});
  	}*/
	render(){
		return(
			<View style={styles.viewStyle}>
				<Header>
    			<Left>
    				<Button transparent
            onPress={()=> this.props.switchScreen("Selection")}
            >
        				<Icon name="bookmark"/>
      			</Button>
    			</Left>
    			<Body>
      			<Title> Saved Items </Title>
    			</Body>
    			<Right>
      			<Button transparent
            onPress={()=> this.props.switchScreen("List")}
      			>
        				<Icon name="basket"/>
      			</Button>
    			</Right>
		    </Header>
        <ScrollView 
        contentContainerStyle={styles.listViewStyle}>{this.renderSelectionList()}</ScrollView>
      </View>
		)
	}
}

const styles = {
	viewStyle:{
		flex:1,
		width: '100%',
    height: 100
	},
  tobuystyle: {
    fontSize: 20
  },
  listViewStyle:{
    flex:1,
    width: '100%',
    marginTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }

};

export default Selection;