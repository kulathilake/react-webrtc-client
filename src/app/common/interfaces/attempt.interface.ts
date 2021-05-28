import { ExamQuestion } from "./exam.interface";
import { Candidate } from "./candidate.interface";
import { ExamSchedule } from "../types/exam.types";

export interface Attempt{
    examId: string;
    examTitle: string;
    examSchedule: ExamSchedule;
    candidate: Candidate;
    questions: ExamQuestion[];
    answers: AttemptAnswer[];
    decryptQuestions(key: string): void;
    addAnswer(answer: AttemptAnswer): void;
    getAnswer(questionId: string): AttemptAnswer;
    beginAnswering(): void;
    isWithinSchedule(): Promise<boolean>;
    submit(): Promise<void>;
}

export interface AttemptAnswer {
    id: string;
    question: ExamQuestion;
    answer: string;
    timestamp: number;
    updateAnswer(answer: string): void;
}