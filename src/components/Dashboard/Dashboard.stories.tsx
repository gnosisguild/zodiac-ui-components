import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import Dashboard from "./Dashboard"
import { Box } from "@material-ui/core"

export default {
  title: "Components/Dashboard",
  component: Dashboard,
} as Meta


export const DefaultDashboard = (): React.ReactElement => {
  return (
    <Box width="calc(100vw - 2rem)" height="calc(100vh - 2rem)">
      <Dashboard  left={<Box>This is the left side.</Box>}>
        <Box>
          This is the right side
        </Box>
      </Dashboard>
    </Box>
  );
};