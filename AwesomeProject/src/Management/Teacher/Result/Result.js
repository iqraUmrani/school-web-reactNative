import React,{Component} from "react";
import {StyleSheet, Text, View,TextInput,Button,handleSubmit} from "react-native";
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
class Result extends  React.Component{
    constructor(){
        super();
        // console.log("working constructor")
        this.state={
          items : [],
          date : "",
          student : "",
          subject : "" ,
          total_marks : "",
          obtain_marks : "",
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
            .ref("Result")
            .set(this.state);
          // console.log("Result SAVED");
        };
      
        getUserData = () => {
          let ref = firebase.database().ref("Result");
          ref.on("value", snapshot => {
            const state = snapshot.val();
            this.setState(state);
          });
        
        };
        handleSubmit =(e)=>{
          e.preventDefault();
          
          let items = [...this.state.items];
          items.push({ 
            date : this.state.date,
            student : this.state.student,
            subject : this.state.subject,
            total_marks : this.state.total_marks,
            obtain_marks : this.state.obtain_marks
          });
           
          this.setState({
            items,
            date : "",
          student : "",
          subject : "" ,
          total_marks : "",
          obtain_marks : "",
          })
        }
        // add(){
        //     let arr = [];
        //     arr.push(this.state.value)
        //     this.setState({
        //       Announcement :this.state.Announcement.concat(arr)
        //      }, () => this.writeUserData(this.state.Announcement))
        //   }

    render (){
        return(
            <View style= {styles.head}>
              {/* <Form></Form> */}
                <View style={styles.container}>
                <View>
          <Text style={styles.header}>Result</Text>
        </View>
            </View>
            <View style = {styles.bg}>
            <TextInput style={styles.textInput}
            value = {this.state.date}
                placeholder = "date"
                onChangeText = {(text) => this.setState({date:text})}
                multiline= {true}
                ></TextInput>
             </View>
             <View style = {styles.bg}>
                <TextInput style={styles.textInput}
                value = {this.state.student}
                placeholder = "student"
                onChangeText = {(text) => this.setState({student:text})}
                multiline= {true}
                 
                ></TextInput>
            </View>
            <View style = {styles.bg}>
                <TextInput style={styles.textInput}
                value = {this.state.subject}
                placeholder = "subject"
                onChangeText = {(text) => this.setState({subject:text})}
                multiline= {true}
                 
                ></TextInput>
            </View>
            <View style = {styles.bg}>
                <TextInput style={styles.textInput}
                value = {this.state.total_marks}
                placeholder = "total_marks"
                onChangeText = {(text) => this.setState({total_marks:text})}
                multiline= {true}
                 
                ></TextInput>
            </View>
            <View style = {styles.bg}>
                <TextInput style={styles.textInput}
                value = {this.state.obtain_marks}
                placeholder = "obtain_marks"
                onChangeText = {(text) => this.setState({obtain_marks:text})}
                multiline= {true}
                 
                ></TextInput>
            </View>
            <View style={styles.inputContainer,styles.bg}>
  <Button
    style={styles.saveButton}
    onPress ={this.handleSubmit}
    title = "save"
  >
    {/* <Text style={styles.saveButtonText}
    //  onPress={()=>this.add()}
     >Save</Text> */}
  </Button>

  <View>
  {this.state.items.map((item,index) => {
    // <Text>
    // console.log(this.state.items)
          //  /return (
          return   <View key = {index}>
               
               {/* <Text  value = {this.state.item}/> */}
               {/* <TextInput value = {this.state.Date}/> */}
             {/* <Text>{item,index}</Text> */}

             <Text>Date : {item.date}</Text>
             <Text>Student : {item.student}</Text>
             <Text>Subject : {item.subject}</Text>
             <Text>Total Marks : {item.total_marks}</Text>
             <Text>Obtain_marks : {item.obtain_marks}</Text>
  {/* <Text>English : {item.english}</Text><Text>Urdu : {item.urdu}</Text> */}
  {/* <Text></Text> */}
  {/* <Text>{this.state.Event}</Text> */}
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
export default Result; 