/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  // AppRegistry,
  // SafeAreaView,
   StyleSheet,
   ScrollView,
  View,
  // Text,
   Image,
  ImageBackground
  // StatusBar,
} from 'react-native';
//  import About from './src/About'

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
//  import Carousal from './src/Carousal'
// import DeckSwiperAdvancedExample from './src/Carousal'
import About from './src/About';
// import Events from './src/Management/Admin/Events/events'
import Content from './src/Contact';
import Intro from './src/introduction/MainIntro';
import Feedback from './src/Feedback/feedback'
const App =  React$Node = () => {
  
  
  return (
    <>
    {/* <View><Text>h1 hjhnjhnj</Text></View> */}

  <View>
   <ScrollView>
    <ImageBackground style ={{resizeMode: 'stretch'}}source = {require('./src/Images/school_back.jpg')}>
    <Intro/>
    {/* <DeckSwiperAdvancedExample/> */}
    {/* <Events/> */}
     <About/>
     <Content/>
     <Feedback/>
    </ImageBackground>
    </ScrollView>  
  </View>
      
 </>
 )}

export default App;
