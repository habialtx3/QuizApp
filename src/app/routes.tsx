import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/StartPage";
import QuizPage from "../pages/QuizPage";
import ResultPage from "../pages/ResultPage";
import MainLayout from "../Layout/MainLayout";

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/quiz',
                element: <QuizPage />
            },
            {
                path: '/result',
                element: <ResultPage />
            },
        ]
    }
])