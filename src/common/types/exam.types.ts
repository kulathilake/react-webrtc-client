import { Author } from "../interfaces/author.interface";

export type ExamDTO = {
    id?: string;
    title: string;
    schedule: ExamSchedule;
    author?: Author;
    status?: 'pending' | 'done' | 'cancelled' | string
}

export type QuestionDTO = {
    examId: string;
    id?: string;
    title: string;
    text: string; 
    mark: number;
    parentId: string | null;
}

export type ExamSampleAnswer = {
    examId: string;
    questionId: string;
    answer: string;
}

export type ExamSchedule = {
    start: string;
    end: string;
    duration: number;
};

