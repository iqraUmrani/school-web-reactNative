import React from 'react';
import {
  // SafeAreaView,
   StyleSheet,
   ScrollView,
  AppRegistry,
  View,
  Text,
  // StatusBar,
} from 'react-native';
//import './About.css';


const styles = StyleSheet.create({

  sectionHead:{
      backgroundColor: "cadetblue",
      textAlign: "center",
      marginBottom : 40
      
  },
  sectionBody: {
      textAlign: "center",
      justifyContent: "center",
      fontSize: 20,
      fontWeight : "bold",

      // padding:15 30 15 30,
  },
   sectionPara : {
      textAlign: 'center',
      justifyContent: "center",
   }

 } )    


  const About= () =>{
     
        return (
           
                
                <View style = {styles.sectionHead}>
                  
            
              <Text style = {styles.sectionBody}>
                    we make your skills better :-
                </Text>
                {/* </View>   */}
                {/* <View> */}
                <Text style = {styles.sectionPara}>
                
                There is a platform where we improve your different skills and professional level.
                We are learning you a different language with a best master teachers. We are providing you different notes from qualified teachers.  
            
            </Text>
                {/* </View> */}
                
                
            </View>
                
                
              )
             }

                

 export default About;