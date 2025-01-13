import { quizData } from '@/Home/QuizData';
import { RootState } from '@/redux/store';
import { createSlice } from '@reduxjs/toolkit'

interface TQuiz {
    question: typeof quizData;
    currentQuestionIndex: number,
    userAnswers: (string | null)[],
    quizComplete: boolean,
}

const initialState: TQuiz = {
    question: quizData,
    currentQuestionIndex: 0,
    userAnswers: Array(quizData.length).fill(null),
    quizComplete: false,

}

export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setAnswer: (state, action) => {
            const { answer, currentQuestionIndex } = action.payload;
            state.userAnswers[currentQuestionIndex] = answer;
        },
        nextQuestion: (state) => {
            if (state.currentQuestionIndex < state.question.length - 1) {
                state.currentQuestionIndex += 1;
            }
        },
        previousQuestion: (state) => {
            if (state.currentQuestionIndex > 0) {
                state.currentQuestionIndex -= 1;
            }
        },
        completeQuiz: (state) => {
            state.quizComplete = true;
        }
    }
})

export const getQuiz = (state: RootState) => {
    return state.quizzes
}

export const { setAnswer, nextQuestion, previousQuestion, completeQuiz } = quizSlice.actions;
export const quizReducer = quizSlice.reducer;