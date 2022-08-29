import { StyleSheet } from 'react-native'

export const getStyles = () =>
  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000bb'
    },
    containerTitle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        color: '#f2f1f2',
        fontSize: 30,
        marginBottom: 6,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#f2f1f2',
        paddingHorizontal: 16,
        paddingVertical: 7,
        alignItems: 'center',
        borderRadius: 25
    },
    textButton: {
        color: '#0f2850',
        fontSize: 16,
        fontWeight: '600'
    },
    text: {
        color: '#f2f1f2b1',
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 40
    }
  })
