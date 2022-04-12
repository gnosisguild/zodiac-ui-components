import { Box, makeStyles } from "@material-ui/core"
import React, { PropsWithChildren } from "react"
import Paper from "../Paper"
import { colors, doubleBorder } from "../../theme/zodiacTheme"

const useStyles = makeStyles((theme) => ({
  container: {
    "&.MuiPaper-root": {
      display: "grid",
      gridTemplateColumns: "minmax(360px, 500px) 1fr",
      gridColumnGap: 4,
      height: "100%",
      flexGrow: 1,
      width: "100%",
      border: "none",
      "&::before": doubleBorder(-4, colors.tan[300])
    }
  },
  item: {
    border: `1px solid ${colors.tan[300]}`,
    height: "100%",
    padding: theme.spacing(2),
  },
}))

export type DashboardProps = PropsWithChildren<{ left: React.ReactElement }>

const Dashboard = ({ left, children }: DashboardProps) => {
  const classes = useStyles()

  return (
    <Paper borderStyle="double" variant="outlined" className={classes.container}>
      <Box className={classes.item}>{left}</Box>
      <Box className={classes.item}>{children}</Box>
    </Paper>
  )
}

export default Dashboard