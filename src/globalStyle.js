import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    pageStyle: {
        backgroundColor: '#000202',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '5%'
    },

    bgCardStyle: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 15,
        borderColor: '#FFFFFF30',
        backgroundColor: '#FFFFFF28',
        paddingHorizontal: 15,
        paddingVertical: 20,
        display: 'flex',
        flexDirection: 'column'
    },

    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    flexCol: {
        display: 'flex',
        flexDirection: 'column'
    },

    textFmaily: {
        fontFamily: 'Nexa'
    },
    textLight: {
        color: 'white'
    },
    textDark: {
        color: '#808080'
    },
    textRed: {
        color: '#FF3131'
    },
    textBold: {
        fontWeight: '600'
    }
})