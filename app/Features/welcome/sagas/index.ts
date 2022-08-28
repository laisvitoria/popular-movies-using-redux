import { call, put, takeLatest } from 'redux-saga/effects'
import { ApiType } from '../../../services/Api'
import { Actions } from '../redux'

function* fetchData(api: ApiType) {
    const response = yield call(api.fetchData)
    try {
        if(response.status !== 200) {
            yield put(Actions.ui.failure())
            return
        }
        yield put(Actions.entities.addData(response.data))
        console.log(response.data)
        yield put(Actions.ui.success())

    } catch {
        yield put(Actions.ui.failure())
    }
}

export default function* welcomeSaga(api: ApiType) {
    yield takeLatest(Actions.ui.request, fetchData, api)
}