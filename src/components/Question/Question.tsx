import { useState } from 'react';

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

  const handleCheckAnswer = (isAnswerCorrect: boolean) => {
    if (question.id === 12) {
      setReward(question.reward);
      handleGameState(false);
    }

    if (!isAnswerCorrect) {
      setReward(question.reward);
      handleGameState(false);
    }

    if (isAnswerCorrect) {
      setCorrect(true);
    }

    if (correct && isAnswerCorrect) {
      setReward(question.reward * 2);
      nextQuestion(question.id);
    }
  };

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
            checkAnswer={handleCheckAnswer}
            // answerState={}
          />
        ))}
      </div>
    </div>
  );
};
