import React from 'react';
import { Text, View, Image , StyleSheet } from 'react-native';
import firebase from '../firebase';


class RecipeScreen extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        //an empty array where the data will go
        list: []
      }
    }

  mydatabase = firebase.database().ref('recipe/' )


  componentDidMount(){

    //Grab a snapshot of all the data from the database
    this.mydatabase.on('value', recipes =>{
      
       recipes = recipes.val();

      //empty array to put recipe data in
      let array = [];
      const recipeKeys = Object.keys(recipes);

      for (let i = 0 ; i < recipeKeys.length; i++){
        const recipeObject = recipes[recipeKeys[i]]

        //push recipe data into array
        array.push({...recipeObject, recipes: recipeKeys[i]})
      }
      //list = array
      this.setState({list : array})
      console.log(this.state.list)
    })

  }


  render() {

    
    return (
      <View>

        <Text style={dataStyles.recipeTitle}>All My Recipes</Text>

        {
          this.state.list.map((listItem, index)=>
          <View style={{padding:20}}>
        {/* Get data, display JSON data, Select the item name and description from recipe */}
          <Text key={index} style={dataStyles.title}>{`${JSON.stringify(listItem.name)}`} {'\n'}</Text>
          <Text key={index} style={dataStyles.recipeIng}>{`${JSON.stringify(listItem.description)}`} {'\n'}</Text>

          </View>
          )
        }
 

      </View>
    );
  }
}

const dataStyles = StyleSheet.create({

  recipeTitle: {
    color:'white',
    paddingTop:20,
    paddingBottom:20,
    fontSize:25,
    backgroundColor:'#505050',
    textAlign:'center',
  },
  title: {
    fontSize:20,
    textAlign:'left',
    color:'red',
    fontWeight: "bold",
    fontStyle: 'italic'
  }, 

  recipeIng: {
    textAlign: 'left',
    fontSize:16,
  }
  
 
 });

export default RecipeScreen;
