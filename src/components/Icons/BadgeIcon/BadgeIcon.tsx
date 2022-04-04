import React from "react"
import Paper from "../../Paper"
import bridge from "../../../assets/images/bridge-module-logo.png"
import custom from "../../../assets/images/custom-module-logo.png"
import delay from "../../../assets/images/delay-module-logo.png"
import exit from "../../../assets/images/exit-module-logo.png"
import reality from "../../../assets/images/reality-module-logo.png"
import roles from "../../../assets/images/roles-module-logo.png"
import zodiac from "../../../assets/images/zodiac-app-logo.png"
import { makeStyles } from "@material-ui/core"
import classnames from "classnames"

const icons = {
  bridge: {
    image: bridge,
    alt: "Bridge Module icon"
  },
  custom: {
    image: custom,
    alt: "Custom Module icon"
  },
  delay: {
    image: delay,
    alt: "Delay Module icon"
  },
  exit: {
    image: exit,
    alt: "Exit Module icon"
  },
  reality: {
    image: reality,
    alt: "Reality Module icon"
  },
  roles: {
    image: roles,
    alt: "Roles Module icon"
  },
  zodiac: {
    image: zodiac,
    alt: "Zodiac App icon"
  },
}

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  img: {
    display: "block",
  },
  title: {
    marginLeft: theme.spacing(1),
  },
  grow: {
    flexGrow: 1,
  },
}))

export type BadgeIconProps = {
  icon: "bridge" | "reality" | "delay" | "roles" | "exit" | "custom" | "zodiac"
  size?: number
  className?: string
}

const BadgeIcon = ({ icon, size = 46, className, ...props }: BadgeIconProps) => {
  const classes = useStyles();

  return (
    <Paper
      rounded="full"
      variant="outlined"
      className={classnames(classes.root, className)}
      style={{height: size, width: size}} 
      {...props}
    >
      <img src={icons[icon].image} alt={icons[icon].alt} className={classes.img} style={{height: size-10, width: size-10}}/>
    </Paper>
  )
}

export default BadgeIcon
