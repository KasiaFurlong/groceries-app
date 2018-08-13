import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Keyboard, Input, AsyncStorage} from 'react-native';
import {Header, Left, Button, Icon, Body, Title, Right, Item} from 'native-base';

class Landing extends React.Component{
	state = {
    	name: "Eggs",
      	text: "",
    	selectionList: ["Olive oil", "Eggs", "Butter", "Oat milk", "Parmesan", "Cherry tomatoes", "Spinach", "Ice cream", "Zucchini", "Popcorn", "Sweetcorn", "Deodorant", "Pipe cleaner", "Flour", "Blueberries", "Bananas", "Coffee", "Yoghurt", "Emergency pizza", "Toilet paper", "Kitchen roll", "Cheese", "Toast bread", "Muesli", "Orange juice", "Wine", "Beer", "Veggie sausages", "Lemon", "Pear", "Apple", "Salmon", "Tortellini", "Spaghetti", "Shower gel", "Shaving foam", "Hand soap", "Dishwasher tabs", "Laundry detergent"],
      	tobuyfromlist: ["Test Eggs", "Butter"]
  }
	switchScreen = (currentScreen) => {
      this.setState({currentScreen});
  	}
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
  	};
	render(){
		return(
		<View style = {styles.wholeStyle}>
		      <Header>
		          <Left>
		          <Button transparent
		            onPress = {() => this.setStore()}
		          >
		              <Icon name="bookmark"/>
		          </Button>
		          </Left>
		          <Body>
		            <Title> Landing Page </Title>
		          </Body>
		          <Right>
		            <Button transparent
		            onPress={()=> this.props.switchScreen("List")}
		            >
		              <Icon name="basket"/>
		            </Button>
		          </Right>
		    </Header>
		    <View>
		    </View>
    	</View>
    )}
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
export default Landing;