import { quizData } from '@/Home/QuizData';
import { RootState } from '@/redux/store';
import { createSlice } from '@reduxjs/toolkit'

export interface TQuizState {
    questions: TQuestion[];
    currentQuestionIndex: number,
    userAnswers: (string | null)[],
    quizComplete: boolean,
}

export type TQuestion = {
    correctAnswer: string,
    options: string[];
    question: string;
    _id: string
}

export type TQuiz = {
    id: string;
    title: "string";
    description: string;
    questions: TQuestion[];
    createdAt: string;
    updatedAt: string
}

const initialState: TQuizState = {
    questions: [],
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
            if (state.currentQuestionIndex < state.questions.length - 1) {
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
        },

        setQuiz: (state, action) => {
            state.questions = action.payload
        }
    }
})

export const getQuiz = (state: RootState) => {
    return state.quizzes
}

export const { setAnswer, setQuiz, nextQuestion, previousQuestion, completeQuiz } = quizSlice.actions;
export const quizReducer = quizSlice.reducer;