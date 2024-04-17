import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

type MenuProps = {
  menuList: string[];
  activatedGame: number;
  handleActivatedGame: (index: number) => void;
};

const Menu = ({ menuList, activatedGame, handleActivatedGame }: MenuProps) => {
  return (
    <nav>
      <ul className={cx('menu')}>
        {menuList.map((game, index) => (
          <li key={`menu-${index}`}>
            <a
              href={`/${game}`}
              className={cx('menu-game', {
                'menu-game-activated': activatedGame === index,
              })}
              onClick={() => handleActivatedGame(index)}
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
