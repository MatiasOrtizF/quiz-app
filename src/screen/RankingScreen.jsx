import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View, ScrollView, FlatList } from 'react-native';
import styles from '../components/Styles'
import TopRanking from '../components/TopRanking';
import { useEffect, useState } from 'react';
import firebase from '../database/firebase';

export default function RankingScreen() {
    const [usersRanking, setUsersRanking] = useState([]);

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
        })
    }, [])

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
        <ImageBackground style={{flex:1}} source={{uri:'https://i.pinimg.com/474x/03/ab/5c/03ab5c0e95e4a225583120d8fe47214b.jpg'}}>
                <View style={{flex:1, justifyContent:"center", alignItems:"center", width:"100%", padding:10}}>
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
            <StatusBar style="dark"/>
        </ImageBackground>
    );
}

