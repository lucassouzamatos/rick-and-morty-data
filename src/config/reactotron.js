import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {
	const tron = Reactotron.configure({
		host: "localhost",
		port: 9090,
	})
	.use(reactotronRedux())
	.use(sagaPlugin())
	.connect();

	console.tron = tron;

	tron.clear();
}

console.tron.log('test');
