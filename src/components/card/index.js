import React from 'react';

import { View, Text, Image } from 'react-native';

import styles from './styles';

const Card = ({ name, image, species, location }) => (
	<View style={styles.container}>
		<Image
			style={styles.profileImage}
			resizeMode="contain"
			source={{uri: image}} />

		<Text style={styles.name}>{name}</Text>
		<Text style={styles.data}>Espécie: {species}</Text>
		<Text style={styles.data}>Planeta: {location.name}</Text>

	</View>
);

export default Card;
