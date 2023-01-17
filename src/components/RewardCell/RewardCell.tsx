import { getCurrencyValue } from '@/utils/helpers';

import styles from './RewardCell.module.scss';

type RewardCellPropTypes = {
  reward: number;
  active: boolean;
};

export const RewardCell = ({ reward, active }: RewardCellPropTypes) => {
  const value = getCurrencyValue(reward);

  return (
    <div className={`${styles['reward-cell']} ${styles[`reward-cell--${active ? 'active' : ''}`]}`}>
      <div
        className={`${styles['reward-cell__line']} ${styles['reward-cell__line--left']} ${
          styles[`reward-cell__line--${active ? 'active' : ''}`]
        }`}
      />
      <div
        className={`${styles['reward-cell__content']} ${
          styles[`reward-cell__content--${active ? 'active' : ''}`]
        }`}>
        ${value}
      </div>
      <div
        className={`${styles['reward-cell__line']} ${styles['reward-cell__line--right']} ${
          styles[`reward-cell__line--${active ? 'active' : ''}`]
        }`}
      />
    </div>
  );
};
