import React from 'react';
import { Text, View } from 'react-native';
import AddRecipe from '../components/addRecipe';

class PostScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>

        <AddRecipe></AddRecipe>
        
      </View>
    );
  }
}

export default PostScreen;
