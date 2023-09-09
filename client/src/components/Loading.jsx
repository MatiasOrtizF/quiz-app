import { SafeAreaView, ActivityIndicator } from 'react-native';

export default function Loading() {
    return (
        <SafeAreaView style={{flex:1, alignItems:"center", justifyContent:"center"}}>
            <ActivityIndicator size="large" color="#00ff00" />
        </SafeAreaView>
    );
}

