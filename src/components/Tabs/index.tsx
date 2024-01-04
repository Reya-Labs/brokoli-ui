import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { TabsAndComponentBox, TabsBox, TabStyled } from './Tabs.styled';

type TabProps = {
  id: string;
  label: string;
  Component: React.FunctionComponent;
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
}) => {
  const activeTab = tabs.find((tab) => tab.id === activeTabId);
  return (
    <TabsAndComponentBox>
      <TabsBox>
        {tabs.map((tab) => (
          <TabStyled
            key={tab.id}
            activeTabColorToken={activeTabColorToken}
            backgroundColorToken={backgroundColorToken}
            borderColorToken={borderColorToken}
            colorToken={colorToken}
            isActive={activeTabId === tab.id}
            typographyToken={typographyToken}
            onClick={() => onTabChange && onTabChange(tab.id)}
          >
            {tab.label}
          </TabStyled>
        ))}
      </TabsBox>
      {!activeTab ? null : <activeTab.Component />}
    </TabsAndComponentBox>
  );
};
