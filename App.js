//App.js 7/9 11:45pm
import React, { Component } from "react";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import { Image, StatusBar, StyleSheet, View, Text, TouchableOpacity, Dimensions, Alert } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Header } from "react-native-elements"
import SearchHeader from 'react-native-search-header';

// 종류
const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'white' }]}>
    <View style={styles.buttonGroup}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Button5 name="한식" />
        <Button6 name="양식" />
      </View>
      <View style = {{height: '11%'}} />
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Button3 name="중식" />
        <Button4 name="일식" />
      </View>
      <View style = {{height: '11%'}} />
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Button name="야식" />
        <Button2 name="기타" />
      </View>
    </View>
    <View style = {{height: '10%'}}/>
  </View>
);

// 지역
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'white' }]} />
);

// 배달
const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'white' }]} />
);

// 사진 버튼 생성하는 클래스들
class Button extends Component {
  render() {
    return (
      <View style={{flex: 1, height: '120%', borderWidth: 0, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('./others.jpg')}
          style={{width: '100%', height: '120%'}}
        />
      </View>
    )
  }
}
class Button2 extends Component {
  render() {
    return (
      <View style={{flex: 1, height: '120%', borderWidth: 0, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('./nighteat.jpeg')}
          style={{width: '100%', height: '120%'}}
        />
      </View>
    )
  }
}
class Button3 extends Component {
  render() {
    return (
      <View style={{flex: 1, height: '120%', borderWidth: 0, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('./chinese.jpeg')}
          style={{width: '100%', height: '120%'}}
        />
      </View>
    )
  }
}
class Button4 extends Component {
  render() {
    return (
      <View style={{flex: 1, height: '120%', borderWidth: 0, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('./japanese.jpeg')}
          style={{width: '100%', height: '120%'}}
        />
      </View>
    )
  }
}
class Button5 extends Component {
  render() {
    return (
      <View style={{flex: 1, height: '120%', borderWidth: 0, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('./korean.jpeg')}
          style={{width: '100%', height: '120%'}}
        />
      </View>
    )
  }
}
class Button6 extends Component {
  render() {
    return (
      <View style={{flex: 1, height: '120%', borderWidth: 0, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('./western.jpg')}
          style={{width: '100%', height: '120%'}}
        />
      </View>
    )
  }
}
// 사진 버튼 생성하는 클래스들

// 메인 페이지 만드는 클래스
class Main extends React.Component {
  static navigationOptions = {        // Navigation Header 삭제
    header: null
  };

  state = {
    index: 0,
    routes: [
      { key: 'first', title: '종류' },
      { key: 'second', title: '지역' },
      { key: 'third', title: '배달'}
    ],
  };

  render() {
    return (
        <View style={styles.container}>
          <StatusBar        // 상단 Status 바 생성
            barStyle = "dark-content"
            // dark-content, light-content and default
            hidden = {false}
            //To hide statusBar
            backgroundColor = "white"
            //Background color of statusBar only works for Android
            translucent = {false}
            //allowing light, but not detailed shapes
            networkActivityIndicatorVisible = {true}
          />

          <Header
            leftComponent={null}
            centerComponent={{ text: '한동네맛집', style: { color: 'black', fontSize: '22.5%', fontWeight: '500' } }}
            rightComponent={{ icon: 'search', color: 'black', onPress: () => this.searchHeader.show()}}
            containerStyle={{
              backgroundColor: 'white',
              justifyContent: 'space-around',
              height: '12%'
            }}
          />
          <SearchHeader
            ref = {(searchHeader) => {
                this.searchHeader = searchHeader;
            }}
            placeholder = 'Search...'
            placeholderColor = 'gray'
            pinnedSuggestions = {[ '양덕', '육거리', '한동네맛집', '아 배고파' ]}
          />
            <View style={styles.content}>
              <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                  first: FirstRoute,
                  second: SecondRoute,
                  third: ThirdRoute
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
                useNativeDriver = {true}
                renderTabBar={(props) =>
                  <TabBar
                    {...props}
                    indicatorStyle={{ backgroundColor: 'white' }}
                    style={{backgroundColor: "pink"}}
                    renderIcon={this.renderIcon}
                  />
                }
              />
          </View>
      </View>
    );
  }
}

// 우측 상단 검색 버튼 눌렀을 때 나오는 페이지 만드는 클래스
class TagSearch extends React.Component {
  static navigationOptions = {        // Navigation Header 삭제
    header: null
  };

  render() {
    return (
      <View style={styles.container}></View>
    );
  }
}

// 내가 찜한 식당 페이지 만드는 클래스(우측 하단 탭 눌렀을 때)
class SettingsScreen extends React.Component {
  static navigationOptions = {        // Navigation Header 삭제
    header: null,
  };
  render() {
    return (
        <View style={styles.container}>          
          <StatusBar        // 상단 Status 바 생성
            barStyle = "dark-content"
            // dark-content, light-content and default
            hidden = {false}
            //To hide statusBar
            backgroundColor = "#00BCD4"
            //Background color of statusBar only works for Android
            translucent = {false}
            //allowing light, but not detailed shapes
            networkActivityIndicatorVisible = {true}
          />
          <Header
            leftComponent={null}
            centerComponent={{ text: '내가 찜한 식당', style: { color: 'black', fontSize: '22.5%', fontWeight: '500' } }}
            rightComponent={{ icon: 'search', color: 'black'}}
            containerStyle={{
              backgroundColor: 'white',
              justifyContent: 'space-around',
              height: '12%'
            }}
          />
          <SearchHeader       // 검색창 생성
            ref = {(searchHeader) => {
                this.searchHeader = searchHeader;
            }}
            placeholder = 'Search...'
            placeholderColor = 'gray'
            pinnedSuggestions = {[ '양덕', '육거리', '한동네맛집', '아 배고파' ]}
          />
      </View>
    );
  }
}

// 메인 페이지에 대해 스택 네비게이터 생성
const HomeStack = createStackNavigator(
  {
    Home: Main,
    TagSearch: TagSearch,
  },
  {
    initialRouteName: "Home",
    headerMode: 'none',
    defaultNavigationOptions: {
      headerVisible: false,
    },
  }
);

// 내가 찜한 식당 페이지에 대해 스택 네비게이터 생성
const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
    TagSearch: TagSearch,
  },
);

// 스타일
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex:1
  },
  header: {
    height:'5%',
    backgroundColor:'black',
  },  
  footer: {
    height:'8%',
    backgroundColor:'black',
  },
  content2: {
    flex: 1
  },
  header2: {
    backgroundColor: 'white',
    width: '100%',
    height: '11%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  tag: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'gray',
    paddingHorizontal: '2%'
  },
  ImageIconStyle: {
    marginVertical: '5%',
    marginRight: '11%',
    height: '45%',
    width: '90%',
    resizeMode : 'stretch',
  },
  elem: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  buttonGroup: {
    height: '80%'
  },
  scene: {
    flex: 1,
    backgroundColor: 'pink'
  }
});
 
// 탭 네비게이터 생성
export default createAppContainer(createBottomTabNavigator(
  {
    Home: HomeStack,
    '내가 찜한 식당': SettingsStack
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: 'pink'
      },
      activeTintColor: 'black',
      inactiveTintColor: 'gray'
    }
  }
));