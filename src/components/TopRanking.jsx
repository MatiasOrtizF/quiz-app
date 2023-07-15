import { Text, View, Image, FlatList } from 'react-native';
import styles from './Styles'
import { useEffect } from 'react';

export default function TopRanking({usersRanking}) {
    // heigth: 100 , 125 , 75

    return (
        <View style={{flexDirection:"row"}}>
            {usersRanking?.map((user, index) => (
                <View key={index} style={{ alignSelf: "flex-start" }}>
                    {index == 0 ?
                        <Image style={{alignSelf:"center"}} source={require('../../assets/crown.png')}/>
                    :
                        null
                    }
                    <Text style={styles.rankingNameText}>{user.name}</Text>
                    <View style={{backgroundColor:"#5F3A93", marginVertical:10, padding:7, borderRadius:10}}>
                        <Text style={styles.rankingPtsText}>{user.points} pts</Text>
                    </View>
                    <View style={[styles.topRankingBox, index==0 ? {heigth:125} : index==3 ? {heigth:75}: {heigth:100}]}>
                        <Text style={styles.rankingBoxText}>{index+1}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
}

