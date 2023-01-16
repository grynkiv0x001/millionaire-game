import { FC, ReactNode } from 'react';

import styles from './Text.module.scss';

const TextVariants = {
  h1: 'h1',
  p: 'p'
} as const;

type TextPropTypes = {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof TextVariants;
};

export const Text: FC<TextPropTypes> = ({ children, className, variant = TextVariants.p }) => {
  return (
    <div className={`${className} ${styles.text} ${styles[`text--${variant}`]}`}>{children}</div>
  );
};
