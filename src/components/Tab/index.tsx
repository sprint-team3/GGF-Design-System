import classNames from 'classnames/bind';

import styles from './Tab.module.scss';

const cx = classNames.bind(styles);

type TabItem<T> = {
  id: T;
  text: string;
  count?: number;
};

type TabProps<T> = {
  items: TabItem<T>[];
  size: 'small' | 'medium';
  selectedTabId: T;
  onClick: (selectedTabId: T) => void;
};

const Tab = <T extends unknown>({ items, size, selectedTabId, onClick }: TabProps<T>) => {
  const isActivated = (id: T) => id === selectedTabId;
  const hasCount = (item: TabItem<T>) => item.count !== undefined;

  const handleClickTabItem = (clickedItemId: T) => {
    if (!isActivated(clickedItemId)) {
      onClick(clickedItemId);
    }
  };

  return (
    <ul className={cx('tab')}>
      {items.map((item, index) => (
        <li key={`tab-id-${item.id}-${index}`}>
          <button
            className={cx(`tab-item-${size}`, { activated: isActivated(item.id) })}
            onClick={() => handleClickTabItem(item.id)}
          >
            <span className={cx('tab-item-text')}>{item.text}</span>
            {hasCount(item) && <span className={cx('tab-item-count')}>{item.count}</span>}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tab;
