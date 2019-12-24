import firebase from 'firebase';

import React,{Component} from 'react'
import {View , Text,Button} from 'react-native'
 import Manage from '../Management/Management'

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
                
                <Manage/>
                <Button onPress={this.logout} title = "delete"></Button>
            </View>
        );

    }

}

export default Home;
