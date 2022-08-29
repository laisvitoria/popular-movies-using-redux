import { call, put, takeLatest } from 'redux-saga/effects'
import { ApiType } from '../../../services/Api'
import { Actions } from '../redux'

function* popularMovies(api: ApiType) {
    const response = yield call(api.getPopularMovies)
    console.log(response)
    try {
        if(response.status !== 200) {
            yield put(Actions.ui.failure())
            return
        }
        yield put(Actions.entities.addData(response.data.results))
        yield put(Actions.ui.success())

    } catch {
        yield put(Actions.ui.failure())
    }
}

export default function* listMoviesSaga(api: ApiType) {
    yield takeLatest(Actions.ui.request, popularMovies, api)
}