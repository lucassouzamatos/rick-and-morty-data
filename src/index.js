import React, {Component} from 'react';
import { View, Image } from 'react-native';

import style from './style';
import './config/reactotron.js';

import { Provider } from 'react-redux';
import store from './store';

export default class App extends Component {
  render() {
    return (
			<Provider store={store}>
				<View style={style.container}>
				</View>
			</Provider>
    );
  }
}
