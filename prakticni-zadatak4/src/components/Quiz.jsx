import { useState, useEffect } from 'react';
import styles from "../styles/Quiz.module.css";
import { shuffleArray } from "../utils";

const Quiz = ({setAgain}) => {

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestionAnswers, setCurrentQuestionAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [token, setToken] = useState('');

    const currentQuestion = questions[currentQuestionIndex];

    useEffect(() => {

        async function fetchToken() {
            try {
                const response = await fetch('https://opentdb.com/api_token.php?command=request');
                const data = await response.json();
                setToken(data.token);
            } catch (error) {
                console.log(error);
            }
        }

        async function fetchData() {
            try {
                const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
                const data = await response.json();
                setQuestions(data.results);
            } catch (error) {
                console.log(error);
            }
        }
        // prvo se dohvaća token zadužen za praćenje sesije -> pseudo-random pitanja
        fetchToken()
        .then(() => fetchData())
        .catch((error) => console.log(error));
    }, []);

    // ovaj hook premješta odgovore, da ne budu točni uvijek na istom mjestu
    useEffect(() => {
        if (currentQuestion) {
          const shuffledAnswers = shuffleArray([...currentQuestion.incorrect_answers, currentQuestion.correct_answer]);
          setCurrentQuestionAnswers(shuffledAnswers);
          setShowAnswer(false);
        }
      }, [currentQuestion]);

    function handleAnswerSubmit(answer) {
        const currentQuestion = questions[currentQuestionIndex];

        if (answer === currentQuestion.correct_answer) {
            setScore(trenutnoStanje => trenutnoStanje + 5);
        } else {
            setScore(trenutnoStanje => trenutnoStanje - 1);
        }

        setShowAnswer(true);

        setTimeout(() => {
        if (currentQuestionIndex === questions.length - 1) {
            setQuestions([]);
            setCurrentQuestionIndex(0);
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setShowAnswer(false);
        }
        }, 2000);
    }

    return (
        <div className={styles.quizContainer}>
            {questions.length > 0 ? (
                <>
                    <div className={styles.columnContainer1}>
                        <p className={styles.textBold}>{currentQuestion.question}</p>
                        <div className={styles.answerContainer}>
                            {currentQuestionAnswers.map((answer) => (
                                <button
                                key={answer}
                                className={styles.box}
                                style={ showAnswer ? answer === currentQuestion.correct_answer ? {backgroundColor: "#34f241"} : {backgroundColor: "#e24439"} : { backgroundColor: "#333"}}
                                onClick={() => handleAnswerSubmit(answer)}
                                >
                                    {answer}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className={styles.columnContainer2}>
                        <div>
                            <p className={styles.textScore}>Question: {currentQuestionIndex + 1}/{questions.length}</p>
                            <p className={styles.textScore}>Your current score: {score}</p>
                        </div>
                    </div>

                </>
            ) : (
                <div className={styles.columnContainer2}>
                    { score < 15 ? <p className={styles.textBold}>You got some really tough questions.</p> 
                    : <p className={styles.textBold}>Nice job, this was easy for you.</p> }
                    <p className={styles.textBold}>Your final score is {score}.</p>
                    <button className={styles.tryagainButton} onClick={() => setAgain(false)}>Try again</button>
                </div>  
            )}
        </div>
    );
}

export default Quiz