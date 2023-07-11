import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screen/HomeScreen';
import CategorysScreen from './src/screen/CategorysScreen';
import QuestionScreen from './src/screen/QuestionScreen';
import RankingScreen from './src/screen/RankingScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="RankingScreen" component={RankingScreen}/>
        <Stack.Screen name="CategorysScreen" component={CategorysScreen}/>
        <Stack.Screen name="QuestionScreen" component={QuestionScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
