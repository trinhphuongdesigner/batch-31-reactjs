import { all, fork } from 'redux-saga/effects';
// import TemplateSaga from 'store/column/saga';

export default function* rootSaga() {
  yield all([
    // fork(TemplateSaga),
  ]);
}