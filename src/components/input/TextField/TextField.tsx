import React from "react"
import {
  Grid,
  GridProps,
  makeStyles,
  StandardTextFieldProps,
  TextField as MUITextField,
  Tooltip,
  Typography,
} from "@material-ui/core"
import HelpOutline from "@material-ui/icons/HelpOutline"

export interface TextFieldProps extends Omit<StandardTextFieldProps, "variant" | "label"> {
  label?: string
  borderStyle?: "double" | "single"
  prefix?: string
  borderColor?: string
  append?: React.ReactElement | string
  AppendProps?: GridProps
  tooltipMsg?: string
}

type TextFieldStyleProps = {
  borderColor: string
}

const useStyles = makeStyles({
  singleBorder: {
    "& .MuiInputBase-root": {
      borderColor: (props: TextFieldStyleProps) => props.borderColor,
    },
  },
  doubleBorder: {
    "& .MuiInputBase-root": {
      paddingLeft: 8,
      borderColor: (props: TextFieldStyleProps) => props.borderColor,
      "&::before": {
        content: '""',
        position: "absolute",
        zIndex: 1,
        inset: 2,
        border: (props: TextFieldStyleProps) => `1px solid ${props.borderColor}`,
        pointerEvents: "none",
      },
    },
  },
  prefixStyles: {
    color: "rgba(255,255,255,0.5)",
    fontFamily: "Roboto Mono",
    margin: "0px 4px",
  },
  icon: {
    fontSize: "1rem",
  },
})

const TextField = ({
  borderStyle = "single",
  InputProps,
  InputLabelProps,
  label,
  append,
  AppendProps,
  borderColor = "#fff",
  tooltipMsg,
  prefix,
  ...props
}: TextFieldProps) => {
  const { singleBorder, doubleBorder, prefixStyles, icon } = useStyles({ borderColor })
  return (
    <>
      {tooltipMsg && (
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography>{label}</Typography>
          </Grid>
          <Grid item>
            <Tooltip title={tooltipMsg}>
              <HelpOutline className={icon} />
            </Tooltip>
          </Grid>
        </Grid>
      )}
      <MUITextField
        focused={!props.disabled}
        label={!tooltipMsg ? label : null}
        placeholder={label}
        InputProps={{
          disableUnderline: true,
          endAdornment: <>{prefix ? <Typography className={prefixStyles}>{prefix}</Typography> : ""}</>,
          ...InputProps,
        }}
        InputLabelProps={{
          shrink: true,
          ...InputLabelProps,
        }}
        {...props}
        className={`${borderStyle === "double" ? doubleBorder : singleBorder} ${props.className}`}
      />
    </>
  )
}

export default TextField
