import * as React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";
import styled from 'styled-components';

import tabs from './tabs';

const StyledTabs = styled(Tabs)`
  width: 100%;
  border-bottom-color: transparent;
`;

const StyledTab = styled(Tab)`
  background-color: #fafafa;
  border-top-color: #6928852b;
  border-right-color: #6928852b;
  border-left-color: #6928852b;
`;

const StyledTabPanels = styled(TabPanels)`
  border-top: 1px solid #6928852b ;
  border-radius: 0 0 5px 5px;
`;

const Loading = () => <div> Loading... </div>

const TabContent = () => {
  return (
    <StyledTabs variant="enclosed" w="100%">
      <TabList>
        {tabs.map(tab => (
        <StyledTab key={tab.label}>
          {tab.label}
        </StyledTab>
      ))}
      </TabList>
      <StyledTabPanels>
        {tabs.map(({ label, component: Component }) => (
          <TabPanel key={label}>
            {console.log(Component)}
            <React.Suspense fallback={<Loading />}>
              <Component />
            </React.Suspense>
          </TabPanel>
        ))}
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </StyledTabPanels>
    </StyledTabs>
  )
}

export default TabContent;
