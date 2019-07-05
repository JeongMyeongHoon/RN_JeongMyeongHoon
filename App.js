import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Button} from 'react-native';
import CategoryButton from './CategoryButton'

export default class App extends Component {
  _onPressButton4() {
    Alert.alert('앱 관련 문의 및 피드백')
  }
  _onPressButton5() {
    Alert.alert('식당 추가, 수정, 삭제')
  }

  constructor(props){
    super(props);
    this.state={
      defaultColor: true
    }
  }
  _onPressButton(){
    this.setState({
      defaultColor : !this.state.defaultColor
    });
  }
  _onPressButton2(){
    this.setState({
      defaultColor : !this.state.defaultColor
    });
  }
  _onPressButton3(){
    this.setState({
      defaultColor : !this.state.defaultColor
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
          <View style={styles.content}>

            <View style={styles.header2}>
              <Text style={{fontSize: 25, margin: '5%', color: 'white'}}>메인</Text>
            </View>

            <View style={styles.tag}>
              <CategoryButton text="지역"/>
              <CategoryButton text="종류"/>
              <CategoryButton text="배달"/>
            </View>
           <View style={styles.elem}>
            <View style={styles.buttonContainer5}>
              <Button
               onPress={this._onPressButton5}
               title="식당 추가, 수정, 삭제"
               color="white"
              />
            </View>
          </View>
          <View style={styles.elem}>
            <View style={styles.buttonContainer}>
              <Button
                onPress={this._onPressButton4}
                title="앱 관련 문의 및 피드백"
                color="white"
              />
            </View>
          </View>

            <View style={styles.footer} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height:'4%',
    backgroundColor:'black',
  },
  content: {
    flex:1,
  },
  header2: {
    backgroundColor: 'black',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  elem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor:'#eee',
  },
  tag: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: 'gray',
    paddingHorizontal: '2%'
  },
  buttonContainer: {
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: '#585858',
    flex: 1,
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: '3%'
  },
  buttonContainer5: {
    marginRight: '5%',
    marginLeft: '5%',
    marginTop: '60%',
    backgroundColor: '#585858',
    flex: 1,
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: '3%'
  }
});