import { Text, View, Image } from 'react-native';
import styles from './Styles'

export default function TopRanking({usersRanking}) {
    return (
        <View style={{flexDirection:"row"}}>
            {usersRanking?.map((user, index) => (
                <View key={index} style={{ alignSelf: "flex-end" }}>
                    {index === 1 ?
                        <Image style={{ alignSelf: "center" }} source={require('../../assets/crown.png')}/>
                        :
                        null
                    }
                    <Text style={styles.rankingNameText}>{index === 0 ? usersRanking[1].userName : index === 1 ? usersRanking[0].userName : user.userName}</Text>
                    <View style={{ backgroundColor: "#5F3A93", marginVertical: 10, padding: 7, borderRadius: 10, alignSelf:"center"}}>
                        <Text style={styles.rankingPtsText}>{index === 0 ? usersRanking[1].points : index === 1 ? usersRanking[0].points : user.points} pts</Text>
                    </View>
                    <View style={[styles.topRankingBox, index === 1 ? { height: 125, backgroundColor:"#6A4E92" } : index === 0 ? { height: 100 } : { height: 75 }]}>
                        <Text style={styles.rankingBoxText}>{index === 0 ? 2 : index === 1 ? 1 : 3}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
}

