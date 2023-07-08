import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TouchableOpacity, View, Image } from 'react-native';
import styles from '../components/Styles'

export default function HomeScreen({navigation}) {
    return (
        <ImageBackground style={{flex:1}} source={{uri:'https://i.pinimg.com/474x/03/ab/5c/03ab5c0e95e4a225583120d8fe47214b.jpg'}}>
            <View style={styles.containerHome}>
                <StatusBar style="inverted" />
                <Image style={{width:200, height:200}} source={{uri:'https://play-lh.googleusercontent.com/-dGSUTdes6YTUtZfrtFfTsRPiIMCB8e2ykbhXDCg36qnvxdG_B6G51tNlvm66nPNrg'}}></Image>
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
        </ImageBackground>
    );
}