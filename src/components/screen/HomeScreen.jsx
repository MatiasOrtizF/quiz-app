import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TouchableOpacity, View, Image } from 'react-native';
import styles from '../Styles'

export default function HomeScreen() {
    return (
        <ImageBackground style={{flex:1}} source={{uri:'https://i.pinimg.com/474x/03/ab/5c/03ab5c0e95e4a225583120d8fe47214b.jpg'}}>
            <View style={styles.container}>
                <StatusBar style="inverted" />
                <Image style={{width:200, height:200}} source={{uri:'https://play-lh.googleusercontent.com/-dGSUTdes6YTUtZfrtFfTsRPiIMCB8e2ykbhXDCg36qnvxdG_B6G51tNlvm66nPNrg'}}></Image>
                <View>
                    <Text style={{color:"white", fontSize:30, fontWeight:700, alignSelf:"center", marginBottom:10}}>Let`s Play!</Text>
                    <Text style={{color:"white", fontSize:16, fontWeight:600}}>Play now or see ranking</Text>
                </View>
                <View style={{width:"100%"}}>
                    <TouchableOpacity style={{backgroundColor:"#562C8A", padding:15, borderRadius:20, marginVertical:10}}>
                        <Text style={{color:"white", fontSize:21, fontWeight:600, alignSelf: "center"}}>Play Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'rgba(0, 0, 0, 0.5)', padding:15, borderRadius:20, marginVertical:10}}>
                        <Text style={{color:"white", fontSize:21, fontWeight:600, alignSelf: "center"}}>View Ranking</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}