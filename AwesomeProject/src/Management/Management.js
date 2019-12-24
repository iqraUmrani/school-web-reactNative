import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import Nav_admin from "./Admin/Nav-Admin";
import Nav_teacher from './Teacher/Nav-Teacher'
import { NativeRouter, Route, Link } from "react-router-native";
const styles = StyleSheet.create({
  Management : {
    width: "100%",
        backgroundColor: "rgb(24, 199, 241)",
        marginTop : 20,
  },
  ManagementUl : {
    flexDirection: "row",
     justifyContent: "space-around",
  },
  ManagementLi : {
    fontSize: 20,
  fontWeight : "bold",
  }
})

export default function Manage() {
    return (
      <NativeRouter>
        <View style = {styles.Management}>
          <View style = {styles.ManagementUl}>
            <Link to = "/teacher">
            <Text style = {styles.ManagementLi}>
              
              Teacher
           
            </Text>
            </Link>
          
              <Link to = "/Admin">
              <Text style= {styles.ManagementLi}>
              
              Admin
          </Text>
              </Link>
              
              
              
            
            
           
          </View>
          <Route path = "/teacher" component = {Nav_teacher}/>
          <Route path = "/Admin" component = {Nav_admin} />
        </View>
      </NativeRouter>
    );
  }