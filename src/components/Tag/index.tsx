import { ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from './Tag.module.scss';

const cx = classNames.bind(styles);

type TagProps = {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'tertiary';
};

const Tag = ({ children, variant = 'default' }: TagProps) => {
  return <div className={cx(`tag-${variant}`)}>{children}</div>;
};

export default Tag;
