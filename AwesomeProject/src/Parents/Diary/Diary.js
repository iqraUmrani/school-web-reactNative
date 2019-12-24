import React from 'react';
import firebase from 'firebase';
import {Text,View} from 'react-native'


class Diary_parent extends React.Component {
    constructor(){
        super();
        this.state = {
            items : [],
            date : "",
            class : "",
            english : "" ,
            urdu : "",
            maths : "",
            islamiat : "",
            science : "",
            pakistan_st : ""
        }
    }

    componentDidMount(){
        this.getUserData();
      }
 
      getUserData = () => {
        let ref = firebase.database().ref("Diary");
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
                       <Text>Date : {item.date}</Text>
             <Text>Maths : {item.maths}</Text>
             <Text>Science : {item.science}</Text>
             <Text>Islamiat : {item.islamiat}</Text>
             <Text>Pakistan_st : {item.pakistan_st}</Text>
  <Text>English : {item.english}</Text><Text>Urdu : {item.urdu}</Text><Text>{item.Subject}</Text><Text>{item.Topic}</Text></View>})}

            </View>
          )
      }
}
export default Diary_parent