import React from 'react';
import firebase from 'firebase';
import {Text,View} from 'react-native'


class Syllabus_parent extends React.Component {
    constructor(){
        super();
        this.state = {
            items : [],
            Subject : "",
            Topic : ""
        }
    }

    componentDidMount(){
        this.getUserData();
      }
 
      getUserData = () => {
        let ref = firebase.database().ref("Syllabus");
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
                         {/* <TextInput value = {this.state.Subject}/> */}
                       {/* <Text>{item,index}</Text> */}
            <Text>{item.Subject}</Text><Text>{item.Topic}</Text></View>})}

            </View>
          )
      }
}
export default Syllabus_parent