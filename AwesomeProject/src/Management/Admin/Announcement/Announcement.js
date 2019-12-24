import React,{Component} from "react";
import {StyleSheet, Text, View,TextInput,Button,Alert,Platform} from "react-native";
// import { Button } from "native-base";
import firebase from "firebase"
const styles = StyleSheet.create({
  head:{
    borderWidth:4,
    borderColor : "black"
},
    inputContainer: {
        paddingTop: 15
      },
    header: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
        backgroundColor: '#F5FCFF'
      },
      container: {
        flex: 1,
        paddingTop: 5,
        backgroundColor: '#F5FCFF',
      },
      textInput: {
       backgroundColor: '#CFCFCF',
       width : "80%",
       marginLeft : 30,
        
         paddingLeft: 20,
        
      },
      bg:{
          backgroundColor : "white"
      },
      saveButton: {
        borderWidth: 1,
        borderColor: '#007BFF',
        backgroundColor: '#007BFF',
        padding: 15,
        margin: 5,
        width : "80%",
        marginLeft : 30,
        
      },
      saveButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
      }
})
class Announcement extends  React.Component{
    constructor(){
        super();
        
        this.state={
         value : "",
         Announcement : []
        }
      
        firebase.database().ref('Announcement').once('value')
        .then((snapshot) => {
          // console.log(snapshot.val().Announcement)
          
          if(snapshot.val() && snapshot.val().Announcement){
            this.setState({
              Announcement : snapshot.val().Announcement
            })
          }
        });}
  
        // textadd(e){
        //   this.setState({
        //     value : e.target.value
        //   })
        // }

        add(){
          let arr = [];
          arr.push(this.state.value)
          this.setState({
            Announcement :this.state.Announcement.concat(arr)
          }
           , () => this.writeUserData(this.state.Announcement))
        }

        writeUserData(Announcement) {
          firebase.database().ref('Announcement').set({
            Announcement: Announcement
          });
        }
        delete(i){
          // console.log(i)
          let newArr = this.state.Announcement
          newArr.splice(i,1)
          console.log(newArr)
          this.setState({
            Announcement : newArr
          }
           , () => this.writeUserData(this.state.Announcement))
          
      
          }
        // add(){
        //   // alert("hi")
        //     let arr = [];
            
        //     arr.push(this.state.value)
        //     this.setState({
        //       Announcement :this.state.Announcement.concat(arr)})
        //       alert('hi')
        //     } 
            // buttonclickListener = () => {
            //   const {TextInputValue} = this.state ;
            //   Alert.alert(TextInputValue);

            //  }
            // // textadd(e){
            //   this.setState({
            //     value : e.target.value
            //   })
            // }
            // () => this.writeUserData(this.state.Announcement))
        //   }

    render (){
        return(
            <View style = {styles.head}>
                <View style={styles.container}>
                <View>
          <Text style={styles.header}>Announcement</Text>
        </View>
            </View>
            <View style = {styles.bg}>
                <TextInput style={styles.textInput}
                placeholder = "Importance Announcement"
                multiline= {true}
                numberOfLines = {2}
                onChangeText={value => this.setState({value})}
                  // TextInputValue => this.setState({TextInputValue})}
                ></TextInput>
            </View>
            <View>
            {/* <View style={styles.inputContainer,styles.bg}> */}
  <Button style={styles.saveButton} 
  onPress={() => this.add()}
  // {this.buttonclickListener}
  title = "Save"
  >
    {/* <Text style={styles.saveButtonText}>Save</Text> */}
  </Button>
  {this.state.Announcement.map((item,index) => {
    // <Text>
           return (
             <View>
               
             <Text>{item}</Text><Button onPress={()=> this.delete(index)}
             title = "delete"/></View>
           )
          //  </Text>
         })}
</View>
            </View>
            
        )
    }
}
export default Announcement; 