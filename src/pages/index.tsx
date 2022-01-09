import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import SeriesSettings from "../components/SeriesSettings";

const Index = () => (
  <Container height="100vh" maxW={900} m="auto">
    <Tabs variant="enclosed-colored" colorScheme="green">
      <TabList>
        <Tab>Welcome</Tab>
        <Tab>Series Settings</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Box textStyle="h2">On the Water RC</Box>
          <Box textStyle="h3">
            The sailboat racing companion for Sailwave desktop application
          </Box>
          <Text fontSize="md">
            Race Committee's have a lot to deal with on the boat and often it
            takes 2 or 3 people to record time on paper. As it is the year 2022
            I believe that it is time to end the old ways of dealing with
            scoring a race
          </Text>
        </TabPanel>
        <TabPanel>
          <SeriesSettings />
        </TabPanel>
      </TabPanels>
    </Tabs>
    <DarkModeSwitch />
  </Container>
);

export default Index;
