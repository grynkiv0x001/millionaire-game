import { AnswerType } from '@/core/models';
import { Cell } from '@/shared';
import { useState } from 'react';

import styles from './AnswerCell.module.scss';

export const AnswerState = {
  default: '',
  selected: 'selected',
  correct: 'correct',
  incorrect: 'incorrect'
} as const;

type AnswerCellPropTypes = {
  answer: AnswerType;
  // answerState: keyof typeof AnswerState | string;
  checkAnswer: (correct: boolean) => void;
};

export const AnswerCell = ({
  answer,
  // answerState = AnswerState.correct,
  checkAnswer
}: AnswerCellPropTypes) => {
  const answersVariants = 'ABCD';
  const [answerState, setAnswerState] = useState('');

  const handleAnswerClick = () => {
    setAnswerState(AnswerState.selected);
    checkAnswer(answer.correct);
  };

  return (
    <Cell
      className={`${styles['answer-cell']}`}
      variant={answerState}
      onClick={handleAnswerClick}>{`${answersVariants[answer.id - 1]} ${answer.answer}`}</Cell>
  );
};
