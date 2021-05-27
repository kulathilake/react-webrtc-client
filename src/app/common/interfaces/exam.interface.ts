import { ExamSchedule } from "../types/exam.types";
import { Candidate } from "./candidate.interface";

export interface Exam {
    id: string;
    title: string;
    schedule: ExamSchedule;
    questions: ExamQuestion[];
    candidates: Candidate[];
    secretKey: string;
    setTitle(title: string): void;
    setSchedule(schedule: ExamSchedule): void;
    addQuestion(question: ExamQuestion): void;
    deleteQuestion(question: ExamQuestion) : void;
    getQuestion(id: string): ExamQuestion;
    encryptExamination(): Exam;
};

export interface ExamQuestion {
    id: string;
    title: string;
    text: string; 
    mark: number;
    children: ExamQuestion[];
    parent: ExamQuestion | Exam;
    setTitle(title: string): void;
    setText(text: string): void;
    setMark(mark: number): void;
    setParent(parent: ExamQuestion | Exam): void;
    addChildQuestion(question: ExamQuestion, position: number): void;
    deleteChildQuestion(question: ExamQuestion): void;
    getChildQuestion(id: string): ExamQuestion;
    reorderChildQuestion(question:ExamQuestion, newPosition: number): void;
}

