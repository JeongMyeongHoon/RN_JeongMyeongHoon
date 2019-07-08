//App.js 7/9 1:05am
import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import { SearchBar } from 'react-native-elements';
import { Image, StatusBar, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CategoryButton from './CategoryButton';
import LinkingButton from './LinkingButton';
import CategoryButton2 from './longCategoryButton';

// 메인 페이지 만드는 클래스
class Main extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
        <View style={styles.container}>
          <StatusBar        // 상단 Status 바 생성
            barStyle = "light-content"
            // dark-content, light-content and default
            hidden = {false}
            //To hide statusBar
            backgroundColor = "#00BCD4"
            //Background color of statusBar only works for Android
            translucent = {false}
            //allowing light, but not detailed shapes
            networkActivityIndicatorVisible = {true}
          />
          <View style={styles.header} />
          <View style={styles.content}>
          <View style={styles.header2}>
              <Text style={{fontSize: 25, margin: '5%', color: 'white'}}>메인</Text>
              <TouchableOpacity
                style={{
                  backgroundColor : 'black',
                  borderRadius: 5,
                  marginLRight: '10%',
                  marginTop: '8%',
                  marginBottom: '13%',
                  height: '29%'
                }}
              onPress={() => this.props.navigation.navigate('TagSearch')}>
                <Image
                  source={require('./Search.png')}
                  style={styles.ImageIconStyle}
                />
              </TouchableOpacity>
          </View>
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
          </View>
      </View>
    );
  }
}

// 우측 상단 검색 버튼 눌렀을 때 나오는 페이지 만드는 클래스
class TagSearch extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
        <View style={styles.container}>
          <View style={styles.header} />
          <View style={styles.content}>
          <View style={styles.header2}>
          <TouchableOpacity
            style={{
              backgroundColor : 'black',
              borderRadius: 5,
              marginLeft: '5%',
              height: '36%'
            }}
            onPress={() => this.props.navigation.goBack()}>
            <Text style={{
              fontSize: 20,
              color: 'white',
            }}>Back</Text>
          </TouchableOpacity>
          <SearchBar        // 검색창 생성
            containerStyle={{
              backgroundColor: 'black',
              borderWidth: 1, 
              borderRadius: 5,
              width: '82%'
            }}
            placeholder="검색어 입력"
            onChangeText={this.updateSearch}
            value={search}
          />
        </View> 
            <View style={styles.tag}>
                <CategoryButton text="지역"/>
                <CategoryButton text="종류"/>
                <CategoryButton text="배달"/>
            </View>
            <View style={styles.content2}>
              <View style={styles.elem}>
                <CategoryButton2 text="양덕"/>
                <View style={{height: '2%'}}/>
                <CategoryButton2 text="육거리"/>
                <View style={{height: '2%'}}/>
                <CategoryButton2 text="법원"/>
                <View style={{height: '2%'}}/>
                <CategoryButton2 text="환호"/>
                <View style={{height: '2%'}}/>
                <CategoryButton2 text="기타"/>
                <View style={{height: '2%'}}/>
              </View>
              <View style={styles.elem}>
                <LinkingButton text="식당 추가, 수정, 삭제"/>
                <View style={{height: '8%'}}/>
                <LinkingButton text="앱 관련 문의 및 피드백"/>
              </View>
            </View>
          </View>
      </View>
    );
  }
}

// 내가 찜한 식당 페이지 만드는 클래스(우측 하단 탭 눌렀을 때)
class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
        <View style={styles.container}>          
          <StatusBar        // 상단 Status 바 생성
            barStyle = "light-content"
            // dark-content, light-content and default
            hidden = {false}
            //To hide statusBar
            backgroundColor = "#00BCD4"
            //Background color of statusBar only works for Android
            translucent = {false}
            //allowing light, but not detailed shapes
            networkActivityIndicatorVisible = {true}
          />
          <View style={styles.header}/>
          <View style={styles.content}>
            <View style={styles.header2}>
              <Text style={{fontSize: 25, marginHorizontal: '5%', marginVertical: '4%', color: 'white'}}>내가 찜한 식당</Text>
            </View>
            <View style={styles.content2}>
              <View style={{height: '18%'}}/>
            </View>
          </View>
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
    flex: 1,
  },
  content: {
    flex:1,
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
    flex: 1,
  },
  header2: {
    backgroundColor: 'black',
    width: '100%',
    height: '11%',
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
  },
  ImageIconStyle: {
    marginVertical: '5%',
    marginRight: '11%',
    height: '45%',
    width: '90%',
    resizeMode : 'stretch',
  },
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
        backgroundColor: 'black'
      },
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
    }
  }
));