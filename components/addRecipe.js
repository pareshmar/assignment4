import React, {Component} from 'react';
import { StyleSheet, Text, View , TextInput, Button , Alert, ScrollView} from 'react-native';
import firebase from '../firebase'


class AddRecipe extends Component {

  constructor(props){
    super(props)
    //the current state is empty
    this.state = {
      name: '' ,
      description: '',
      tag: '',
    }
  }

 
  //Adding Data
  Add = () => {
    
    const {description} = this.state;
    const {name} = this.state;
    const {tag} = this.state

    // inputs Name, Description/Ingredients and Tag in firebase

    firebase.database().ref('recipe/' + name).set({

        name : name,
        description : description ,
        tag: tag
       
    });

    Alert.alert(name + " recipe has been added");

  }


  render() {
  return (

    <ScrollView>

    <View style = {styles.container2}> 
          
      {/* Recipe Name */}
      <Text style={styles.labelforBox}>Name of your Recipe</Text>
      <TextInput style = {styles.inputBox} 
        //Updates the State for person
        placeholder="name"
        onChangeText={name => this.setState({name})}>
      </TextInput>
       
     
      <Text>{"\n"} </Text> 

      <Text style={styles.labelforBox}>Description and Ingredients:</Text>
    {/* Description and ingredients */}
      <TextInput style = {styles.inputIngredients} 
        multiline={true}
        //Updates the State 
        onChangeText={description => this.setState({description})}>
      </TextInput>

      <Text>{"\n"} </Text>
     
  
   <Text style={styles.labelforBox}>Tag as : Dinner, Dessert, Breakfast</Text>

    {/* Tag/Filter */}
      <TextInput style = {styles.inputBox} 
        placeholder="tag"
        onChangeText={tag => this.setState({tag})}>
      </TextInput>

      <Text>{"\n"} </Text>


    {/* Button */}
      <View style={{alignSelf:"stretch"}}>
      <Button
         title = "Add Recipe"
         color = "steelblue"
         onPress={this.Add}>
      </Button>
      </View>
    </View>

    </ScrollView>
 
  );
}
}

const styles = StyleSheet.create({

  container2: {
    // aligns items vertically in the container - start-middle-end
    alignItems:"flex-start",
    //positions content according to the width of the 'block' left-center-right
    justifyContent: 'center',
    paddingTop:50,
    paddingBottom:50,
  },

  labelforBox: {
    color: 'black',
    fontWeight: "bold",
    justifyContent:"flex-start",
    padding: 10,
    fontSize:17,
   
  },

  inputBox: {
    width: 300, 
    height:50,  
    borderColor:'steelblue', 
    borderWidth: 2,
    borderRadius:10,
    padding:15,
  },

  inputIngredients: {
    width:300,
    height:300,
    borderColor: 'gray',
    borderWidth:2,
    borderRadius:15,
  }
 

});

export default AddRecipe;