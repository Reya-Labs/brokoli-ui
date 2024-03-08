import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Pagination, PaginationProps } from './index';

export default {
  component: Pagination,
  title: 'Components/Pagination',
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const FirstPage = Template.bind({});
FirstPage.args = {
  maxPages: 5,
  onNextPageClick: () => alert('Next page'),
  onPreviousPageClick: () => alert(),
  page: 0,
};

export const MiddlePage = Template.bind({});
MiddlePage.args = {
  ...FirstPage.args,
  page: 2,
};

export const LastPage = Template.bind({});
LastPage.args = {
  ...FirstPage.args,
  page: 4,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...FirstPage.args,
  disabled: true,
};
