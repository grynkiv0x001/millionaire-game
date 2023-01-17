import { useState } from 'react';

import { config } from '@/config';

import styles from './Game.module.scss';
import { MoneyList } from '@/components';

export const Game = () => {
  const { questions } = config;

  const [drawerOpened, setDrawerOpened] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(questions[0].id - 1);

  return (
    <div className={styles.game}>
      {drawerOpened ? (
        <MoneyList />
      ) : (
        <div className={styles.game__screen}>
          {/* TODO: Add game screen */}
          <div className={styles.game__sidebar}>
            <MoneyList />
          </div>
        </div>
      )}
    </div>
  );
};
