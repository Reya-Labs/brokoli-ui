import React, { useCallback, useState } from 'react';

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
  id: string;
  label: string;
  Component?: React.FunctionComponent | null;
};

export type TabsProps = {
  tabs: TabProps[];
  activeTabId?: TabProps['id'] | null;
  typographyToken: TypographyTokens;
  colorToken: ColorTokens;
  backgroundColorToken: ColorTokens;
  borderColorToken: ColorTokens;
  activeTabColorToken: ColorTokens;
  onTabChange?: (id: TabProps['id']) => void;
  allowContentHiding?: boolean;
  onTabContentHide?: (hiddenTabContent: boolean) => boolean;
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
  allowContentHiding,
  onTabContentHide,
}) => {
  const [hiddenTabContent, setHiddenTabContent] = useState(false);
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
      <TabsBox data-testid="Tabs-TabsBox">
        <BorderLine borderColorToken={borderColorToken} data-testid="Tabs-BorderLine" />
        <TabPillsBox data-testid="Tabs-TabPillsBox">
          {tabs.map((tab) => (
            <TabStyled
              key={tab.id}
              activeTabColorToken={activeTabColorToken}
              backgroundColorToken={backgroundColorToken}
              borderColorToken={borderColorToken}
              colorToken={colorToken}
              data-testid={`Tabs-TabStyled-${tab.id}`}
              isActive={activeTabId === tab.id}
              typographyToken={typographyToken}
              onClick={() => onTabChange && onTabChange(tab.id)}
            >
              {tab.label}
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
            isActive={true}
            typographyToken={typographyToken}
            onClick={handleHideTabContent}
          >
            <ToggleCaret isOpen={hiddenTabContent} />
          </TabStyled>
        ) : null}
      </TabsBox>
      {activeTab && activeTab.Component ? (
        <ComponentBox data-testid="Tabs-ComponentBox" hidden={hiddenTabContent}>
          <activeTab.Component />
        </ComponentBox>
      ) : null}
    </TabsAndComponentBox>
  );
};
