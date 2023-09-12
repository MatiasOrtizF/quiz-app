import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View, FlatList, BackHandler, SafeAreaView, Platform } from 'react-native';
import styles from '../components/Styles';
import Loading from '../components/Loading';
import TopRanking from '../components/TopRanking';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import UserService from '../services/UserService';

export default function RankingScreen() {
    const navigation = useNavigation();
    const [usersRanking, setUsersRanking] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        UserService.getAllUsers().then(response=> {
            const users = [];
            response.data.forEach((userData) => {
                const {userName, points} = userData;
                users.push({
                    id: userData.id,
                    userName,
                    points
                });
            });
            users.sort((a,b)=> b.points - a.points);
            setUsersRanking(users);
            setLoading(false);
        }).catch(error=> {
            console.log(error);
        })
    }, [])

    useEffect(() => {
        const onBackPress = () => {
            navigation.navigate('HomeScreen');
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            onBackPress
        );
    
        return () => backHandler.remove();
    }, [navigation]);

    return (
        <ImageBackground style={{flex:1}} source={require('../assets/bg-primary.jpg')}>
            <StatusBar style="inverted"/>
            {loading ?
                <Loading/>
            :
                <SafeAreaView style={{flex:1}}>
                    <View style={[styles.constainerRanking, {marginTop: Platform.OS === "android" && Constants.statusBarHeight}]}>
                        <TopRanking usersRanking={usersRanking.slice(0, 3)}/>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                style={{maxHeight:350, padding:10, backgroundColor:"#D7DCE0", borderRadius:25, width:"100%"}}
                                data={usersRanking.slice(3)}
                                keyExtractor={(item, index)=> index.toString()}
                                renderItem={({item, index})=> (
                                    <View style={[{backgroundColor:"#F9F9F9", margin:10, borderRadius:15, padding:15, flexDirection:"row"},index+4==usersRanking.length?{marginBottom:30}: null]}>
                                        <View style={{justifyContent:"center", marginRight:15}}>
                                            <Text style={{color:"gray", fontWeight:800}}>{index+4}</Text>
                                        </View>
                                        <View>
                                            <Text style={{fontWeight:600, fontSize:16}}>{item.userName}</Text>
                                            <Text style={{color:"gray"}}>{item.points} pts</Text>
                                        </View>
                                    </View>
                                )}
                            />
                    </View>
                </SafeAreaView>
            }
        </ImageBackground>
    );
}

