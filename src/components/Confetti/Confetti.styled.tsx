import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const bang = keyframes`
  from {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

export const Container = styled('div')`
  position: relative;
  width: 100%;
  & i {
    position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    width: 5px;
    height: 7px;
    opacity: 0;
    pointer-events: none;
  }

  i:nth-of-type(1) {
    transform: translate3d(-82px, 60px, 0) rotate(297deg);
    background: ${({ theme }) => theme.colors.secondary100};
    animation: ${bang} 700ms ease-out forwards;
    opacity: 0;
  }
  i:nth-of-type(2) {
    transform: translate3d(-67px, -49px, 0) rotate(64deg);
    background: ${({ theme }) => theme.colors.warning100};
    animation: ${bang} 700ms ease-out forwards;
    opacity: 0;
  }
  i:nth-of-type(3) {
    transform: translate3d(-89px, 30px, 0) rotate(45deg);
    background: ${({ theme }) => theme.colors.error100};
    animation: ${bang} 700ms ease-out forwards;
    opacity: 0;
  }
  i:nth-of-type(4) {
    transform: translate3d(-8px, 7px, 0) rotate(245deg);
    background: ${({ theme }) => theme.colors.primary100};
    animation: ${bang} 700ms ease-out forwards;
    opacity: 0;
  }
  i:nth-of-type(5) {
    transform: translate3d(-33px, 28px, 0) rotate(208deg);
    background: ${({ theme }) => theme.colors.primary100};
    animation: ${bang} 700ms ease-out forwards;
    opacity: 0;
  }
  i:nth-of-type(6) {
    transform: translate3d(-6px, 12px, 0) rotate(357deg);
    background: ${({ theme }) => theme.colors.error100};
    animation: ${bang} 700ms ease-out forwards;
    opacity: 0;
  }
  i:nth-of-type(7) {
    transform: translate3d(59px, 55px, 0) rotate(180deg);
    background: ${({ theme }) => theme.colors.secondary100};
    animation: ${bang} 700ms ease-out forwards;
    opacity: 0;
  }
  i:nth-of-type(8) {
    transform: translate3d(-76px, -42px, 0) rotate(272deg);
    background: ${({ theme }) => theme.colors.secondary100};
    animation: ${bang} 700ms ease-out forwards;
    opacity: 0;
  }
  i:nth-of-type(9) {
    transform: translate3d(48px, -11px, 0) rotate(272deg);
    background: ${({ theme }) => theme.colors.primary100};
    animation: ${bang} 700ms ease-out forwards;
    opacity: 0;
  }
  i:nth-of-type(10) {
    transform: translate3d(-53px, 7px, 0) rotate(103deg);
    background: ${({ theme }) => theme.colors.white100};
    animation: ${bang} 700ms ease-out forwards;
    opacity: 0;
  }
  i:nth-of-type(11) {
    transform: translate3d(27px, -17px, 0) rotate(148deg);
    background: ${({ theme }) => theme.colors.error100};
    animation: ${bang} 700ms ease-out forwards;
    opacity: 0;
  }
  i:nth-of-type(12) {
    transform: translate3d(34px, -34px, 0) rotate(247deg);
    background: ${({ theme }) => theme.colors.warning100};
    animation: ${bang} 700ms ease-out forwards;
    opacity: 0;
  }
  i:nth-of-type(13) {
    transform: translate3d(-71px, -26px, 0) rotate(308deg);
    background: ${({ theme }) => theme.colors.primary100};
    animation: ${bang} 700ms ease-out forwards;
    opacity: 0;
  }
  i:nth-of-type(14) {
    transform: translate3d(-65px, 39px, 0) rotate(85deg);
    background: ${({ theme }) => theme.colors.primary100};
    animation: ${bang} 700ms ease-out forwards;
    opacity: 0;
  }
  i:nth-of-type(15) {
    transform: translate3d(-77px, -36px, 0) rotate(153deg);
    background: ${({ theme }) => theme.colors.secondary100};
    animation: ${bang} 700ms ease-out forwards;
    opacity: 0;
  }
  i:nth-of-type(16) {
    transform: translate3d(-18px, 12px, 0) rotate(256deg);
    background: ${({ theme }) => theme.colors.warning100};
    animation: ${bang} 700ms ease-out forwards;
    opacity: 0;
  }
  i:nth-of-type(17) {
    transform: translate3d(-82px, -8px, 0) rotate(353deg);
    background: ${({ theme }) => theme.colors.error100};
    animation: ${bang} 700ms ease-out forwards;
    opacity: 0;
  }
  i:nth-of-type(18) {
    transform: translate3d(-34px, -40px, 0) rotate(181deg);
    background: ${({ theme }) => theme.colors.error100};
    animation: ${bang} 700ms ease-out forwards;
    opacity: 0;
  }
  i:nth-of-type(19) {
    transform: translate3d(32px, -48px, 0) rotate(77deg);
    background: ${({ theme }) => theme.colors.error100};
    animation: ${bang} 700ms ease-out forwards;
    opacity: 0;
  }
  i:nth-of-type(20) {
    transform: translate3d(85px, -42px, 0) rotate(344deg);
    background: ${({ theme }) => theme.colors.error100};
    animation: ${bang} 700ms ease-out forwards;
    opacity: 0;
  }
`;
