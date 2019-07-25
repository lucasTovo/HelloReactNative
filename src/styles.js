import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    viewGo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 60,
    },

    go: {
        fontWeight: 'bold',
        color: '#fff',
        textShadowRadius: 2,
        textShadowColor: '#000',
    },

    actionButtom: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff60',
        borderColor: '#ffffff40',
        borderRadius: 100,
        borderWidth: 3,
        height: 60,
    },

    time: {
        fontWeight: 'bold',
        color: '#fff',
        textShadowRadius: 2,
        textShadowColor: '#000',
        height: 60,
        fontSize: 24,
    },
});

export default styles;
