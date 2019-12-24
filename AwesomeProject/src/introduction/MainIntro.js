import React from "react";
import {Image,StyleSheet, Text, View} from "react-native";
// import Manage from '../Management/Management';
import Appes from "../Login/App"
import Nav_Parent from "../Parents/Nav_parents"
import { NativeRouter, Link ,Route} from "react-router-native";
const styles = StyleSheet.create({
  introduce :{
    width: "100%",
        backgroundColor: "rgb(241, 199, 241)",
        marginTop :20,
        marginBottom: 40,
        
} ,
introduceUl :{
  // display : "flex",
  flexDirection: "row",
      justifyContent: "space-between"
},
introduceLi : {
  // flex : 3,
  // display :"flex",
  // flexDirection : "column",
  fontSize: 20,
  fontWeight : "bold",
  


},


})
export default function Intro() {
    return(
     
      
    
    



      <NativeRouter>
            <View style = {styles.introduce}>
            



            <View style = {styles.introduceUl}>
            
             <Link to = "/parent">
             <Text style={styles.introduceLi}> Parents</Text></Link>     
             <Image  style = {{width: 90, height: 90,justifyContent :"center", flexDirection:"row"}}source = {require('../Images/logo.png')}/>
            {/* </View> */}
                    {/* <View><img src={logo} className="logo" /></View> */}
                    {/* <View style = {styles.introduceUl}> */}
                    <Link to = "/management">
                    <Text style = {styles.introduceLi}>Management</Text>
                    </Link>
                    
                    
                    </View>
                    
                
            
            
  
            
          {/* <Route path="/Parents"component =/> */}
           
          <Route path ="/Parent" component = {Nav_Parent}/>
          <Route path="/Management" component = {Appes}/>
            
          
         
        </View>
        </NativeRouter>



        
        )
};
