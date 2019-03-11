import { all, takeLatest } from 'redux-saga/effects';
import { TYPES as CharacterTypes } from '../ducks/character';

import { getCharacters } from './character';

export default function* rootSaga() {
    yield all([
			takeLatest(CharacterTypes.GET_REQUEST, getCharacters),
		]);
}
