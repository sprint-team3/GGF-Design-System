import classNames from 'classnames/bind';

import { SVGS } from '@/constants';

import useToggleButton from '@/hooks/useToggleButton';

import styles from './AlarmCard.module.scss';

const cx = classNames.bind(styles);
const { normal, hover } = SVGS.trashcan;

type AlarmCardProps = {
  id: number;
  content: string;
  createdAt: string;
  onClick: (id: number) => void;
};

const AlarmCard = ({ id, content, createdAt, onClick }: AlarmCardProps) => {
  const { isVisible: hoverState, handleToggleClick: handleToggleState } = useToggleButton();

  return (
    <div className={cx('alarm-card')}>
      <div className={cx('alarm-card-container')}>
        <p className={cx('alarm-card-content')}>{content}</p>
        <button
          className={cx('alarm-card-delete')}
          onMouseEnter={handleToggleState}
          onMouseLeave={handleToggleState}
          onClick={() => onClick(id)}
        >
          <img
            src={hoverState ? hover.url : normal.url}
            alt={hoverState ? hover.alt : normal.alt}
            width={24}
            height={24}
          />
        </button>
      </div>
      <span className={cx('alarm-card-created-at')}>{createdAt}</span>
    </div>
  );
};

export default AlarmCard;
