import { useState } from 'react';

import { QuestionType } from '@/core/models';

import { Text } from '@/shared';

import styles from './Question.module.scss';

type QuestionPropTypes = {
  question: QuestionType;
  nextQuestion: (questionNumber: number) => void;
  setReward: (reward: number) => void;
  handleGameState: (gameState: boolean) => void;
};

export const Question = ({
  question,
  nextQuestion,
  setReward,
  handleGameState
}: QuestionPropTypes) => {
  const [correct, setCorrect] = useState(false);
  const [answerState, setAnswerState] = useState('');

  // const handleCheckAnswer = (isAnswerCorrect: boolean) => {};

  return (
    <div className={styles.question}>
      <div className={styles.question__title}>
        <Text variant="h1">{question.question}</Text>
      </div>
      <div className={styles.question__answers}></div>
    </div>
  );
};
