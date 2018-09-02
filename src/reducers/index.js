import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import { reducer as game } from './game'


function* sampleRootSaga() {}

export function* rootSaga() {
  yield all([sampleRootSaga()]);
}

export const reducers = combineReducers({
  game,
});
