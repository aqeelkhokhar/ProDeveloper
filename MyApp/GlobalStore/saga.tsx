// sagas/index.js
import {takeEvery} from "redux-saga/effects";

function* incrementAsyncSaga(action: any) {
    yield new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async delay
}

export default function* rootSaga() {
    yield takeEvery("video", incrementAsyncSaga);
}
