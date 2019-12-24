import React, { Component } from 'react';
import firebase from 'firebase';
import {View , Text,Button} from 'react-native'
// import Manage from '../Management'

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        firebase.auth().signOut();
    }

    render() {
        return (
            <View>
                
                <Text>Welcome</Text>
                <Button onPress={this.logout} title = "delete"></Button>
            </View>
        );

    }

}

export default Home;
