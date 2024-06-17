import React, { useCallback, useState } from 'react';
import { useResizeDetector } from 'react-resize-detector';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { ToggleCaret } from '../ToggleCaret';
import {
  BorderLine,
  ComponentBox,
  TabPillsBox,
  TabsAndComponentBox,
  TabsBox,
  TabStyled,
} from './Tabs.styled';

type TabProps = {
  Component?: React.FunctionComponent | null;
  disabled?: boolean;
  id: string;
  label: string;
};

type ContentHidingConfig = {
  isHiddenInitially: boolean;
};

export type TabsProps = {
  activeTabColorToken: ColorTokens;
  activeTabId?: TabProps['id'] | null;
  backgroundColorToken: ColorTokens;
  borderColorToken: ColorTokens;
  colorToken: ColorTokens;
  contentHiding?: ContentHidingConfig;
  hoverTabColorToken?: ColorTokens;
  onTabChange?: (id: TabProps['id']) => void;
  onTabContentHide?: (hiddenTabContent: boolean) => void;
  tabs: TabProps[];
  typographyToken: TypographyTokens;
};

export const Tabs: React.FunctionComponent<TabsProps> = ({
  backgroundColorToken,
  activeTabColorToken,
  borderColorToken,
  typographyToken,
  colorToken,
  tabs,
  activeTabId,
  onTabChange,
  contentHiding,
  onTabContentHide,
  hoverTabColorToken,
}) => {
  const { height: tabBoxHeight = 0, ref } = useResizeDetector({
    handleHeight: true,
  });
  const allowContentHiding = Boolean(contentHiding);
  const { isHiddenInitially = true } = contentHiding || {};
  const [hiddenTabContent, setHiddenTabContent] = useState<boolean>(isHiddenInitially);
  const activeTab = tabs.find((tab) => tab.id === activeTabId);
  const handleHideTabContent = useCallback(() => {
    if (!allowContentHiding || !activeTab?.id) {
      return;
    }
    setHiddenTabContent(!hiddenTabContent);
    onTabContentHide && onTabContentHide(!hiddenTabContent);
  }, [onTabContentHide, activeTab?.id, hiddenTabContent, allowContentHiding]);

  return (
    <TabsAndComponentBox data-testid="Tabs-TabsAndComponentBox">
      <TabsBox ref={ref} data-testid="Tabs-TabsBox">
        <BorderLine borderColorToken={borderColorToken} data-testid="Tabs-BorderLine" />
        <TabPillsBox data-testid="Tabs-TabPillsBox">
          {tabs.map(({ id, label, disabled }) => (
            <TabStyled
              key={id}
              activeTabColorToken={activeTabColorToken}
              backgroundColorToken={backgroundColorToken}
              borderColorToken={borderColorToken}
              colorToken={colorToken}
              data-testid={`Tabs-TabStyled-${id}`}
              disabled={Boolean(disabled)}
              hoverTabColorToken={hoverTabColorToken || activeTabColorToken}
              isActive={activeTabId === id}
              typographyToken={typographyToken}
              onClick={disabled ? undefined : () => onTabChange && onTabChange(id)}
            >
              {label}
            </TabStyled>
          ))}
        </TabPillsBox>
        {allowContentHiding ? (
          <TabStyled
            activeTabColorToken={colorToken}
            backgroundColorToken={backgroundColorToken}
            borderColorToken={borderColorToken}
            colorToken={colorToken}
            data-testid={`Tabs-TabStyled-ToggleCaret`}
            disabled={!allowContentHiding}
            hoverTabColorToken={hoverTabColorToken || activeTabColorToken}
            isActive={true}
            typographyToken={typographyToken}
            onClick={handleHideTabContent}
          >
            <ToggleCaret isOpen={hiddenTabContent} />
          </TabStyled>
        ) : null}
      </TabsBox>
      {activeTab && activeTab.Component ? (
        <ComponentBox
          data-testid="Tabs-ComponentBox"
          hidden={allowContentHiding ? hiddenTabContent : false}
          tabBoxHeight={tabBoxHeight}
        >
          <activeTab.Component />
        </ComponentBox>
      ) : null}
    </TabsAndComponentBox>
  );
};
