import React,{Component} from "react";
import {StyleSheet, Text, View,TextInput,Button} from "react-native";
import firebase from 'firebase'
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
          borderWidth : 4,
        borderColor : "white",
          backgroundColor : "white",
         
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
class Syllabus extends  React.Component{
    constructor(){
        super();
        // console.log("working constructor")
        this.state={
          items : [],
          Subject : "",
          Topic : ""
        }
    }
      
        componentDidMount(){
          this.getUserData();
        }
        componentDidUpdate( prevState) {
          if (prevState !== this.state) {
            this.writeUserData();
          }
        }
      
        writeUserData = () => {
          firebase.database()
            .ref("Syllabus")
            .set(this.state);
          // console.log("Syllabus SAVED");
        };
      
        getUserData = () => {
          let ref = firebase.database().ref("Syllabus");
          ref.on("value", snapshot => {
            const state = snapshot.val();
            this.setState(state);
          });
        
        };
        handleSubmit =(e)=>{
          e.preventDefault();
          
          let items = [...this.state.items];
          items.push({
            Subject : this.state.Subject,
            Topic : this.state.Topic,
          });
           
          this.setState({
            items,
            Subject : " ",
            Topic : " "
          })
        }

        delete(i){
          // console.log(i)
          let newArr = this.state.items
          newArr.splice(i,1)
          console.log(newArr)
          this.setState({
            items : newArr
          }
           , () => this.writeUserData(this.state.items))
          
      
          }
        // add(){
        //     let arr = [];
        //     arr.push(this.state.value)
        //     this.setState({
        //       Topic :this.state.Topic.concat(arr)
        //      }, () => this.writeUserData(this.state.Topic))
        //   }

    render (){
        return(
            <View style= {styles.head}>
              {/* <Form></Form> */}
                <View style={styles.container}>
                <View>
          <Text style={styles.header}>Topic</Text>
        </View>
            </View>
            <View style = {styles.bg}>
              <Text>Subject</Text>
            <TextInput style={styles.textInput}
            value = {this.state.Subject}
                placeholder = "Subject"
                onChangeText = {(text) => this.setState({Subject:text})}
                multiline= {true}
                ></TextInput>
             </View>
             <View style = {styles.bg}>
               <Text>Topic</Text>
                <TextInput style={styles.textInput}
                value = {this.state.Topic}
                placeholder = "Topic"
                onChangeText = {(text) => this.setState({Topic:text})}
                multiline= {true}
                 
                ></TextInput>
            </View>
            <View style={styles.inputContainer,styles.bg}>
  <Button
    style={styles.saveButton}
    onPress ={this.handleSubmit}
    title = "save"
  >


   
  </Button>
  <View>
  {this.state.items.map((item,index) => {
    // <Text>
    // console.log(this.state.items)
          //  /return (
          return   <View key = {index}>
               
               {/* <Text  value = {this.state.item}/> */}
               {/* <TextInput value = {this.state.Subject}/> */}
             {/* <Text>{item,index}</Text> */}
  <Text>{item.Subject}</Text><Text>{item.Topic}</Text>
  {/* <Text></Text> */}
  {/* <Text>{this.state.Topic}</Text> */}
             <Button onPress={()=> this.delete(index)}
             title = "delete"/></View>
          //  )
          //  </Text>
         })}
  </View>
  
</View>
            </View>
            
        )
    }
}
export default Syllabus; 