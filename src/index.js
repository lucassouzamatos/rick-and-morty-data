import React, {Component} from 'react';

import { Provider } from 'react-redux';

import './config/reactotron';
import store from './store';

import Main from './pages/main'

export default class App extends Component {
  render() {
    return (
			<Provider store={store}>
				<Main />
			</Provider>
    );
  }
}
