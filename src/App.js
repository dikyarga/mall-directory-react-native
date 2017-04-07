import React from 'react'
import {
  Navigator,
} from 'react-native';

// import { StackNavigator } from 'react-navigation';

import Homepage from './components/Homepage'
import Mall from './components/Mall'

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Navigator
        initialRoute={{id: 'homepage'}}
        renderScene={
          (route, navigator) => {
            switch (route.id) {
              case 'homepage':
                return <Homepage navigator={navigator} title='Hoempage'/>
                break;
              case 'mall':
                console.log('masuk sini :');
                return <Mall navigator={navigator} title='Mall'/>
                break;
              default:
                return <Homepage navigator={navigator} title='Hoempage'/>
            }
          }
        }
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FadeAndroid }
      />
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
};
export default App
