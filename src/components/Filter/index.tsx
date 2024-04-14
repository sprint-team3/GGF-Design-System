import classNames from 'classnames/bind';

import styles from './Filter.module.scss';

const cx = classNames.bind(styles);

type FilterItem<T> = {
  id: T;
  text: string | number;
};

type FilterProps<T> = {
  items: FilterItem<T>[];
  selectedFilterId: T;
  onChange: (selectedId: T) => void;
};

const Filter = <T extends unknown>({ items, selectedFilterId, onChange }: FilterProps<T>) => {
  const isActivated = (id: T) => id === selectedFilterId;

  const handleClickFilterItem = (clickedItemId: T) => {
    if (isActivated(clickedItemId)) return;

    onChange(clickedItemId);
  };

  return (
    <ul className={cx('filter')}>
      {items.map((item, index) => (
        <li key={`filter-id-${item.id}-${index}`}>
          <button
            className={cx('filter-item', { activated: isActivated(item.id) })}
            onClick={() => handleClickFilterItem(item.id)}
          >
            <span>{item.text}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Filter;
