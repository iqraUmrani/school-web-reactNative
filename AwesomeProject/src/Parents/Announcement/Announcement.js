import React from 'react';
import firebase from 'firebase';
import {Text,View} from 'react-native'


  
  
  class Announcement_parent extends React.Component {
    constructor(){
      super();
      // console.log("working constructor")
      this.state={
        Announcement : [],
        value : ""
      }
  
      firebase.database().ref('Announcement').once('value')
      .then((snapshot) => {
        // console.log(snapshot.val().Announcement)
        
        if(snapshot.val() && snapshot.val().Announcement){
          this.setState({
            Announcement : snapshot.val().Announcement
          })
        }
      });
    }
  
    textadd(e){
      this.setState({
        value : e.target.value
      })
    }
  
    // add(){
    //   let arr = [];
    //   arr.push(this.state.value)
    //   this.setState({
    //     Announcement :this.state.Announcement.concat(arr)
    //   }, () => this.writeUserData(this.state.Announcement))
    // }
  
    writeUserData(Announcement) {
      firebase.database().ref('Announcement').set({
        Announcement: Announcement
      });
    }
  
    // delete(i){
    //   // console.log(i)
    //   let newArr = this.state.Announcement
    //   newArr.splice(i,1)
    //   console.log(newArr)
    //   this.setState({
    //     Announcement : newArr
    //   }, () => this.writeUserData(this.state.Announcement))
      
  
    // }

    render(){
        // console.log('working render')
        return (
            <View>
                {this.state.Announcement.map((item,index) => {
                return (
                  <View>
                 <Text>{item}</Text> 
                  </View>
                   )
                })}
            </View>
            );
        }}
 
        export default Announcement_parent