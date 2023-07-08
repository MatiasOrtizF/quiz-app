import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TouchableOpacity, View, Image, StyleSheet, ScrollView } from 'react-native';
import styles from '../components/Styles'
import Constants from 'expo-constants';

export default function RankingScreen() {

    return (
        <ImageBackground style={{flex:1}} source={{uri:'https://i.pinimg.com/474x/03/ab/5c/03ab5c0e95e4a225583120d8fe47214b.jpg'}}>
            <ScrollView>
                <View style={{flex:1, justifyContent:"center", alignItems:"center", width:"100%", padding:10}}>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                            <View style={{alignSelf:"flex-end"}}>
                                <Text style={stylesNew.rankingNameText}>Davis Curtis</Text>
                                <View style={{backgroundColor:"#5F3A93", marginVertical:10, padding:7, borderRadius:10}}>
                                    <Text style={stylesNew.rankingPtsText}>140 pts</Text>
                                </View>
                                <View style={{backgroundColor:"#5F3A93", padding:15, height:100,  justifyContent:"center"}}>
                                    <Text style={stylesNew.rankingBoxText}>2</Text>
                                </View>
                            </View>
                            <View style={{alignSelf:"flex-end"}}>
                                <Image style={{alignSelf:"center"}} source={require('../../assets/crown.png')}></Image>
                                <Text style={stylesNew.rankingNameText}>Alena Donin</Text>
                                <View style={{backgroundColor:"#5F3A93", marginVertical:10, padding:7, borderRadius:10}}>
                                    <Text style={stylesNew.rankingPtsText}>180 pts</Text>
                                </View>
                                <View style={{backgroundColor:"#6E5393", padding:15, height:125,  justifyContent:"center"}}>
                                    <Text style={stylesNew.rankingBoxText}>1</Text>
                                </View>
                            </View>
                            <View style={{alignSelf:"flex-end"}}>
                                <Text style={stylesNew.rankingNameText}>Craig Gouse</Text>
                                <View style={{backgroundColor:"#5F3A93", marginVertical:10, padding:7, borderRadius:10}}>
                                    <Text style={stylesNew.rankingPtsText}>130 pts</Text>
                                </View>
                                <View style={{backgroundColor:"#5F3A93", padding:15, height:75, justifyContent:"center",}}>
                                    <Text style={stylesNew.rankingBoxText}>3</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{backgroundColor:"gray", borderRadius:10, width:"100%", overflow:"hidden", padding:10}}>
                            <View style={{backgroundColor:"white", margin:10, borderRadius:10, padding:15, flexDirection:"row"}}>
                                <View style={{justifyContent:"center", marginRight:15}}>
                                    <Text style={{color:"gray"}}>4</Text>
                                </View>
                                <View>
                                    <Text style={{fontWeight:600, fontSize:16}}>Madelyn Dias</Text>
                                    <Text style={{color:"gray"}}>120 pts</Text>
                                </View>
                            </View>
                            <View style={{backgroundColor:"white", margin:10, borderRadius:10, padding:15, flexDirection:"row"}}>
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
        </ImageBackground>
    );
}

const stylesNew = StyleSheet.create({
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
    }
})

