import { useMemo } from 'react';

import { PaginationButton } from './PaginationButton';
import { Container } from './styles';

interface PaginationProps {
  totalCount: number;
  perPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 2;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((page) => page > 0);
}

export function Pagination({
  totalCount,
  perPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.ceil(totalCount / perPage);

  const previousPages = useMemo(
    () =>
      currentPage > 1
        ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
        : [],
    [currentPage],
  );

  const nextPages = useMemo(
    () =>
      currentPage < lastPage
        ? generatePagesArray(
            currentPage,
            Math.min(currentPage + siblingsCount, lastPage),
          )
        : [],
    [currentPage, lastPage],
  );

  return (
    <Container>
      <div className="container-buttons">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationButton onChangePage={onPageChange} number={1} />
            {currentPage > 2 + siblingsCount && <span>...</span>}
          </>
        )}

        {previousPages.map((page) => (
          <PaginationButton
            onChangePage={onPageChange}
            key={page}
            number={page}
          />
        ))}

        <PaginationButton
          onChangePage={onPageChange}
          number={currentPage}
          isCurrentPage
        />

        {nextPages.map((page) => (
          <PaginationButton
            onChangePage={onPageChange}
            key={page}
            number={page}
          />
        ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + siblingsCount + 1 < lastPage && <span>...</span>}
            <PaginationButton onChangePage={onPageChange} number={lastPage} />
          </>
        )}
      </div>
    </Container>
  );
}
