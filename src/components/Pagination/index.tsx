import React from 'react';

import { ProgressBar } from '../ProgressBar';
import { Typography } from '../Typography';
import { ActionButton, BarBox, PaginationBox } from './Pagination.styled';

export type PaginationProps = {
  disabled?: boolean;
  maxPages: number;
  onNextPageClick: () => void;
  onPreviousPageClick: () => void;
  page: number;
};
export const Pagination: React.FunctionComponent<PaginationProps> = ({
  onPreviousPageClick,
  onNextPageClick,
  maxPages,
  page,
  disabled = false,
}) => {
  const nextDisabled = page === maxPages - 1;
  const previousDisabled = page === 0;

  const handleOnNextPageClick = () => {
    if (nextDisabled) {
      return;
    }
    onNextPageClick();
  };

  const handleOnPreviousPageClick = () => {
    if (previousDisabled) {
      return;
    }
    onPreviousPageClick();
  };

  return (
    <PaginationBox data-testid="Pagination-PaginationBox">
      <ActionButton
        data-testid={`Pagination-PreviousActionButton-${previousDisabled ? 'disabled' : ''}`}
        disabled={previousDisabled || disabled}
        onClick={handleOnPreviousPageClick}
      >
        <Typography
          colorToken={previousDisabled ? 'white500' : 'white100'}
          typographyToken="bodyXSmallMedium"
        >
          {previousDisabled
            ? `Current ${(page + 1).toString().padStart(2, '0')}`
            : `< Previous ${page.toString().padStart(2, '0')}`}
        </Typography>
      </ActionButton>
      <BarBox>
        <ProgressBar percentageComplete={Math.min(((page + 1) * 100) / maxPages, 100)} />
      </BarBox>
      <ActionButton
        data-testid={`Pagination-NextActionButton-${nextDisabled ? 'disabled' : ''}`}
        disabled={nextDisabled || disabled}
        onClick={handleOnNextPageClick}
      >
        <Typography
          colorToken={nextDisabled ? 'white500' : 'white100'}
          typographyToken="bodyXSmallMedium"
        >
          {nextDisabled
            ? `${maxPages.toString().padStart(2, '0')} Last`
            : `${maxPages.toString().padStart(2, '0')} Next >`}
        </Typography>
      </ActionButton>
    </PaginationBox>
  );
};
