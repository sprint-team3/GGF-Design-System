import classNames from 'classnames/bind';

import { GAME_NAME_LIST_EN } from '@/constants/index';
import { formatGameToLink } from '@/utils/index';

import styles from './Menu.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

const Menu = () => {
  const [activatedGame, setActivatedGame] = useState(0);

  const handleActivateGame = (number: number) => {
    setActivatedGame(number);
  };

  return (
    <nav>
      <ul className={cx('menu')}>
        {GAME_NAME_LIST_EN.map((game, index) => (
          <li key={`menu-${index}`}>
            <a
              href={`/${formatGameToLink(game)}`}
              className={cx('menu-game', {
                'menu-game-activated': activatedGame === index,
              })}
              onClick={() => handleActivateGame(index)}
            >
              {game}
              {activatedGame === index && <p className={cx('menu-under-line')}></p>}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
