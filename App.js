import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { Provider as PaperProvider } from 'react-native-paper';
import { AppRegistry } from 'react-native';
import Main from './src/main/Main';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PaperProvider>
          <Main />
        </PaperProvider>
      </Provider>
    );
  }
}

AppRegistry.registerComponent("BMS", () => App)