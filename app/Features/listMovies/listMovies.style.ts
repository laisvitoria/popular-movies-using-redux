import { StyleSheet } from 'react-native'

export const getStyles = () =>
  StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f2f1f2',
        paddingTop: 15
    },
    container: {
        flex: 1,
        backgroundColor: '#f2f1f2',
        justifyContent: 'center',
        paddingBottom: 30
    },
    containerTitle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        color: '#0f2850',
        fontSize: 24,
        marginBottom: 16
    },
    movieContainer: {
        paddingHorizontal: 4,
        paddingVertical: 8,
        margin: 7,
        borderRadius: 12,
        flexDirection: 'row',
        backgroundColor: '#fff',
        elevation: 1
    },
    bannerMovie: {
        marginHorizontal: 8,
        paddingVertical: 7,
        borderRadius: 8,
        width: 100,
        height: 150
    },
    movieTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#0f2850'
    }
  })
