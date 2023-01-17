import { AnswerType } from '@/core/models';
import { Cell } from '@/shared';

import styles from './AnswerCell.module.scss';

export const AnswerState = {
  default: '',
  selected: 'selected',
  correct: 'correct',
  incorrect: 'incorrect'
} as const;

type AnswerCellPropTypes = {
  answer: AnswerType;
  answerState: keyof typeof AnswerState | string;
  checkAnswer: (correct: boolean) => void;
};

export const AnswerCell = ({
  answer,
  answerState = AnswerState.correct,
  checkAnswer
}: AnswerCellPropTypes) => {
  const answersVariants = 'ABCD';

  return (
    <Cell
      className={`${styles['answer-cell']}}`}
      variant={answerState}
      onClick={() => checkAnswer(answer.correct)}>{`${answersVariants[answer.id - 1]} ${
      answer.answer
    }`}</Cell>
  );
};
