// import React, { Component } from 'react';
// import Feedback from './feedback';
// import { View } from 'native-base';
// import firebase from 'firebase';
// class Rendering extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: '',
//             feedBack: '',
            
//             items: []
//           }
//     };

//     handleFormSubmit = (e) => {
//         e.preventDefault();
        
//         let items = [...this.state.items];
//         // console.log(this.state.items);
//         items.push({
//           name: this.state.name,
//           feedback: this.state.feedback,
          
//         }
//         );
//         this.setState({
//             items,
//             name: '',
//             feedback: '',
            
//           });
//         };


//         handleInputChange = (e) => {
//             let input = e.target;
//             let name = e.target.name;
//             let value = input.value;
        
//             this.setState({
//               [name]: value
//             })
//           };



//           render(){
//               return(
//                   <View>
//                       {[this.state.items].map((item,index) => {
//            return (
//         <Form handleFormSubmit={ this.handleFormSubmit } 
//           handleInputChange={ this.handleInputChange }
//           newName={ this.state.name }
//           newFeedback={ this.state.feedback } 
//           // add={this.add}
          
//           />
//           )}
//        )}
//                   </View>
//               )
//           }
// }
// export default Rendering