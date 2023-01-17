import { useEffect, useState } from 'react';

import { QuestionType } from '@/core/models';

import { Text } from '@/shared';
import { AnswerCell } from '../AnswerCell/AnswerCell';

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
  const [incorrect, setIncorrect] = useState(false);
  const [resetAnswerState, setResetAnswerState] = useState(false);

  const handleCorrect = () => {
    setTimeout(() => {
      setReward(question.reward * 2);
      setCorrect(false);
      setResetAnswerState(true);
      nextQuestion(question.id);
    }, 1000);
  };

  const handleIncorrect = () => {
    setReward(question.reward);

    setTimeout(() => {
      handleGameState(false);
    }, 1000);
  };

  useEffect(() => {
    if (correct) {
      handleCorrect();
    }

    if (incorrect) {
      handleIncorrect();
    }

    setResetAnswerState(false);
  }, [correct, incorrect]);

  useEffect(() => {
    if (question.id === 12) {
      handleGameState(false);
    }
  }, [question]);

  return (
    <div className={styles.question}>
      <Text variant="h1" className={styles.question__title}>
        {question.question}
      </Text>
      <div className={styles.question__answers}>
        {question.answers.map((answer) => (
          <AnswerCell
            key={answer.id}
            answer={answer}
            setCorrect={setCorrect}
            setIncorrect={setIncorrect}
            resetAnswerState={resetAnswerState}
          />
        ))}
      </div>
    </div>
  );
};
