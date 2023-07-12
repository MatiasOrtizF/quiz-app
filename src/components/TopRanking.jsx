import { Text, View, Image, } from 'react-native';
import styles from './Styles'

export default function TopRanking() {

    return (
        <View style={{flexDirection:"row"}}>
            <View style={{alignSelf:"flex-end"}}>
                <Text style={styles.rankingNameText}>DavisCurtis</Text>
                <View style={{backgroundColor:"#5F3A93", marginVertical:10, padding:7, borderRadius:10}}>
                    <Text style={styles.rankingPtsText}>140 pts</Text>
                </View>
                <View style={{backgroundColor:"#5F3A93", padding:15, height:100,  justifyContent:"center"}}>
                    <Text style={styles.rankingBoxText}>2</Text>
                </View>
            </View>
            <View style={{alignSelf:"flex-end"}}>
                <Image style={{alignSelf:"center"}} source={require('../../assets/crown.png')}></Image>
                <Text style={styles.rankingNameText}>AlenaDonin</Text>
                <View style={{backgroundColor:"#5F3A93", marginVertical:10, padding:7, borderRadius:10}}>
                    <Text style={styles.rankingPtsText}>180 pts</Text>
                </View>
                <View style={{backgroundColor:"#6E5393", padding:15, height:125,  justifyContent:"center"}}>
                    <Text style={styles.rankingBoxText}>1</Text>
                </View>
            </View>
            <View style={{alignSelf:"flex-end"}}>
                <Text style={styles.rankingNameText}>CraigGouse</Text>
                <View style={{backgroundColor:"#5F3A93", marginVertical:10, padding:7, borderRadius:10}}>
                    <Text style={styles.rankingPtsText}>130 pts</Text>
                </View>
                <View style={{backgroundColor:"#5F3A93", padding:15, height:75, justifyContent:"center",}}>
                    <Text style={styles.rankingBoxText}>3</Text>
                </View>
            </View>
        </View>
    );
}

