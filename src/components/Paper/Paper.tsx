import React from "react"
import classnames from "classnames"
import { Paper as MUIPaper, PaperProps as MuiPaperProps } from "@material-ui/core"

export interface PaperProps extends MuiPaperProps {
  borderStyle?: "double" | "single"
  rounded?: "left" | "top" | "right" | "bottom" | "full"
}

const Paper = React.forwardRef<any, PaperProps>(({ borderStyle = "single", rounded, children, ...props }, ref) => {
  return (
    <MUIPaper
      {...props}
      ref={ref}
      className={classnames(
        borderStyle === "double" ? "border--double" : undefined,
        rounded === "left" && "roundedLeft",
        rounded === "top" && "roundedTop",
        rounded === "right" && "roundedRight",
        rounded === "bottom" && "roundedBottom",
        rounded === "full" && "roundedFull",
        props.className,
      )}
    >
      {children}
    </MUIPaper>
  )
})

export default Paper
