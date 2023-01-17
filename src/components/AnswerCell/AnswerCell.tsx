import { useState } from 'react';

import { AnswerType } from '@/core/models';

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
    <div
      className={`${styles['answer-cell']} ${styles[`answer-cell--${answerState}`]}`}
      onClick={handleAnswerClick}>
      <div
        className={`${styles['answer-cell__line']} ${styles['answer-cell__line--left']}  ${
          styles[`answer-cell--line--${answerState}--left`]
        }`}
      />
      <div className={styles['answer-cell__content']}>
        <div className={styles['answer-cell__variant']}>{answersVariants[answer.id - 1]}</div>
        <div className={styles['answer-cell__answer']}>{answer.answer}</div>
      </div>
      <div
        className={`${styles['answer-cell__line']} ${
          styles[`answer-cell__line--${answerState}--right`]
        } ${styles['answer-cell__line--right']}`}
      />
    </div>
  );
};
