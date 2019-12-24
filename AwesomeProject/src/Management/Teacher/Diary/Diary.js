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
class Diary extends  React.Component{
    constructor(){
        super();
        // console.log("working constructor")
        this.state={
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
        componentDidUpdate( prevState) {
          if (prevState !== this.state) {
            this.writeUserData();
          }
        }
      
        writeUserData = () => {
          firebase.database()
            .ref("Diary")
            .set(this.state);
          // console.log("Diary SAVED");
        };
      
        getUserData = () => {
          let ref = firebase.database().ref("Diary");
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
            class : this.state.class,
            english : this.state.english,
            urdu : this.state.urdu,
            maths : this.state.maths,
            islamiat : this.state.islamiat,
            science : this.state.science,
            pakistan_st : this.state.pakistan_st
          });
           
          this.setState({
            items,
            date : "",
          class : "",
          english : "" ,
          urdu : "",
          maths : "",
          islamiat : "",
          science : "",
          pakistan_st : ""
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
        //       Announcement :this.state.Announcement.concat(arr)
        //      }, () => this.writeUserData(this.state.Announcement))
        //   }

    render (){
        return(
            <View style= {styles.head}>
              {/* <Form></Form> */}
                <View style={styles.container}>
                <View>
          <Text style={styles.header}>Diary</Text>
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
                value = {this.state.class}
                placeholder = "class"
                onChangeText = {(text) => this.setState({class:text})}
                multiline= {true}
                 
                ></TextInput>
            </View>
            <View style = {styles.bg}>
                <TextInput style={styles.textInput}
                value = {this.state.english}
                placeholder = "english"
                onChangeText = {(text) => this.setState({english:text})}
                multiline= {true}
                 
                ></TextInput>
            </View>
            <View style = {styles.bg}>
                <TextInput style={styles.textInput}
                value = {this.state.urdu}
                placeholder = "urdu"
                onChangeText = {(text) => this.setState({urdu:text})}
                multiline= {true}
                 
                ></TextInput>
            </View>
            <View style = {styles.bg}>
                <TextInput style={styles.textInput}
                value = {this.state.maths}
                placeholder = "maths"
                onChangeText = {(text) => this.setState({maths:text})}
                multiline= {true}
                 
                ></TextInput>
            </View>
            <View style = {styles.bg}>
                <TextInput style={styles.textInput}
                value = {this.state.islamiat}
                placeholder = "islamiat"
                onChangeText = {(text) => this.setState({islamiat:text})}
                multiline= {true}
                 
                ></TextInput>
            </View>
            <View style = {styles.bg}>
                <TextInput style={styles.textInput}
                value = {this.state.science}
                placeholder = "science"
                onChangeText = {(text) => this.setState({science:text})}
                multiline= {true}
                 
                ></TextInput>
            </View>
            <View style = {styles.bg}>
                <TextInput style={styles.textInput}
                value = {this.state.pakistan_st}
                placeholder = "pakistan_st"
                onChangeText = {(text) => this.setState({pakistan_st:text})}
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
             <Text>Maths : {item.maths}</Text>
             <Text>Science : {item.science}</Text>
             <Text>Islamiat : {item.islamiat}</Text>
             <Text>Pakistan_st : {item.pakistan_st}</Text>
  <Text>English : {item.english}</Text><Text>Urdu : {item.urdu}</Text>
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
export default Diary; 