import { Text, TouchableOpacity, View, TextInput } from 'react-native';
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
        // agregar para que el usuario tenga que tener +3 de longitud
        if(!dataUser.name.trim()) {
            alert("please provide a name")
        } else {
            await firebase.db.collection('users').add({
                name: dataUser.name,
                points: dataUser.points
            })
            navigation.navigate('RankingScreen')
        }
    }

    return (
            <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                <Text style={styles.title}>81 Points</Text>
                <Text style={styles.subTitle}>Plase enter your user name!</Text>
                <TextInput
                    style={{backgroundColor:"rgba(0, 0, 0, 0.5)", width:"90%", color:"white", padding:10, borderRadius:10, margin:10}}
                    placeholder= "User Name"
                    placeholderTextColor = "white"
                    onChangeText={(value)=> hadleChangeText('name', value)}
                    maxLength={12}
                />
                <TouchableOpacity onPress={()=> saveNewUser()} style={{alignSelf:"flex-end", marginRight:"6%", backgroundColor:"#562C8A", padding:8, borderRadius:10}}>
                    <Text style={{color:"white", fontSize:16, fontWeight:700, alignSelf: "center"}}>Enviar</Text>
                </TouchableOpacity>
            </View>
    );
}