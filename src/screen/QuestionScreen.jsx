import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import styles from '../components/Styles'
import Constants from 'expo-constants';
import { useEffect, useState } from 'react';
import FinishedQuestions from '../components/FinishedQuestions';

export default function QuestionScreen({route}) {
    const {categorySelected} = route.params
    
    const [questions, setQuestions] = useState([]);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [timer, setTimer] = useState(30)
    const [points, setPoints] = useState(0)
    const [results, setResults] = useState(false)
    const [time, setTime] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        callApi();
    }, []);

    useEffect(() => {
        if(!loading) {
            const interval = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer===1) {
                        setResults(true)
                    }
                    return prevTimer - 1;
                });
            }, 1000);
        }
    }, [loading]);

    useEffect(() => {
        if(results) {
            timerrrrr();
        }
    }, [results]);

    const timerrrrr = () => {
        const interval = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime===3) {
                    setQuestionNumber(questionNumber+1)
                    setTimer(30)
                    setResults(false)
                    setTime(0)
                    clearInterval(interval)
                }
                return prevTime + 1;
            });
        }, 1000);
    }

    const callApi = () => {
        fetch(`https://opentdb.com/api.php?amount=10&category=${categorySelected}`)
            .then(response=> response.json())
            .then(data=> {
                const modifiedResults = data.results.map(result => {
                    const answers = [result.correct_answer, ...result.incorrect_answers];
                    const randomAnswers = answers.sort(() => Math.random() - 0.5);
                    return { ...result, answers: randomAnswers };
                });
                setQuestions(modifiedResults);
                setLoading(false)
            })
    }

    const isCorrect = (answer) => {
        if(answer== questions[questionNumber-1].correct_answer) {
            setPoints(points+timer)
        } 
    }
    return (
        <ImageBackground style={{flex:1}} source={{uri:'https://www.fonewalls.com/wp-content/uploads/2019/10/Gradient-Background-Wallpaper-024.jpg'}}>
            {loading ?
                <View style={{alignItems:"center", justifyContent:"center"}}>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>
            :
                questionNumber > 10 ?
                    <FinishedQuestions/>
                :
                    <View style={{flex:1, marginTop:Constants.statusBarHeight, padding:25, justifyContent:"space-between"}}>
                    <View>
                        <Text style={{alignSelf:"center", color:"white", fontSize:22, fontWeight:700, marginBottom:20}}>{categorySelected===21? "Sports": categorySelected===20? "Mythology": categorySelected===11? "Film": "History"}</Text>
                        {timer > 10 ?
                            <Text style={styles.subTitle}>{timer} seg</Text>
                            :
                            <Text style={[styles.subTitle, {color:"red"}]}>{timer} seg</Text>
                        }
                        <Text style={styles.subTitle}>{questionNumber}/10</Text>
                        <Text style={styles.subTitle}>{points} PTS</Text>
                        <View style={{paddingVertical:10}}>
                            <Text style={styles.question}>{questions[questionNumber-1]?.question}</Text>
                        </View>
                    </View>
                    <View style={{marginBottom:20}}>
                        {questions[questionNumber-1]?.answers.map((answer, index)=>(
                            results ?
                                <TouchableOpacity key={index} onPress={()=> {setResults(true), isCorrect(answer)}} style={[styles.buttonHome, answer==questions[questionNumber-1].correct_answer ? {backgroundColor:"green"} : {backgroundColor:"red"}]}>
                                    <Text style={styles.buttonAnswerText}>{answer}</Text>
                                </TouchableOpacity>
                            :
                                <TouchableOpacity key={index} onPress={()=> {setResults(true), isCorrect(answer)}} style={[styles.buttonHome, {backgroundColor:"violet"}]}>
                                    <Text style={styles.buttonAnswerText}>{answer}</Text>
                                </TouchableOpacity>
                        ))}
                    </View>
                    </View>
            }
            <StatusBar style="inverted" />
        </ImageBackground>
    );
}