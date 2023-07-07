import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TouchableOpacity, View, Image } from 'react-native';
import styles from '../Styles'
import Constants from 'expo-constants';

export default function CategorysScreen() {
    return (
        <ImageBackground style={{flex:1}} source={{uri:'https://www.fonewalls.com/wp-content/uploads/2019/10/Gradient-Background-Wallpaper-024.jpg'}}>
            <View style={{      flex: 1,
        justifyContent: "space-between",
        marginTop: Constants.statusBarHeight,
        padding: 25}}>
                <StatusBar style="inverted" />
                <View style={{marginBottom:15}}>
                    <Text style={{color:"white", fontSize:30, fontWeight:700, marginBottom:10}}>Let`s Play</Text>
                    <Text style={{color:"white", fontSize:16, fontWeight:600}}>Choose a category to start playing</Text>
                </View>
                <View>
                    <Text style={{color:"white", fontSize:30, fontWeight:700, marginBottom:10}}>Best Players</Text>
                    <View>
                        <Text style={{color:"white", fontSize:18, fontWeight:700, marginBottom:10}}>1.
                            <Text> Jaimito</Text>
                        </Text>
                        <Text style={{color:"white", fontSize:18, fontWeight:700, marginBottom:10}}>2.
                            <Text> Jaimito</Text>
                        </Text>
                        <Text style={{color:"white", fontSize:18, fontWeight:700, marginBottom:10}}>3.
                            <Text> Jaimito</Text>
                        </Text>
                        <Text style={{color:"white", fontSize:18, fontWeight:700, marginBottom:10}}>4.
                            <Text> Jaimito</Text>
                        </Text>
                        <Text style={{color:"white", fontSize:18, fontWeight:700, marginBottom:10}}>5.
                            <Text> Jaimito</Text>
                        </Text>
                    </View>
                </View>
                <View style={{flexDirection:"row", width:"100%", justifyContent:"space-between"}}>
                    <View style={{width:"45%"}}>
                        <TouchableOpacity style={{backgroundColor:"#562C8A", paddingHorizontal:15, paddingVertical:10, borderRadius:20, marginVertical:5, alignItems:"center"}}>
                            <Image style={styles.categoryIcons} source={{uri:'https://th.bing.com/th/id/R.2cae52eb53cf853d03bcca36f37d83b2?rik=JcxWFZXV%2buRnJA&pid=ImgRaw&r=0'}}></Image>
                        </TouchableOpacity>
                        <Text style={{color:"white", fontWeight:700, marginBottom:10, alignSelf:"center"}}>Sports</Text>

                        <TouchableOpacity style={{backgroundColor:'rgba(0, 0, 0, 0.5)', padding:15, borderRadius:20, marginVertical:10}}>
                            <Image style={styles.categoryIcons} source={{uri:'https://th.bing.com/th/id/R.745cdb2650f0a8b823531d7def256be2?rik=g%2f9yZj9V88nf9Q&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f7Ta%2fB8j%2f7TaB8jRTA.png&ehk=8wylOKtQqPF76Q45pOVbWSeS6m4G6%2bGKXupFfcW2Sxc%3d&risl=&pid=ImgRaw&r=0'}}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{width:"45%"}}>
                        <TouchableOpacity style={{backgroundColor:"#562C8A", padding:15, borderRadius:20, marginVertical:10}}>
                            <Image style={styles.categoryIcons} source={{uri:'https://th.bing.com/th/id/R.c2fc1fb511a509342fee69024bac45b8?rik=mj%2fA6UKCCr%2byGg&pid=ImgRaw&r=0'}}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity style={{backgroundColor:'rgba(0, 0, 0, 0.5)', padding:15, borderRadius:20, marginVertical:10}}>
                            <Image style={styles.categoryIcons} source={{uri:'https://th.bing.com/th/id/R.2cae52eb53cf853d03bcca36f37d83b2?rik=JcxWFZXV%2buRnJA&pid=ImgRaw&r=0'}}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}