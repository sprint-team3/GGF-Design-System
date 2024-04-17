import { ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from './Badge.module.scss';

const cx = classNames.bind(styles);

type BadgeProps = {
  children?: ReactNode;
  variant?: 'default' | 'secondary' | 'tertiary' | 'destructive' | 'outline';
};

const Badge = ({ children, variant = 'default' }: BadgeProps) => {
  return <div className={cx(`badge-${variant}`)}>{children}</div>;
};

export default Badge;
