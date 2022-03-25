import React from "react"

import { addDecorator } from "@storybook/react"
import { Theme } from "../src/index"

addDecorator((story) => <Theme>{story()}</Theme>)

export const parameters = {
  layout: "centered",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
