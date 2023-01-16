export type QuestionType = {
  id: number;
  question: string;
  multiple: boolean;
  reward: number;
  answers: Array<AnswerType>;
};

export type AnswerType = {
  id: number;
  answer: string;
  correct: boolean;
};
