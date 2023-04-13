import { css } from '@emotion/react';
import styled from '@emotion/styled';

const openCSS = css`
  transform: rotate(45deg) translate(-2.5px, -2.5px);

  &:before {
    transform: translate(5px, 0);
  }

  &:after {
    transform: rotate(90deg) translate(5px, 0);
  }
`;

export const ToggleCaretBox = styled('div')`
  position: relative;
  width: 10.6px;
  height: 6.5px;
`;

export const ToggleCaretArrow = styled('span')<{
  isOpen: boolean;
}>`
  width: 6.5px;
  height: 6.5px;
  display: inline-block;
  position: relative;
  bottom: -2.5px;
  left: -5px;
  transition: transform 200ms ease-in;
  margin-top: 1px;
  text-align: left;
  transform: rotate(45deg);
  float: right;

  &:before,
  &:after {
    position: absolute;
    content: '';
    display: inline-block;
    width: 6px;
    height: 1.5px;
    background-color: currentColor;
    transition: transform 200ms ease-in;
  }

  &:after {
    position: absolute;
    transform: rotate(90deg);
    top: -2.5px;
    left: 2.5px;
  }

  ${({ isOpen }) => (isOpen ? openCSS : '')};
`;
