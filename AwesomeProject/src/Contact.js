import React from 'react';
import {
    // WebView,
  // SafeAreaView,
   StyleSheet,
  // ScrollView,
  AppRegistry,
  View,
  Text,
  // StatusBar,
} from 'react-native';
import{
    WebView
}from 'react-native-webview';

const styles = StyleSheet.create({
    contactUs: {
        backgroundColor: 'rgb(80, 80, 60)',
        color: 'white',
        fontWeight: 'bold',
        marginBottom: '5%',
       marginTop : "0%"
    },
    contactUsheading:{
        fontSize :20,
        fontWeight: "bold",
        textAlign : "center",
    },
    contactUsPara : {
        textAlign:"center",
    },
    // .contact_us h1{
    //     text-align: center;
    // }
    // .contact_us p {
    //     text-align: center;
    // }
    // .iframeDiv {
    //     text-align: center;
    // }
    
})

class Contact extends React.Component {
    render(){
        return(
            <View style={styles.contactUs}>
                <Text style = {styles.contactUsheading}>FOR CONTACT US :</Text>
                <Text style = {styles.contactUsheading}>
                    Call us on:</Text><Text style = {styles.contactUsPara}> 01234567891.
                </Text>
                <Text style = {styles.contactUsheading}>
                    Email id:</Text><Text style = {styles.contactUsPara}> theSchool@gmail.com
                </Text>
                <Text style = {styles.contactUsheading}>VISIT OUR SCHOOL</Text>
                
                {/* <WebView
   source={{src: "https://maps.google.com/maps?q=university%20of%20karachi%2CUBIT&t=&z=11&ie=UTF8&iwloc=&output=embed" }}
   style={{marginTop: 20}}
/> */}
                {/* <View className='iframeDiv'><iframe src="https://maps.google.com/maps?q=university%20of%20karachi%2CUBIT&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></View> */}
            </View>
        )
    }
    }
    export default Contact;