import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { ImageBackground, Text, TouchableOpacity, View, Image, SafeAreaView, ScrollView, Platform } from 'react-native';
import styles from '../components/Styles'
import TopRanking from '../components/TopRanking';

export default function CategorysScreen({navigation}) {
    const categorys = [
        {name: "Sports", image:"https://th.bing.com/th/id/R.2cae52eb53cf853d03bcca36f37d83b2?rik=JcxWFZXV%2buRnJA&pid=ImgRaw&r=0", number:21},
        {name: "Mythology", image:"https://cdn-icons-png.flaticon.com/512/4793/4793168.png", number:20},
        {name: "Film", image:"https://th.bing.com/th/id/R.c2fc1fb511a509342fee69024bac45b8?rik=mj%2fA6UKCCr%2byGg&pid=ImgRaw&r=0", number:11},
        {name: "History", image:"https://cdn-icons-png.flaticon.com/512/2234/2234697.png", number:23}
    ]

    return (
        <ImageBackground style={{flex:1}} source={require('../assets/bg-secundary.jpg')}>
            <StatusBar style="inverted"/>
            <ScrollView>
                <SafeAreaView style={{flex:1, justifyContent:"space-between", paddingHorizontal:25}}>
                    <View style={{marginTop: Platform.OS === "android" && Constants.statusBarHeight}}>
                        <View style={{marginBottom:15}}>
                            <Text style={styles.title}>Let`s Play</Text>
                            <Text style={styles.subTitle}>Choose a category to start playing</Text>
                        </View>
                        <View style={{flexDirection:"row", width:"100%", justifyContent:"space-between"}}>
                            <View style={{width:"45%"}}>
                                {categorys.slice(0,2).map((category, index)=> (
                                    <View key={index}>
                                        <TouchableOpacity onPress={()=> navigation.navigate('QuestionScreen', {categorySelected:category.number})} style={{backgroundColor:'rgba(0, 0, 0, 0.5)', paddingHorizontal:15, paddingVertical:10, borderRadius:20, marginVertical:5, alignItems:"center"}}>
                                            <Image style={styles.categoryIcons} source={{uri:category.image}}></Image>
                                        </TouchableOpacity>
                                        <Text style={{color:"white", fontWeight:700, marginBottom:10, alignSelf:"center"}}>{category.name}</Text>
                                    </View>
                                ))}
                            </View>

                            <View style={{width:"45%"}}>
                                {categorys.slice(-2).map((category, index)=> (
                                    <View key={index}>
                                        <TouchableOpacity onPress={()=> navigation.navigate('QuestionScreen', {categorySelected:category.number})} style={{backgroundColor:'rgba(0, 0, 0, 0.5)', paddingHorizontal:15, paddingVertical:10, borderRadius:20, marginVertical:5, alignItems:"center"}}>
                                            <Image style={styles.categoryIcons} source={{uri:category.image}}/>
                                        </TouchableOpacity>
                                        <Text style={{color:"white", fontWeight:700, marginBottom:10, alignSelf:"center"}}>{category.name}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                        <View style={{alignItems:"center"}}>
                            <TopRanking/>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </ImageBackground>
    );
}