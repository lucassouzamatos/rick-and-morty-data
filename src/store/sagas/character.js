import { call, put, select } from 'redux-saga/effects';
import api, { withoutBase } from '../../services/api';

import { Creators as CharacterActions } from '../ducks/character';

export function* getCharacters() {
	try {
		const characters = yield select(state => (state.character));

		let response = null;

		if (!!Object.keys(characters.info).length) {
			response = yield call(withoutBase.get, characters.info.next);
		}
		else {
			response = yield call(api.get, '/character');
		}

		yield put(CharacterActions.getCharactersSuccess(response.data));
	} catch(err) {
			throw err;
	}
}
