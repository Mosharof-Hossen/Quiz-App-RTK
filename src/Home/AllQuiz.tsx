import { useGetAllQuizQuery } from "@/redux/api/quizApi";

const AllQuiz = () => {
    const { data } = useGetAllQuizQuery(undefined);
    console.log({data});
    return (
        <div>
            All Quiz
        </div>
    );
};

export default AllQuiz;