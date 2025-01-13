import { Button } from "@/components/ui/button";
import { completeQuiz, getQuiz, nextQuestion, previousQuestion } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const QuizControl = () => {
    const { question, currentQuestionIndex, userAnswers } = useAppSelector(getQuiz);
    const dispatch = useAppDispatch();
    const handleNextQuestion = () => {
        dispatch(nextQuestion())
    }
    const handlePreviousQuestion = () => {
        dispatch(previousQuestion())
    }
    const handleComplete = () => {
        dispatch(completeQuiz())
    }
    return (
        <div className="flex justify-between w-full">
            <Button
                disabled={currentQuestionIndex === 0}
                onClick={() => handlePreviousQuestion()}
                className="bg-blue-500 hover:bg-blue-600"
            >Previous</Button>
            {
                currentQuestionIndex < question.length - 1 ?
                    <Button
                        disabled={userAnswers[currentQuestionIndex] == null}
                        onClick={() => handleNextQuestion()}
                        className="bg-blue-500 hover:bg-blue-600"
                    >Next</Button>
                    :
                    <Button
                    disabled = {userAnswers[currentQuestionIndex] == null}
                        onClick={() => handleComplete()}
                        className="bg-blue-500 hover:bg-blue-600"
                    >Submit</Button>
            }

        </div>
    );
};

export default QuizControl;