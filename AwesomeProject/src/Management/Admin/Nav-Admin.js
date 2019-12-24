import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import Events from './Events/events';
import Announcement from './Announcement/Announcement';
import Attendence from './TeacherAttendence/teacherAttendence';
import Syllabus from './Syllabus/syllabus';
import Apps from '../Admin/signup/App'
import { NativeRouter, Route, Link } from "react-router-native";
const styles = StyleSheet.create({
    Admin : {
        width: "100%",
        backgroundColor: "rgb(225, 140, 220)",
    },
    AdminUl :{
        // display : "flex",
        flexDirection: "column",
           justifyContent: "space-around"
      },
      AdminLi : {
        // flex : 3,
        // display :"flex",
        // flexDirection : "column",
        fontSize: 20,
        fontWeight : "bold",
        color : "blue"
      
      
      },
})
const Nav_admin = () =>{

    return(
        <NativeRouter>
            <View style = {styles.Admin}>
                <View style = {styles.AdminUl}>
                    <Link to = "/syllabus">
                    <Text style = {styles.AdminLi}>Syllabus</Text>
                    </Link>
                   <Link to ="/event">
                   <Text style = {styles.AdminLi}>Events</Text>
                   </Link>
                    <Link to = "/signup">
                    <Text style = {styles.AdminLi}>SignUp</Text>
                    </Link>
                    
                    
                    <Link to ="/announce">
                    <Text style = {styles.AdminLi}>Announcement</Text>
                    </Link>
                    <Link to ="/attendence">
                    <Text style = {styles.AdminLi}>
                        Teacher Attendence
                    </Text>
                    </Link>
                    
                </View>
                

                <Route path ="/syllabus" component = {Syllabus}/>
                <Route path = "/event" component = {Events}/>
                <Route path ="/signup" component = {Apps}/>
                <Route path ="/announce" component = {Announcement}/>
                <Route path = "/attendence" component = {Attendence}/>
            </View>
        </NativeRouter>
    )
}
export default Nav_admin