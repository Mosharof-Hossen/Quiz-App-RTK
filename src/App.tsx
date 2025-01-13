import AllQuiz from './Home/AllQuiz';
import Question from './Home/Question'
import QuizSummary from './Home/QuizSummary';
import { getQuiz } from './redux/features/quiz/quizSlice'
import { useAppSelector } from './redux/hook'

function App() {
  const { quizComplete } = useAppSelector(getQuiz);
  return (

    <div className='container mx-auto p-5'>
      <h1 className='text-center text-4xl font-bold my-5'>Basic Quiz App</h1>
      <AllQuiz></AllQuiz>
      {
        !quizComplete ? <Question></Question> : <QuizSummary></QuizSummary>
      }
    </div>
  )
}

export default App
