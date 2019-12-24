import React from "react";
import {StyleSheet, Text, View} from "react-native";
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Diary from './Diary/Diary';
import Result from './Result/Result'
import { NativeRouter, Link,Route } from "react-router-native";
 
const styles = StyleSheet.create({
    Teacher : {
        width: "100%",
        backgroundColor: "rgb(225, 140, 220)",
        marginTop : 20
    },
    TeacherUl :{
        // display : "flex",
        flexDirection: "column",
           justifyContent: "space-around"
      },
      TeacherLi : {
        // flex : 3,
        // display :"flex",
        // flexDirection : "column",
        fontSize: 20,
        fontWeight : "bold",
        color : "blue"
      
      
      },
})
const Nav_teacher=()=>{
 return(
     <NativeRouter>
         <View style = {styles.Teacher}>
             <View style = {styles.TeacherUl}>
               <Link to = "/diary">
               <Text style = {styles.TeacherLi}>Diary</Text>
               </Link>
                 <Link to = "/result">
                 <Text style = {styles.TeacherLi}>Result</Text>
                 </Link>
                 
             </View>
         </View>
         <View>



           <Route path ="/diary" component = {Diary}/>
           <Route path ="/result" component = {Result}/>

      {/* <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar> */}
    </View>
     </NativeRouter>
 )

    
}
export default Nav_teacher;