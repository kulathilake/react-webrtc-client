export type AttemptDTO = {
    examId: string;
    candidateId: string;
    signature: string;
    answers: AnswerDTO[];
}

export type AnswerDTO = {
    id: string;
    questionId: string;
    answer: string;
    timestamp: number;
}