import { FC, ReactNode } from 'react';

import styles from './Cell.module.scss';

interface CellPropTypes extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  variant?: string;
}

export const Cell: FC<CellPropTypes> = ({ children, className, variant, ...props }) => {
  return (
    <div className={`${className} ${styles.cell} ${styles[`cell--${variant}`]}`} {...props}>
      <div className={`${styles.cell__line} ${styles['cell__line--left']}`}></div>
      <div className={styles.cell__content}>{children}</div>
      <div className={`${styles.cell__line} ${styles['cell__line--right']}`}></div>
    </div>
  );
};
