import classNames from 'classnames/bind';

import { SVGS } from '@/constants';

import usePagination from '@/hooks/usePagination';

import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);
const { left, right } = SVGS.pagination;

type PaginationProps = {
  totalCount: number;
  pageState: number;
  postPerPage: number;
  defaultPageSize: number;
  pageLimit: number;
  onClick: (pageNumber: number) => void;
};

const Pagination = ({ totalCount, pageState, postPerPage, defaultPageSize, pageLimit, onClick }: PaginationProps) => {
  const {
    activePage,
    currentPageGroupIndex,
    currentPageGroup,
    pagesArray,
    handlePageClick,
    handlePrevButtonClick,
    handleNextButtonClick,
    handleFirstPageClick,
    handleLastPageClick,
  } = usePagination(totalCount, pageState, postPerPage, pageLimit, onClick);

  const isArrowActivated = currentPageGroupIndex !== pagesArray.length - 1;
  const showPagination = !!totalCount && postPerPage !== defaultPageSize;

  return (
    showPagination && (
      <nav role='presentation' aria-label='Page Navigation'>
        <ul className={cx('pagination')}>
          <li>
            <button onClick={handleFirstPageClick}>
              <img
                className={cx({ 'pagination-arrow-activated': currentPageGroupIndex })}
                src={left.double.url}
                alt={left.double.alt}
                width={24}
                height={24}
              />
            </button>
          </li>
          <li>
            <button onClick={handlePrevButtonClick}>
              <img
                className={cx({ 'pagination-arrow-activated': currentPageGroupIndex })}
                src={left.single.url}
                alt={left.single.alt}
                width={20}
                height={20}
              />
            </button>
          </li>
          {currentPageGroup.map((pageNumber, index) => (
            <li key={`page-${index}`}>
              <button
                className={cx('pagination-page', { 'pagination-page-activated': pageNumber === activePage })}
                onClick={() => handlePageClick(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          ))}
          <li>
            <button onClick={handleNextButtonClick}>
              <img
                className={cx({
                  'pagination-arrow-activated': isArrowActivated,
                })}
                src={right.single.url}
                alt={right.single.alt}
                width={20}
                height={20}
              />
            </button>
          </li>
          <li>
            <button onClick={handleLastPageClick}>
              <img
                className={cx({
                  'pagination-arrow-activated': isArrowActivated,
                })}
                src={right.double.url}
                alt={right.double.alt}
                width={24}
                height={24}
              />
            </button>
          </li>
        </ul>
      </nav>
    )
  );
};

export default Pagination;
