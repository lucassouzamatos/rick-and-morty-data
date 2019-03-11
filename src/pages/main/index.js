import React, { Component } from 'react';

import { ScrollView, Image, View } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as CharacterActions } from '../../store/ducks/character';

import styles from './styles';

import Card from '../../components/card';

import Images from '../../images/images.json';

class Main extends Component {
	componentDidMount() {
		this.props.getCharacters();
	}

	handleScroll = ({layoutMeasurement, contentOffset, contentSize}) => {
		layoutMeasurement.height + contentOffset.y >= contentSize.height - 400 ? this.props.getCharacters() : null;
	}

	render() {
		return (
			<ScrollView onScroll={({nativeEvent}) => this.handleScroll(nativeEvent)} style={styles.container}>

				<Image
					style={styles.logo}
					source={{ uri: Images.logo }}
					resizeMode="contain"/>

				{this.props.characters.results.map(character => (
					<Card key={character.id} {...character} />
				))}
			</ScrollView>
		);
	}
}

const mapStateToProps = state => ({
	characters: state.character
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CharacterActions, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main);
