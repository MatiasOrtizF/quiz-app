import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: Constants.statusBarHeight,
        paddingHorizontal: 25,
        paddingVertical: 45
    },
    categoryIcons: {
        width: 100, 
        height: 100,
    }
});

export default styles;