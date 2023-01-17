import { useEffect, useState } from 'react';

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
  resetAnswerState: boolean;
  setCorrect: (correct: boolean) => void;
  setIncorrect: (incorrect: boolean) => void;
};

export const AnswerCell = ({
  answer,
  resetAnswerState,
  setCorrect,
  setIncorrect
}: AnswerCellPropTypes) => {
  const answersVariants = 'ABCD';
  const [answerState, setAnswerState] = useState('');

  useEffect(() => {
    if (resetAnswerState) {
      setAnswerState('');
    }
  }, [resetAnswerState]);

  const handleCheckAnswer = (isAnswerCorrect: boolean) => {
    if (isAnswerCorrect) {
      setAnswerState(AnswerState.correct);
      setCorrect(true);
    } else {
      setAnswerState(AnswerState.incorrect);
      setIncorrect(true);
    }
  };

  const handleAnswerClick = () => {
    setAnswerState(AnswerState.selected);

    if (answerState === AnswerState.selected) {
      handleCheckAnswer(answer.correct);
    }
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
