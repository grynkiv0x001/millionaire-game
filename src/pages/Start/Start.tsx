import { useNavigate } from 'react-router-dom';

import { MainLayout } from '@/layouts';
import { ROUTES } from '@/router';
import { Button, Text } from '@/shared';

import styles from './Start.module.scss';

export const Start = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className={styles.start}>
        <Text variant="h1" className={styles.start__heading}>
          Who wants to be a millionaire?
        </Text>
        <Button
          className={styles.start__button}
          variant="primary"
          onClick={() => navigate(ROUTES.GAME)}>
          Start
        </Button>
      </div>
    </MainLayout>
  );
};
