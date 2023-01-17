import { Cell } from '@/shared';
import { getCurrencyValue } from '@/utils/helpers';

import styles from './RewardCell.module.scss';

type RewardCellPropTypes = {
  reward: number;
  active: boolean;
};

export const RewardCell = ({ reward, active }: RewardCellPropTypes) => {
  const value = getCurrencyValue(reward);
  console.log('RewardCell', reward, active, value);
  return (
    <Cell className={`${styles['reward-cell']} ${styles[`reward-cell--${active && 'active'}`]}`}>
      ${value}
    </Cell>
  );
};
