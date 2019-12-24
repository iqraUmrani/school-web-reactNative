import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { NativeRouter, Link ,Route} from "react-router-native";
import Announcement_parent from './Announcement/Announcement';
import Events_parent from './Event/event';
// import Syllabus_parent from './Syllabus/syllabus'
import Syllabus_parent from './Syllabus/syllabus'
import  Diary_parent  from "./Diary/Diary";
const styles = StyleSheet.create({
    Parent : {
        width: "100%",
        backgroundColor: "rgb(225, 140, 220)",
    },
    ParentUl :{
        // display : "flex",
        flexDirection: "column",
           justifyContent: "space-around"
      },
      ParentLi : {
        // flex : 3,
        // display :"flex",
        // flexDirection : "column",
        fontSize: 20,
        fontWeight : "bold",
        color : "blue"
      
      
      },
})

export default function Nav_Parent(){

    return(
        <NativeRouter>
           <View style = {styles.Parent}>
                <View style = {styles.ParentUl}>
                 <Link to = "/syllabus">
                    <Text style = {styles.ParentLi}> 
                    Syllabus 
                    </Text>
                    </Link>
                   <Link to ="/event">
                   <Text style = {styles.ParentLi}>
                       Events
                       </Text>
                   </Link>
                    <Link to = "/diary">
                    <Text style = {styles.ParentLi}> 
                    Diary
                    </Text>
                    </Link>
                    
                    
                    <Link to ="/announce">
                    <Text style = {styles.ParentLi}>
                        Announcement
                        </Text>
                    
                    </Link>
                    
                    
                </View>
                

                 <Route path ="/syllabus" component = {Syllabus_parent}/>
                 <Route path = "/event" component = {Events_parent}/>
                  <Route path ="/announce" component = {Announcement_parent}/>
                 <Route path = "/diary" component = {Diary_parent}/> 
            </View>
        </NativeRouter>
    )
}
// export default Nav_Parent