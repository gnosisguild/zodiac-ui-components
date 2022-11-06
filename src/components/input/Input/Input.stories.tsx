import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import Input from "./Input"

export default {
  title: "Components/Input/Input",
  component: Input,
} as Meta

export const SimpleInput = (): React.ReactElement => <Input value="This is an input." />
