import { call, put, takeLatest } from 'redux-saga/effects'
import { ApiType } from '../../../services/Api'
import { Actions } from '../redux'

function* getToken(api: ApiType) {
    const response = yield call(api.getToken)
    console.log(response)
    try {
        if(response.status !== 200) {
            yield put(Actions.ui.failure())
            return
        }
        console.log(response.data)
        yield put(Actions.entities.addToken(response.data.request_token))
        yield put(Actions.ui.success())

    } catch {
        yield put(Actions.ui.failure())
    }
}

export default function* welcomeSaga(api: ApiType) {
    yield takeLatest(Actions.ui.request, getToken, api)
}