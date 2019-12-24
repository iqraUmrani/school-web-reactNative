import React, {Component} from 'react';
// import './App.css';
 import firebase from 'firebase';
import Home from './home';
 import Logins from './login';
import {View,Alert,} from 'react-native'
class Appes extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      
    }
    
     this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        this.setState({ user });
        //  setItem('user', user.uid);
        //  Alert.alert("successful")
        
      } else {
        this.setState({ user: null });
        //  removeItem('user');
        // Alert.alert("not successful")
      }
    });
  }
   render() {
     return (
        <View>

         {this.state.user ? (
            <Home/>
          ) :
            (
              <Logins/>
            )} 
       </View>
       );
     }
   }
  
  export default Appes;