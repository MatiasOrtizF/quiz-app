import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TouchableOpacity, View, Image } from 'react-native';
import styles from '../components/Styles'
import Constants from 'expo-constants';
import { useEffect, useState } from 'react';

export default function QuestionScreen({route}) {
    const {categorySelected} = route.params
    
    const [questions, setQuestions] = useState([]);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [timer, setTimer] = useState(30)
    const [answers, setAnswers] = useState([])
    const [answersCorrects, setAnswersCorrects] = useState(0)

    useEffect(() => {
        callApi();
        const interval = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer===1) {
                    setQuestionNumber(questionNumber+1)
                }
                return prevTimer - 1;
            });
        }, 1000);
    }, []);

    const callApi = () => {
        fetch(`https://opentdb.com/api.php?amount=10&category=${categorySelected}`)
            .then(response=> response.json())
            .then(data=> {
                const modifiedResults = data.results.map(result => {
                    const respuestas = [result.correct_answer, ...result.incorrect_answers];
                    const respuestasAleatorias = respuestas.sort(() => Math.random() - 0.5);
                    return { ...result, respuestas: respuestasAleatorias };
                });
                setQuestions(modifiedResults);
            })
    }

    const isCorrect = (answer) => {
        if(answer== questions[questionNumber-1].correct_answer) {
            setAnswersCorrects(answersCorrects+1)
        } 
    }
    return (
        <ImageBackground style={{flex:1}} source={{uri:'https://www.fonewalls.com/wp-content/uploads/2019/10/Gradient-Background-Wallpaper-024.jpg'}}>
            <View style={{      flex: 1,
                    marginTop: Constants.statusBarHeight,
                    padding: 25,
                    justifyContent:"space-between"}}>
                <View>
                    <Text style={{alignSelf:"center", color:"white", fontSize:22, fontWeight:700, marginBottom:20}}>{categorySelected}</Text>
                    {timer > 10 ?
                        <Text style={styles.subTitle}>{timer} seg</Text>
                        :
                        <Text style={[styles.subTitle, {color:"red"}]}>{timer} seg</Text>
                    }
                    <Text style={styles.subTitle}>{questionNumber}/10</Text>
                    <Text style={styles.subTitle}>{answersCorrects}</Text>
                    <View style={{paddingVertical:10}}>
                        <Text style={styles.title}>{questions[questionNumber-1]?.question}</Text>
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                        <TouchableOpacity onPress={()=> setQuestionNumber(questionNumber+1)} style={[styles.buttonHome, {backgroundColor:"violet"}]}>
                            <Text style={styles.buttonHomeText}>{questions[questionNumber-1]?.correct_answer}</Text>
                        </TouchableOpacity>
                    {questions[questionNumber-1]?.respuestas.map((answer, index)=>(
                        <TouchableOpacity key={index} onPress={()=> {setQuestionNumber(questionNumber+1),setTimer(30),isCorrect(answer)}} style={[styles.buttonHome, {backgroundColor:"violet"}]}>
                            <Text style={styles.buttonHomeText}>{answer}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ImageBackground>
    );
}