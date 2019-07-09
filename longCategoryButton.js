//longCategoryButton.js 7/8 9:40pm
import React, { Component } from 'react';
import { TouchableOpacity, Text} from 'react-native';

export default class CategoryButton2 extends Component{
  constructor(props){
    super(props);
    this.state={
      defaultColor: true,
      textdefaultColor : true
    }
  }
  _onPressButton(){
    this.setState({
      defaultColor : !this.state.defaultColor,
      textdefaultColor : !this.state.textdefaultColor
    });
  }
  render(){
    let bgColor=this.state.defaultColor ? "lightgray" : "powderblue"
    let txColor=this.state.textdefaultColor ? "black" : "white"

    return (
      <TouchableOpacity
        style={{
                  backgroundColor : bgColor,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: '2%',
                  borderRadius: 5,
                  marginTop: '2%',
                  width: '90%',
                  height: '10%'
                }}
                onPress={
                this._onPressButton.bind(this)}
              >
                <Text style={{
                  borderRadius : 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 20,
                  color: txColor
                  }}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}
