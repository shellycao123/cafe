import React, {Component} from 'react'
import { Text, View, Button } from 'react-native';

class PersonalInfo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: "", 
      name: "Faye"
    }
  }

  componentDidMount = () => {
    // fetch("http://localhost:4000/user/addStars", {
    //   method: "POST",
    //   headers: {
    //     Accept:'/user/addStars',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //       cafe_username: "phobasr",
    //       price: 100
    //   }),
    // })
    // .then((response) => {
    //   console.log("hello");
    // })
    // .catch((error) => {
    //   console.error('Error: ??');
    // });
  }

   render() {
      return (
         <View>
            <Text>
               {"\n"}
               dummy data: {"\n"}
               {this.state.data.body}
               {"\n"}
               star: 💛💛💛💛
            </Text>
          </View>
      )
   }
}

export default PersonalInfo

