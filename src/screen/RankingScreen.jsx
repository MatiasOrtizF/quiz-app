import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View, ScrollView } from 'react-native';
import styles from '../components/Styles'
import TopRanking from '../components/TopRanking';

export default function RankingScreen() {

    return (
        <ImageBackground style={{flex:1}} source={{uri:'https://i.pinimg.com/474x/03/ab/5c/03ab5c0e95e4a225583120d8fe47214b.jpg'}}>
            <ScrollView>
                <View style={{flex:1, justifyContent:"center", alignItems:"center", width:"100%", padding:10}}>
                        <TopRanking/>
                        <View style={{backgroundColor:"#C0C0C0", borderRadius:10, width:"100%", overflow:"hidden", padding:10}}>
                            <View style={{backgroundColor:"#F9F9F9", margin:10, borderRadius:10, padding:15, flexDirection:"row"}}>
                                <View style={{justifyContent:"center", marginRight:15}}>
                                    <Text style={{color:"gray"}}>4</Text>
                                </View>
                                <View>
                                    <Text style={{fontWeight:600, fontSize:16}}>Madelyn Dias</Text>
                                    <Text style={{color:"gray"}}>120 pts</Text>
                                </View>
                            </View>
                            <View style={{backgroundColor:"#F9F9F9", margin:10, borderRadius:10, padding:15, flexDirection:"row"}}>
                                <View style={{justifyContent:"center", marginRight:15}}>
                                    <Text style={{color:"gray"}}>5</Text>
                                </View>
                                <View>
                                    <Text style={{fontWeight:600, fontSize:16}}>Madelyn Dias</Text>
                                    <Text style={{color:"gray"}}>115 pts</Text>
                                </View>
                            </View>
                        </View>
                </View>
            </ScrollView>
            <StatusBar style="dark"/>
        </ImageBackground>
    );
}

