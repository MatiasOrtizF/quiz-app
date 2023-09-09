import { Text, TouchableOpacity, View, TextInput, Alert , SafeAreaView } from 'react-native';
import styles from '../components/Styles'
import { useState } from 'react';
import firebase from '../database/firebase';
import { useNavigation } from '@react-navigation/native';

export default function FinishedQuestions(props) {
    const navigation = useNavigation();
    const [dataUser, setDataUser] = useState({
        name: "",
        points: props.points,
    });

    const hadleChangeText = (name, value) => {
        setDataUser({...dataUser, [name]: value})
    }

    const saveNewUser = async () => {
        if(dataUser.name.trim().length < 3) {
            alert("Please provide a name with at least 3 characters.")
        } else {
            const usuariosRef = firebase.db.collection('users');
            const querySnapshot = await usuariosRef    
                .orderBy('name')
                .startAt(dataUser.name.toLowerCase())
                .endAt(dataUser.name.toLowerCase() + '\uf8ff')
                .get();
                
            if (!querySnapshot.empty) {
                alert("Username is already in use. Please choose another name.");
            } else {
                await usuariosRef.add({
                    name: dataUser.name,
                    points: dataUser.points
                });
                navigation.navigate('RankingScreen')
            }
        }
    }

    const handleButtonCancel = () => {
        Alert.alert('Cancel', 'When canceling you will be directed to the home', [
            {text: 'Cancel'},
            {text: 'OK', onPress:()=> navigation.navigate('HomeScreen')},
        ]);
    }

    return (
            <SafeAreaView style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                <Text style={styles.title}>{props.points} Points</Text>
                <Text style={styles.subTitle}>Plase enter your user name!</Text>
                <TextInput
                    style={{backgroundColor:"rgba(0, 0, 0, 0.5)", width:"90%", color:"white", padding:10, borderRadius:10, margin:10}}
                    placeholder= "User Name"
                    placeholderTextColor = "white"
                    onChangeText={(value)=> hadleChangeText('name', value)}
                    maxLength={12}
                />
                <View style={{flexDirection:"row", justifyContent:"space-between", width:"90%"}}>
                    <TouchableOpacity onPress={()=> handleButtonCancel()} style={{alignSelf:"flex-end", backgroundColor:"#216534", padding:8, borderRadius:10}}>
                        <Text style={{color:"white", fontSize:16, fontWeight:700, alignSelf: "center"}}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> saveNewUser()} style={{alignSelf:"flex-end", backgroundColor:"#562C8A", padding:8, borderRadius:10}}>
                        <Text style={{color:"white", fontSize:16, fontWeight:700, alignSelf: "center"}}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
    );
}