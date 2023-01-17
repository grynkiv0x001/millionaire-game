import { ReactComponent as CloseIcon } from '@/assets/icons/Close.svg';
import { ReactComponent as MenuIcon } from '@/assets/icons/Menu.svg';

import styles from './Header.module.scss';

type HeaderPropTypes = {
  className?: string;
  opened?: boolean;
  openDrawer?: (value: boolean) => void;
};

export const Header = ({ className, opened, openDrawer }: HeaderPropTypes) => {
  const handleMenuClick = () => {
    openDrawer && openDrawer(!opened);
  };

  return (
    <header className={`${className} ${styles.header}`}>
      <div className={styles.menu}>
        <div className={styles.menu__item} onClick={handleMenuClick}>
          {opened ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </header>
  );
};
