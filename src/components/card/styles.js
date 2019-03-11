import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		backgroundColor: 'rgb(51, 51, 51)',
		margin: 15,
		borderRadius: 5,
		padding: 15,
	},
	name: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
		marginTop: 20
	},
	data: {
		color:  'white',
		opacity: 0.7
	},
	profileImage: {
		height: 300,
		borderRadius: 150,
	}
});

export default styles;
