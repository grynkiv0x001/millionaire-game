import { config } from '@/config';

import { RewardCell } from '../';
import styles from './MoneyList.module.scss';

type MoneyListPropTypes = {
  currentReward?: number;
};

export const MoneyList = ({ currentReward }: MoneyListPropTypes) => {
  const rewards = config.questions.map((question) => question.reward).reverse();

  return (
    <div className={styles['money-list']}>
      {rewards.map((reward) => (
        <div key={reward} className={styles['money-list__item']}>
          <RewardCell reward={reward} active={currentReward === reward} />
        </div>
      ))}
    </div>
  );
};
