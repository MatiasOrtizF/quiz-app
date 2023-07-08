import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TouchableOpacity, View, Image } from 'react-native';
import styles from '../components/Styles'
import Constants from 'expo-constants';

export default function QuestionScreen({route}) {
    const {categorySelected} = route.params

    return (
        <ImageBackground style={{flex:1}} source={{uri:'https://www.fonewalls.com/wp-content/uploads/2019/10/Gradient-Background-Wallpaper-024.jpg'}}>
            <View style={{      flex: 1,
                    marginTop: Constants.statusBarHeight,
                    padding: 25,
                    justifyContent:"space-between"}}>
                <View>
                    <Text style={{alignSelf:"center", color:"white", fontSize:22, fontWeight:700, marginBottom:20}}>{categorySelected}</Text>
                    <Text style={styles.subTitle}>60seg</Text>
                    <Text style={styles.subTitle}>7/10</Text>
                    <View style={{paddingVertical:10}}>
                        <Text style={styles.title}>What is the 6 planet in the solar system?</Text>
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <TouchableOpacity style={[styles.buttonHome, {backgroundColor:"violet"}]}>
                        <Text style={styles.buttonHomeText}>Jupiter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonHome, {backgroundColor:"violet"}]}>
                        <Text style={styles.buttonHomeText}>Jupiter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonHome, {backgroundColor:"violet"}]}>
                        <Text style={styles.buttonHomeText}>Jupiter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonHome, {backgroundColor:"violet"}]}>
                        <Text style={styles.buttonHomeText}>Jupiter</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}