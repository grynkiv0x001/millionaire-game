import { useState } from 'react';

import { config } from '@/config';

import styles from './Game.module.scss';

export const Game = () => {
  const { questions } = config;

  const [drawerOpened, setDrawerOpened] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(questions[0].id - 1);

  return (
    <div className={styles.game}>
      {drawerOpened ? (
        // TODO: add drawer
        <div></div>
      ) : (
        <div className={styles.game__screen}>
          {/* TODO: Add game screen */}
          <div className={styles.game__sidebar}>{/* TODO: Add sidebar */}</div>
        </div>
      )}
    </div>
  );
};
