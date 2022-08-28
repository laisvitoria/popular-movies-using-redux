import React, { FC } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { GlobalState } from "../../Redux"
import { Actions } from './redux'

export const WelcomeScreen: FC = () => {
    const fetching = useSelector((state: GlobalState) => state.welcome.ui.fetching)
    const error = useSelector((state: GlobalState) => state.welcome.ui.error)
    const dispatch = useDispatch()

    return (
      <View testID="WelcomeScreen" style={{flex: 1, justifyContent: "center", alignItems: 'center'}}>
        {
          fetching ? 
          <Text style={{}} >Carregando...</Text>
          : error ? <Text style={{}} >:/ ocorreu um erro. Tente novamente</Text> :
          <View>
            <Text style={{}} >Seja bem vindo!</Text>
            <TouchableOpacity onPress={() => dispatch(Actions.ui.request())}>
              <Text>Carregar dados</Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    )
  }
