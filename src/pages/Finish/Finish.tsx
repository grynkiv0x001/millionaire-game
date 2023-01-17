import { useNavigate, useSearchParams } from 'react-router-dom';

import { getCurrencyValue } from '@/utils/helpers';
import { ROUTES } from '@/router';
import { MainLayout } from '@/layouts';
import { Button, Text } from '@/shared';

import styles from './Finish.module.scss';

export const Finish = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const totalEarned = getCurrencyValue(searchParams.get('reward') || 0);

  return (
    <MainLayout variant="secondary">
      <div className={styles.finish}>
        <div>
          <Text className={styles['finish__sub-heading']}>Total earned: </Text>
          <Text variant="h1" className={styles.finish__heading}>
            ${totalEarned} earned
          </Text>
        </div>
        <Button
          className={styles.finish__button}
          variant="primary"
          onClick={() => navigate(ROUTES.START)}>
          Try again
        </Button>
      </div>
    </MainLayout>
  );
};
