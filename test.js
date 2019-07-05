import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, AppRegistry, TextInput, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,Platform} from 'react-native';
import CategoryButton from './CategoryButton';

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor: 'white',
  },
  search : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'flex-start',
    alignItems : 'center',
    backgroundColor: 'black',
  },
  Isearch : {
    width : '20%',
    height : '50%',
    resizeMode:'contain'
  },
  Tsearch :{
    color : 'white',
    fontWeight : 'bold',
    fontSize : 20,
    borderRadius : 5,
    paddingTop : '2%',
    paddingBottom : '2%',
    paddingLeft : '5%',
    paddingRight : '5%',
    backgroundColor: 'pink',
  },
  choice : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center',
    backgroundColor: 'red',
  },
  content : {
    flex : 5,
    backgroundColor: 'yellow',
    flexDirection : 'column',
    justifyContent : 'space-around',
    alignItems : 'center',
  },
  Tcontent : {
    borderRadius : 5,
    backgroundColor : 'pink',
    padding : "5%",
    paddingLeft :"33%",
    paddingRight :"33%",
  },
  etcButton : {
    flex : 2,
    flexDirection : 'column',
    justifyContent : 'space-around',
    alignItems : 'center',
    backgroundColor: 'green',
  },
  TetcButton : {
    borderRadius : 5,
    backgroundColor : 'pink',
    padding : "3%",
    paddingLeft :"20%",
    paddingRight :"20%",
  },
  footer : {
    flex : 0.5,
    justifyContent : 'space-around',
    alignItems : 'center',
    backgroundColor: 'blue',
  },
  Tfooter : {
    color: 'white',
  },
});

export default class mainScreen extends Component {
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.search}>
          <Image
            style={styles.Isearch}
            source={require('./logo.png')}/>
          <TextInput
            style={styles.Tsearch}
            placeholder="Type here to translate!"
          />
        </View>
        <View style={styles.choice}>
          <CategoryButton text="지 역"/>
          <CategoryButton text="종 류"/>
          <CategoryButton text="배 달"/>
        </View>
        <View style={styles.content}>
          <Text style={styles.Tcontent}>양 덕</Text>
          <Text style={styles.Tcontent}>육 거 리</Text>
          <Text style={styles.Tcontent}>법 원</Text>
          <Text style={styles.Tcontent}>환 호</Text>
        </View>
        <View style={styles.etcButton}>
          <Text style={styles.TetcButton}>식당 추가, 수정, 삭제</Text>
          <Text style={styles.TetcButton}>앱 관련 문의 및 피드백</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.Tfooter}>유명해지면 광고도 넣어야징</Text>
        </View>
      </View>
    );
  }
};