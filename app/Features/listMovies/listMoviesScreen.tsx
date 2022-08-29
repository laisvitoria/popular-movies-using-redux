import React, { FC, useEffect } from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { navigate } from "../../navigators"
import { GlobalState } from "../../Redux"
import { Actions } from './redux'
import { getStyles } from "./listMovies.style"
import { ScrollView } from "react-native-gesture-handler"
import moment from 'moment'
import Stars from 'react-native-stars';


export const ListMoviesScreen: FC = () => {
    const styles = getStyles()
    const movies = useSelector((state: GlobalState) => state.listMovies.entities)
    const fetching = useSelector((state: GlobalState) => state.listMovies.ui.fetching)
    const error = useSelector((state: GlobalState) => state.listMovies.ui.error)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(Actions.ui.request())
    }, [])

    const goToMovieDetails = (id: number) => {
        navigate('MovieDetails', id)
    }

    return (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.container}>
        { fetching ? 
          <Text style={{}}>Carregando...</Text>
          : error ?
            <View style={{}}>
                <Text >:/ ocorreu um erro...</Text>
                <TouchableOpacity onPress={() => dispatch(Actions.ui.request())}>
                    <Text>Tentar novamente</Text>
                </TouchableOpacity>
            </View>
          :
          movies?.map(movie => (
            <TouchableOpacity key={movie.title} style={styles.movieContainer} onPress={() => goToMovieDetails(movie.id)}>
                <Image
                    style={styles.bannerMovie}
                    source={{uri: `https://image.tmdb.org/t/p/w300${movie.poster_path}`}}
                />
                <View>
                    <Text style={styles.movieTitle}>{movie.title.length > 32 ? `${movie.title.slice(0, 32)}...` : movie.title}</Text>
                    <Text>{moment(movie.release_date).format('MMMM Do YYYY')}</Text>
                    <View style={{alignItems: 'flex-start'}}>
                    <Stars
                        default={movie.vote_average/2}
                        count={5}
                        disabled={true}
                        starSize={15}
                    />
                    </View>
                </View>
            </TouchableOpacity>
          ))
        }
        </View>
      </ScrollView>
    )
  }
