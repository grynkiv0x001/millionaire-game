import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { config } from '@/config';
import { Header, MoneyList, Question } from '@/components';

import styles from './Game.module.scss';

export const Game = () => {
  const navigate = useNavigate();

  const { questions } = config;

  const [drawerOpened, setDrawerOpened] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(questions[0].id - 1);
  const [reward, setReward] = useState(questions[0].reward);
  const [gameState, setGameState] = useState(true);

  if (!gameState) {
    navigate('/finish?reward=' + reward);
  }

  return (
    <div className={styles.game}>
      <Header className={styles.game__header} opened={drawerOpened} openDrawer={setDrawerOpened} />
      {drawerOpened ? (
        <MoneyList currentReward={reward} />
      ) : (
        <div className={styles.game__screen}>
          <Question
            question={questions[questionNumber]}
            nextQuestion={setQuestionNumber}
            setReward={setReward}
            handleGameState={setGameState}
          />
          <div className={styles.game__sidebar}>
            <MoneyList currentReward={reward} />
          </div>
        </div>
      )}
    </div>
  );
};
