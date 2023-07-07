import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TouchableOpacity, View, Image } from 'react-native';
import styles from '../Styles'
import Constants from 'expo-constants';

export default function QuestionScreen() {
    return (
        <ImageBackground style={{flex:1}} source={{uri:'https://www.fonewalls.com/wp-content/uploads/2019/10/Gradient-Background-Wallpaper-024.jpg'}}>
                        <View style={{      flex: 1,
        justifyContent: "space-between",
        marginTop: Constants.statusBarHeight,
        paddingHorizontal: 25}}>
            <Text>Tymer</Text>
                <Text style={{color:"white", fontSize:18, fontWeight:600}}>What is the 6 planet in the solar system?</Text>
                <TouchableOpacity>
                    <Text>Jupiter</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Jupiter</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Jupiter</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Jupiter</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}