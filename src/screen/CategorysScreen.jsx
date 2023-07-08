import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TouchableOpacity, View, Image } from 'react-native';
import styles from '../components/Styles'
import Constants from 'expo-constants';
import TopRanking from '../components/TopRanking';

export default function CategorysScreen({navigation}) {
    const categorys = [
        {name: "Sports", image:"https://th.bing.com/th/id/R.2cae52eb53cf853d03bcca36f37d83b2?rik=JcxWFZXV%2buRnJA&pid=ImgRaw&r=0"},
        {name: "Mythology", image:"https://cdn-icons-png.flaticon.com/512/4793/4793168.png"},
        {name: "Film", image:"https://th.bing.com/th/id/R.c2fc1fb511a509342fee69024bac45b8?rik=mj%2fA6UKCCr%2byGg&pid=ImgRaw&r=0"},
        {name: "History", image:"https://cdn-icons-png.flaticon.com/512/2234/2234697.png"}
    ]

    return (
        <ImageBackground style={{flex:1}} source={{uri:'https://www.fonewalls.com/wp-content/uploads/2019/10/Gradient-Background-Wallpaper-024.jpg'}}>
            <View style={{      flex: 1,
        justifyContent: "space-between",
        marginTop: Constants.statusBarHeight,
        paddingHorizontal: 25}}>
                <StatusBar style="inverted" />
                <View style={{marginBottom:15}}>
                    <Text style={styles.title}>Let`s Play</Text>
                    <Text style={styles.subTitle}>Choose a category to start playing</Text>
                </View>
                <View style={{flexDirection:"row", width:"100%", justifyContent:"space-between"}}>
                    <View style={{width:"45%"}}>
                        {categorys.slice(0,2).map((category)=> (
                            <>
                                <TouchableOpacity onPress={()=> navigation.navigate('QuestionScreen', {categorySelected:category.name})} style={{backgroundColor:'rgba(0, 0, 0, 0.5)', paddingHorizontal:15, paddingVertical:10, borderRadius:20, marginVertical:5, alignItems:"center"}}>
                                    <Image style={styles.categoryIcons} source={{uri:category.image}}></Image>
                                </TouchableOpacity>
                                <Text style={{color:"white", fontWeight:700, marginBottom:10, alignSelf:"center"}}>{category.name}</Text>
                            </>
                        ))}
                    </View>

                    <View style={{width:"45%"}}>
                        {categorys.slice(-2).map((category)=> (
                            <>
                                <TouchableOpacity onPress={()=> navigation.navigate('QuestionScreen', {categorySelected:category.name})} style={{backgroundColor:'rgba(0, 0, 0, 0.5)', paddingHorizontal:15, paddingVertical:10, borderRadius:20, marginVertical:5, alignItems:"center"}}>
                                    <Image style={styles.categoryIcons} source={{uri:category.image}}></Image>
                                </TouchableOpacity>
                                <Text style={{color:"white", fontWeight:700, marginBottom:10, alignSelf:"center"}}>{category.name}</Text>
                            </>
                        ))}
                    </View>
                </View>
                {/* <View>
                    <Text style={styles.title}>Best Players</Text> */}
                    {/* <View>
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
                    </View> */}
                    <View style={{alignItems:"center"}}>
                        <TopRanking/>
                    </View>
                {/* </View> */}
            </View>
        </ImageBackground>
    );
}