import React from 'react';
import firebase from 'firebase';
import {Text,View} from 'react-native'


class Events_parent extends React.Component {
    constructor(){
        super();
        this.state = {
            items : [],
            Date : "",
            Event : ""
        }
    }

    componentDidMount(){
        this.getUserData();
      }
 
      getUserData = () => {
        let ref = firebase.database().ref("Events");
        ref.on("value", snapshot => {
          const state = snapshot.val();
          this.setState(state);
        });
      
      };


      render(){
          return(
            <View>
            {this.state.items.map((item,index) => {
              // <Text>
              // console.log(this.state.items)
                    //  /return (
                    return   <View key = {index}>
                         
                         {/* <Text  value = {this.state.item}/> */}
                         {/* <TextInput value = {this.state.Date}/> */}
                       {/* <Text>{item,index}</Text> */}
            <Text>{item.Date}</Text><Text>{item.Event}</Text></View>})}

            </View>
          )
      }
}
export default Events_parent