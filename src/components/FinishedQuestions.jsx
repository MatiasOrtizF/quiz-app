import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import styles from '../components/Styles'

export default function FinishedQuestions() {
    return (
            <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                <Text style={styles.title}>81 Points</Text>
                <Text style={styles.subTitle}>Plase enter your user name!</Text>
                <TextInput
                    style={{backgroundColor:"rgba(0, 0, 0, 0.5)", width:"90%", color:"white", padding:10, borderRadius:10, margin:10}}
                    placeholder= "User Name"
                    placeholderTextColor = "white"
                    maxLength={12}
                />
                <TouchableOpacity style={{alignSelf:"flex-end", marginRight:"6%", backgroundColor:"#562C8A", padding:8, borderRadius:10}}>
                    <Text style={{color:"white", fontSize:16, fontWeight:700, alignSelf: "center"}}>Enviar</Text>
                </TouchableOpacity>
            </View>
    );
}