import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { Story } from "@storybook/react"
import Modal, { ModalProps } from "./Modal"

export default {
  title: "Components/Modal",
  component: Modal,
  args: {
    // Default arguments
    isOpen: true,
  },
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<ModalProps> = (args) => <Modal {...args} />

export const Open = Template.bind({})
Open.args = {
  children: <p>Here the content goes.</p>,
}
