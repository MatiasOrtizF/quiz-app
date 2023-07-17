import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View, ScrollView, FlatList , ActivityIndicator, BackHandler, SafeAreaView, Platform } from 'react-native';
import styles from '../components/Styles';
import Loading from '../components/Loading';
import TopRanking from '../components/TopRanking';
import React, { useEffect, useState } from 'react';
import firebase from '../database/firebase';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

export default function RankingScreen() {
    const navigation = useNavigation();
    const [usersRanking, setUsersRanking] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        firebase.db.collection('users').onSnapshot(querySnapshot=> {
            const users = [];

            querySnapshot.docs.forEach(doc=> {
                const {name, points} = doc.data()
                users.push({
                    id: doc.id,
                    name,
                    points
                })
            });

            users.sort((a,b)=> b.points - a.points);
            setUsersRanking(users)
            setLoading(false)
        })
    }, [])

    useEffect(() => {
        const onBackPress = () => {
          // Perform custom navigation when going back
          navigation.navigate('HomeScreen'); // Reemplaza 'ScreenName' con el nombre de la pantalla deseada
          return true; // Indica que se ha manejado el evento de retroceso
        };
    
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            onBackPress
        );
    
        return () => backHandler.remove(); // Limpia el listener al salir de la pantalla
    }, [navigation]);

    // useEffect(()=> {
    //     rankingArr();
    // }, [usersRanking])

    // async function fetchData() {
    //     const response = await fetch("http://localhost:8080/ranking");
    //     const data = await response.json();
    //     setUsersRanking(data);
    // }

    // const rankingArr = () => {
    //     usersRanking.sort((a,b)=> b.points - a.points);
    // }

    return (
        <ImageBackground style={{flex:1}} source={require('../assets/bg-primary.jpg')}>
            <StatusBar style="inverted"/>
            {loading ?
                <Loading/>
            :
            <SafeAreaView style={{flex:1}}>
                <View  style={[styles.constainerRanking, {marginTop: Platform.OS === "android" && Constants.statusBarHeight}]}>
                        <TopRanking usersRanking={usersRanking.slice(0, 3)}/>
                        <View style={{backgroundColor:"#C0C0C0", borderRadius:10, width:"100%", overflow:"hidden", padding:10}}>
                            <FlatList
                                data={usersRanking.slice(3)}
                                keyExtractor={(item, index)=> index.toString()}
                                renderItem={({item, index})=> (
                                    <View style={{backgroundColor:"#F9F9F9", margin:10, borderRadius:10, padding:15, flexDirection:"row"}}>
                                        <View style={{justifyContent:"center", marginRight:15}}>
                                            <Text style={{color:"gray"}}>{index+4}</Text>
                                        </View>
                                        <View>
                                            <Text style={{fontWeight:600, fontSize:16}}>{item.name}</Text>
                                            <Text style={{color:"gray"}}>{item.points} pts</Text>
                                        </View>
                                    </View>
                                )}
                            />
                        </View>
                </View>
            </SafeAreaView>
            }
        </ImageBackground>
    );
}

