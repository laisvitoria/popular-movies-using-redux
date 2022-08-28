import React from "react"
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"
import { AppNavigator } from "./navigators"
import { ToggleStorybook } from "../storybook/toggle-storybook"
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./Redux"

function App() {
  const store = configureStore({
    reducer: rootReducer
  })

  /*
    é uma abstração amigável do createStore do redux
    deve ser passado para ele o reducer principal ou um objeto de slice reducers
    que serão passados automágicamente para o combineReducers

    OUTROS PARAMETROS:
    middleware      ---> array opcional de middlewares que serão passados automaticamente para o applyMiddleware
                        um array de middleware é setado automaticamente

    devTools        ---> boolean para indicar se o configureStore dará suporte à extensão do browser Redux DevTools
    preloadedState  ---> state inicial a ser passado para o createStore (opcional)
    enhancers       ---> também opcional recebe um array de enhancers que será passado para o compose
                         ou uma função  de callback que retorna um array de enhancers
  */

//Link da documentação: https://redux-toolkit.js.org/api/configureStore

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <ToggleStorybook>
          <AppNavigator/>
        </ToggleStorybook>
      </Provider>
    </SafeAreaProvider>
  )
}

export default App
