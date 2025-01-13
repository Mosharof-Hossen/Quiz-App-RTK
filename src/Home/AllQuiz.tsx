import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetAllQuizQuery } from "@/redux/api/quizApi";
import { setQuiz, TQuestion, TQuiz } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch } from "@/redux/hook";
import AddQuiz from "./AddQuiz";

const AllQuiz = () => {
    const dispatch = useAppDispatch();
    const { data, isLoading } = useGetAllQuizQuery(undefined);
    if (isLoading) {
        return <p>Loading.....</p>
    }
    console.log(data);
    const handleSetQuiz = (qna: TQuestion[]) => {
        console.log(qna);
        dispatch(setQuiz(qna))
    }
    return (
        <div className="flex justify-center gap-5">
            <div>
                <AddQuiz></AddQuiz>
            </div>
            {
                data.map((quiz: TQuiz, index: number) =>
                    <Card
                        onClick={() => handleSetQuiz(quiz.questions)}
                        key={index}
                        className="w-[400px] rounded-md hover:shadow-md cursor-pointer"
                    >
                        <CardHeader>
                            <CardTitle>{quiz.title}</CardTitle>
                            <CardDescription>{quiz.description} </CardDescription>
                        </CardHeader>
                        <CardContent>

                        </CardContent>
                        <CardFooter >

                        </CardFooter>
                    </Card>

                )
            }
        </div >
    );
};

export default AllQuiz;