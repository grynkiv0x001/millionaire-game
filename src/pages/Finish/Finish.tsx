import { MainLayout } from '@/layouts';
import { Button, Text } from '@/shared';

import styles from './Finish.module.scss';

export const Finish = () => {
  return (
    <MainLayout variant="secondary">
      <div className={styles.finish}>
        <div>
          <Text>Total earned: </Text>
          <Text variant="h1" className={styles.finish__heading}>
            $1000 earned
          </Text>
        </div>
        <Button className={styles.finish__button} variant="primary">
          Try again
        </Button>
      </div>
    </MainLayout>
  );
};
