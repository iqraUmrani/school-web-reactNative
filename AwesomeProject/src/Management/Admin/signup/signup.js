import React,{Component} from "react";
import {StyleSheet, Text, View,TextInput,Button,handleSubmit,Form,Alert} from "react-native";
import firebase from 'firebase'


class Logins extends Component {
    constructor() {
      super();
      // this.login = this.login.bind(this);
    //   this.handleChange = this.handleChange.bind(this);
       this.signup = this.signup.bind(this);
      this.state = {
        email:'',
        password: '',
        
        item:[]
      }
      
    }
    
    // handleChange(e) {
    //   e.preventDefault();
    //   this.setState({ [e.target.name]: e.target.value });
    // }
    signup(e){
    
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
          
         })
         .catch((error) => {
             alert(error);
           })
           this.writeUserData()
       }
       writeUserData=()=>{
         firebase.database().ref('users/').push(this.state).catch(error => {
             console.log(error.message)
         });

         this.setState ({
             
             email : " ",
             password : " "
         })
         
     }
     render(){
         return( 
             <View>
                 
                     <View>
                         <Text>Email adress</Text>
                         <TextInput value = {this.state.email} onChangeText = {(email) => this.setState({email})} type="email" name="email" placeholder="Enter email" />
                     </View>
                     <View>
                         <Text>password</Text>
                         <TextInput value = {this.state.password} secureTextEntry={true} onChangeText = {(password) => this.setState({password})} type="password" name="password" placeholder="Enter password" />
                     </View>
                     <Button onPress={this.signup} style={{marginLeft: '25px'}} title = "Signup"></Button>
                 
             </View>
         )
     }}
     export default Logins