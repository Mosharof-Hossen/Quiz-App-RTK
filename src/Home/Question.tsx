import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getQuiz, setAnswer } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import QuizControl from "./QuizControl";

const Question = () => {
    const dispatch = useAppDispatch();
    const { question, currentQuestionIndex, userAnswers } = useAppSelector(getQuiz);
    const currentQuestion = question[currentQuestionIndex];
    const handleAnswerChange = (answer: string) => {
        console.log(answer);
        dispatch(setAnswer({ answer, currentQuestionIndex }))
    }
    console.log({ question, currentQuestionIndex, currentQuestion,userAnswers });
    return (
        <div className="flex justify-center">
            <Card className="w-[400px] rounded-md">
                <CardHeader>
                    <CardTitle>{currentQuestion.question}</CardTitle>
                    <CardDescription>Question {currentQuestionIndex + 1} of {question.length}</CardDescription>
                </CardHeader>
                <CardContent>
                    {
                        currentQuestion.options.map((option, index) => <Button
                            onClick={() => handleAnswerChange(option)}
                            key={index}
                            size="lg"
                            className="w-full mt-2 whitespace-normal break-words"
                            variant={option === userAnswers[currentQuestionIndex]? "default":"outline"}
                        >{option}</Button>)
                    }
                </CardContent>
                <CardFooter >
                    <QuizControl></QuizControl>
                </CardFooter>
            </Card>
        </div>
    )
};

export default Question;