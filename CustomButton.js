//CustomButton.js 7/8 9:40pm
import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default class CustomButton extends Component{
  constructor(props){
    super(props);
  }
  _onPressButton(){
    
  }
  render(){
    return (
      <TouchableOpacity
        style={{
                  backgroundColor : 'lightgray',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: '2%',
                  borderRadius: 5,
                  marginTop: '2%',
                  width: '90%',
                  height: '10%'
                }}
        onPress={this._onPressButton.bind(this)}>
                <Text style={{
                  fontSize: 20,
                  color: 'black'
                  }}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}