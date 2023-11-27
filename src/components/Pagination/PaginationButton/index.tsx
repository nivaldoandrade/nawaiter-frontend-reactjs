import { Button } from './styles';

interface PaginationButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  number: number;
  isCurrentPage?: boolean;
  onChangePage: (page: number) => void;
}

export function PaginationButton({
  number,
  isCurrentPage,
  onChangePage,
  ...rest
}: PaginationButtonProps) {
  return (
    <Button
      isCurrentPage={isCurrentPage}
      onClick={() => onChangePage(number)}
      disabled={isCurrentPage}
      {...rest}
    >
      {number}
    </Button>
  );
}
