import React, { ReactElement, useState } from "react";
import { Meta } from "@storybook/react/types-6-0"
import { Story } from "@storybook/react"
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { Box, Typography } from "@material-ui/core";

export default {
  title: 'Components/Tab',
  component: ToggleButton,
  parameters: {
    componentSubtitle: "Tab component used in Zodiac Apps",
  },
  args: { exclusive: true }
} as Meta

type Item = {
  id: string;
  label: string;
  customContent?: ReactElement;
  disabled?: boolean;
}

const items: Item[] = [
  { id: '1', label: 'Tab 1'},
  { id: '2', label: 'Tab 2'},
  { id: '5', label: 'Custom Tab', customContent: <div>Tab - Custom</div> },
];

type TabProps = {
  items: Array<Item>;
}

// Create a master template for mapping args to render the Paper component
const Template: Story<TabProps> = (args) => {
  const [selected, setSelected] = useState('read');

  return (
    <>
      <ToggleButtonGroup {...args}>
        {items.map((item) => (
          <ToggleButton
            disableRipple
            onClick={() => setSelected(item.id)}
            key={item.id}
            value={item.id}
            selected={item.id === selected}
          >
            {item.customContent ? item.customContent : item.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Box mt={4}>
        <Typography color="textPrimary">
          {`This is the ${(items.find(item => item.id === selected) || items[0]).label} content`}
        </Typography>
      </Box>
    </>
  );
};

export const SimpleTab = Template.bind({})