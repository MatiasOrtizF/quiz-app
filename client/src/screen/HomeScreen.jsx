import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TouchableOpacity, View, Image, SafeAreaView, Platform } from 'react-native';
import styles from '../components/Styles'
import Constants from 'expo-constants';

export default function HomeScreen({navigation}) {
    return (
        <ImageBackground style={{flex:1}} source={require('../assets/bg-primary.jpg')}>
            <StatusBar style="inverted" />
            <SafeAreaView style={{flex:1}}>
                <View style={[styles.containerHome, {marginTop: Platform.OS === "android" && Constants.statusBarHeight}]}>
                    <Image style={{width:200, height:200}} source={require('../assets/quiz-logo.png')}></Image>
                    <View>
                        <Text style={[styles.title, {alignSelf:"center"}]}>Let`s Play!</Text>
                        <Text style={styles.subTitle}>Play now or see ranking</Text>
                    </View>
                    <View style={{width:"100%"}}>
                        <TouchableOpacity onPress={()=> navigation.navigate('CategorysScreen')} style={[styles.buttonHome, {backgroundColor:"#562C8A"}]}>
                            <Text style={styles.buttonHomeText}>Play Now</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> navigation.navigate('RankingScreen')} style={[styles.buttonHome, {backgroundColor:'rgba(0, 0, 0, 0.5)'}]}>
                            <Text style={styles.buttonHomeText}>View Ranking</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}