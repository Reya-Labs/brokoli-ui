import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { Pagination, PaginationProps } from './index';

export default {
  component: Pagination,
  title: 'Components/Pagination',
} as Meta<PaginationProps>;

const InteractiveTemplate: Story<PaginationProps> = (args) => {
  const [page, setPage] = useState(0);

  const handleNextPageClick = () => {
    setPage((currentPage) => Math.min(currentPage + 1, args.maxPages - 1));
  };

  const handlePreviousPageClick = () => {
    setPage((currentPage) => Math.max(currentPage - 1, 0));
  };

  return (
    <Pagination
      {...args}
      page={page}
      onNextPageClick={handleNextPageClick}
      onPreviousPageClick={handlePreviousPageClick}
    />
  );
};

export const InteractivePagination = InteractiveTemplate.bind({});
InteractivePagination.args = {
  maxPages: 5,
};
