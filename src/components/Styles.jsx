import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    containerHome: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: Constants.statusBarHeight,
        paddingHorizontal: 25,
        paddingVertical: 45
    },
    title: {
        color:"white", 
        fontSize:30, 
        fontWeight:700, 
        marginBottom:10
    },
    subTitle: {
        color:"white", 
        fontSize:16,
        fontWeight:600
    },
    buttonHome: {
        padding:15, 
        borderRadius:20, 
        marginVertical:10
    },
    buttonHomeText: {
        color:"white", 
        fontSize:21, 
        fontWeight:600, 
        alignSelf: "center"
    },
    categoryIcons: {
        width: 100, 
        height: 100,
    },
    rankingBoxText: {
        color:"white",
        fontSize:35,
        fontWeight:700,
        alignSelf:"center",
    },
    rankingNameText: {
        color:"white",
        fontSize: 17,
        fontWeight: 600,
    },
    rankingPtsText: {
        color:"white",
        fontWeight:600,
        alignSelf:"center"
    },
    question: {
        color:"white", 
        fontSize:27, 
        fontWeight:700, 
        marginBottom:10
    },
    buttonAnswerText: {
        color:"white", 
        fontSize:18, 
        fontWeight:700, 
        alignSelf: "center"
    }
});

export default styles;