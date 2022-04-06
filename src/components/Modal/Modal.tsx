import React, { ReactNode } from "react"
import Paper from "../Paper"
import { makeStyles, Modal as MUIModal, ModalProps as MUIModalProps } from "@material-ui/core"
import { PropsWithChildren } from "react"
import classnames from "classnames"

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "rgba(78, 72, 87, 0.8)",
    left: "50%",
    maxWidth: 500,
    padding: theme.spacing(3),
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
  },
}))

export interface ModalProps extends MUIModalProps {
  isOpen: boolean
  onClose: () => void
}

const Modal = ({ children, isOpen, onClose, ...props }: ModalProps) => {
  const classes = useStyles()

  return (
    <MUIModal open={isOpen} onClose={onClose} BackdropProps={{ style: { backdropFilter: "blur(4px)" } }}>
      <Paper
        elevation={3}
        {...props}
        className={classnames(classes.paper, props.className,)}
      >
        {children}
      </Paper>
    </MUIModal>
  )
}

export default Modal
