//App.js 7/8 1:00pm
import React from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import CategoryButton from './CategoryButton';
import LinkingButton from './LinkingButton';

class LogoTitle extends React.Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 25, color: 'white'}}>메인</Text>
      </View>
    );
  }
}
class LogoTitle2 extends React.Component {
  render() {
    return (
      <Text style={{fontSize: 25, color: 'white'}}>검색</Text>
    );
  }
}

class Main extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle/>,
    headerRight: (
      <Button
        onPress={() => alert('Hello')}
        title="  ፧  "
        color="white"
      />
    )
  };
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.tag}>
                <CategoryButton text="지역"/>
                <CategoryButton text="종류"/>
                <CategoryButton text="배달"/>
            </View>
            <View style={styles.content2}>
              <View style={{height: '23%'}}/>
               <View style={styles.elem}>
                <LinkingButton text="식당 추가, 수정, 삭제"/>
                <View style={{height: '8%'}}/>
                <LinkingButton text="앱 관련 문의 및 피드백"/>
              </View>
            </View>
            <View style={styles.footer} />
          </View>
      </View>
    );
  }
}

class Search extends React.Component{
  static navigationOptions = {
    headerTitle: <LogoTitle2/>
  };
  render(){
    return(
      <View style={styles.container}>
          <View style={styles.content}>
          <View style={styles.content2}>
               <View style={styles.elem}>
                <LinkingButton text="OO식당"/>
                <View style={{height: '4%'}}/>
                <LinkingButton text="OO식당"/>
                <View style={{height: '4%'}}/>
                <LinkingButton text="OO식당"/>
                <View style={{height: '4%'}}/>
                <LinkingButton text="OO식당"/>
                <View style={{height: '4%'}}/>
                <LinkingButton text="OO식당"/>
                <View style={{height: '4%'}}/>
                <LinkingButton text="OO식당"/>
              </View>
            </View>
          </View>
          <View style={styles.footer} />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: Main,
    Search: Search
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'black'
      },
      headerTintColor: 'white',
      headerTintStyle:{
        fontSize: 5
      },
      headerTitleStyle: {
        fontSize: 5
      },
    },
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex:1,
  },
  footer: {
    height:'8%',
    backgroundColor:'black',
  },
  content2: {
    flex: 1,
  },
  header2: {
    backgroundColor: 'black',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  elem: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
});

export default createAppContainer(AppNavigator);