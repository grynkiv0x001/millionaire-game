import { FC, ReactNode } from 'react';

import styles from './Button.module.scss';

const ButtonVariants = {
  primary: 'primary'
} as const;

interface ButtonPropTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof ButtonVariants;
}

export const Button: FC<ButtonPropTypes> = ({
  children,
  className,
  variant = ButtonVariants.primary,
  ...props
}) => {
  return (
    <button
      className={`${className} ${styles['button']} ${styles[`button--${variant}`]}`}
      {...props}>
      {children}
    </button>
  );
};
