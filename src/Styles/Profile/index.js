import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#effffb'

    },
    imgCover: {
        flex: 1,
        height: 600,
        width: null,
        overflow: 'hidden',
        // borderTopEndRadius: 200,


    },
    Wrapper: {
        backgroundColor: 'rgba(0, 129, 138, 0.59)',
        bottom: 30,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 470,
        margin: 10,
        borderRadius: 15,
        height: '50%',

        // borderWidth: 1,
        // borderColor: 'white'

    },
    Pad: {
        padding: 10
    },
    textIconWrapper: {
        flexDirection: "row",
        alignItems: 'center',
        marginLeft: -10
    },
    Title: {
        color: '#fff',
        fontFamily: 'Helvetica',
        fontSize: 30,
        fontWeight: 'bold',
    },
    Text: {
        color: '#000',
        fontSize: 18,
        color: '#293462',
    },
    Results: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    Result: {
        // flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',

    },
    Test: {
        marginVertical: 80,
        alignItems: 'center',
        bottom: null,
        left: 0,
        position: 'relative',
        right: 0,
        top: 0,

    },

});
