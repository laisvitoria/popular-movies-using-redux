import React, { FC } from "react"
import { View, Text, TouchableOpacity, ImageBackground } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { navigate } from "../../navigators"
import { GlobalState } from "../../Redux"
import { Actions } from './redux'
import { getStyles } from "./welcomeScreen.style"

export const WelcomeScreen: FC = () => {
    const fetching = useSelector((state: GlobalState) => state.welcome.ui.fetching)
    const error = useSelector((state: GlobalState) => state.welcome.ui.error)
    const dispatch = useDispatch()
    const styles = getStyles()

    const goToListMovies = () => {
      dispatch(Actions.ui.request())
      navigate('ListMoviesScreen')
    }

    return (
        <ImageBackground
                    style={{width: '100%', height: '100%'}}
                    source={{uri: `https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/8bcoRX3hQRHufLPSDREdvr3YMXx.jpg`}}
        >
      <View testID="WelcomeScreen" style={styles.container}>
        { fetching ? 
          <Text style={{}} >Carregando...</Text>
          : error ? <Text style={{}} >:/ ocorreu um erro. Tente novamente</Text> :
          <View style={styles.containerTitle}>
            <Text style={styles.title} >Seja bem vindo(a)!</Text>
            <Text style={styles.text} >Aqui você conhecerá os filmes mais populares hoje na TMDB.</Text>
            <TouchableOpacity style={styles.button} onPress={goToListMovies}>
              <Text style={styles.textButton} >Buscar filmes populares</Text>
            </TouchableOpacity>
          </View>
        }
      </View>
        </ImageBackground>
    )
  }
