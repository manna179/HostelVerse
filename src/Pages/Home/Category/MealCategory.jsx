import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const MealCategory = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Breakfast</Tab>
        <Tab>Lunch</Tab>
        <Tab>Dinner</Tab>
        <Tab>All Meal</Tab>
      </TabList>

      <TabPanel>
        <h2>breakfast</h2>
      </TabPanel>
      <TabPanel>
        <h2>Lunch</h2>
      </TabPanel>
      <TabPanel>
        <h2>dinner</h2>
      </TabPanel>
      <TabPanel>
        <h2>All meal</h2>
      </TabPanel>
    </Tabs>
  );
};

export default MealCategory;
