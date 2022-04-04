import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { Story } from "@storybook/react"
import BadgeIcon, { BadgeIconProps } from "./BadgeIcon"

export default {
  title: "Components/Icons/BadgeIcon",
  component: BadgeIcon,
  args: {
    icon: "zodiac",
    size: 100,
  }
} as Meta

// Create a master template for mapping args to render the Badge Icon component
const Template: Story<BadgeIconProps> = (args) => <BadgeIcon {...args} />

export const Bridge = Template.bind({})
Bridge.args = {
  icon: "bridge",
}

export const Roles = Template.bind({})
Roles.args = {
  icon: "roles",
}

export const Delay = Template.bind({})
Delay.args = {
  icon: "delay",
}

export const Reality = Template.bind({})
Reality.args = {
  icon: "reality",
}

export const Exit = Template.bind({})
Exit.args = {
  icon: "exit",
}

export const Custom = Template.bind({})
Custom.args = {
  icon: "custom",
}

export const Zodiac = Template.bind({})
