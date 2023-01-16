import { FC, ReactNode } from 'react';

import styles from './MainLayout.module.scss';

const MainLayoutVariants = {
  primary: 'primary',
  secondary: 'secondary'
} as const;

type MainLayoutPropTypes = {
  children: ReactNode;
  variant?: keyof typeof MainLayoutVariants;
};

export const MainLayout: FC<MainLayoutPropTypes> = ({
  children,
  variant = MainLayoutVariants.primary
}) => {
  return (
    <div className={`${styles['main-layout']} ${styles[`main-layout--${variant}`]}`}>
      <div className={styles['main-layout__cover']} />
      <div className={styles['main-layout__content']}>{children}</div>
    </div>
  );
};
