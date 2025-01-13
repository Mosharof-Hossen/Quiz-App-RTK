import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getQuiz } from "@/redux/features/quiz/quizSlice";
import { useAppSelector } from "@/redux/hook";
import { performanceCal } from "./PerformanceCal";


const QuizSummary = () => {
    const { question, userAnswers } = useAppSelector(getQuiz);
    const currentAns = question.reduce((count, qn, i) => {
        return qn.correctAnswer === userAnswers[i] ? count + 1 : count;
    }, 0)
    const correctPercentage = parseFloat(((Number(currentAns) / Number(question.length)) * 100).toFixed(2));
    console.log(correctPercentage);
    return (
        <div className="flex justify-center">
            <Card className="w-[400px] rounded-md">
                <CardHeader>
                    <CardTitle className="font-bold text-2xl">Quiz Summary</CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    <h4 className="font-bold">You got {currentAns} out of {question.length}!</h4>
                    <Progress value={correctPercentage} className="bg-yellow-500 h-3"/>
                    <div className="text-xs flex justify-between">
                        <h4>{correctPercentage}%</h4>
                        <h4>{performanceCal(correctPercentage)?.performance}</h4>
                    </div>
                    <h3 className="text-red-500">Incorrect Answer: {question.length - currentAns}</h3>
                    <p className="text-sm font-bold">{performanceCal(correctPercentage)?.insight}</p>
                </CardContent>
                <CardFooter >
                    {/* <QuizControl></QuizControl> */}
                </CardFooter>
            </Card>
        </div>
    );
};

export default QuizSummary;