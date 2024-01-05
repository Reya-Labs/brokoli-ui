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
}) => {
  const [hiddenTabContent, setHiddenTabContent] = useState(false);
  const activeTab = tabs.find((tab) => tab.id === activeTabId);
  const handleHideTabContent = useCallback(() => {
    if (!allowContentHiding) {
      return;
    }
    setHiddenTabContent(!hiddenTabContent);
  }, [hiddenTabContent, allowContentHiding]);

  return (
    <TabsAndComponentBox>
      <TabsBox>
        <BorderLine borderColorToken={borderColorToken} />
        <TabPillsBox>
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
        </TabPillsBox>
        {allowContentHiding ? (
          <TabStyled
            activeTabColorToken={colorToken}
            backgroundColorToken={backgroundColorToken}
            borderColorToken={borderColorToken}
            colorToken={colorToken}
            isActive={true}
            typographyToken={typographyToken}
            onClick={handleHideTabContent}
          >
            <ToggleCaret isOpen={hiddenTabContent} />
          </TabStyled>
        ) : null}
      </TabsBox>
      {activeTab && activeTab.Component ? (
        <ComponentBox hidden={hiddenTabContent}>
          <activeTab.Component />
        </ComponentBox>
      ) : null}
    </TabsAndComponentBox>
  );
};
