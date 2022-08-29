import { all } from 'redux-saga/effects'
import Api from '../services/Api'
import welcomeSaga from '../Features/welcome/sagas'
import listMoviesSaga from '../Features/listMovies/sagas'

export default function* root(): any {
  const api = Api.create()

  yield all([
    welcomeSaga(api),
    listMoviesSaga(api)
  ])
}
