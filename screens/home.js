import React from 'react';
import { Text, View, Image , StyleSheet } from 'react-native';

 

class HomeScreen extends React.Component {
 

  render() {

    
    return (
      <View style={{ alignItems: 'center', }}>

        <Image
          source={require('../images/homeImage.png')}
          style={{ height:300, width: 500 }}
          resizeMode="contain"/>

          <Image source={require('../images/logo2.png')}
          style={{position:"absolute", top:80}}>
          </Image>

        <Text>{'\n'}</Text>

        <Text style ={styles.about}>About Us</Text>

        <Text style={styles.aboutText}>This App was built to help you can save all your favourite recipes. Keeping them here in a convenient place.
        Soon an additional feature will be provided within the next year where You can filter
        whatever meal you're looking for from desserts to dinners. the founder, Pareshma Rampersaud, is a full time student
        at Humber College. This app is still in the works! for any technical difficulties please contact us at:
        email@gmail.com</Text>
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
 about: {
   fontSize:22,
   alignSelf: 'flex-start',
   paddingLeft:30,

 }, 
 aboutText: {
   color:'black',
   width:'90%',
   height:'40%',
   alignSelf: 'flex-start',
   paddingLeft: 30,
   paddingTop:15,
   fontSize:16,
 }

});

export default HomeScreen;
