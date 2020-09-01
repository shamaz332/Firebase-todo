import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Input, InputLabel, FormControl, TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import database from "../firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
export const Todo = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // update code

  const updateTask = () => {
    database.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <CheckBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Task ... 🍒" secondary={props.todo.todos} />
        </ListItem>
      </List>
      {/* //edit model */}

      <Button
        size="small"
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleOpen}
        endIcon={<EditIcon />}
      >
        Edit Task
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <FormControl>
              {/* <InputLabel>✏️ Edit Task</InputLabel>
              <Input
      
              /> */}

              <TextField
                label="Edit Task"
                defaultValue="Hello World"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                defaultValue={props.todo.todos}
              />
            </FormControl>
            <br />
            <br />

            <Button onClick={updateTask} variant="contained" color="primary">
              Save Task
            </Button>
          </div>
        </Fade>
      </Modal>

      {/* //delete button */}
      <Button
        size="small"
        className={classes.button}
        variant="contained"
        color="secondary"
        onClick={(e) => {
          database.collection("todos").doc(props.todo.id).delete();
        }}
        endIcon={<DeleteIcon />}
      >
        Delete Task
      </Button>
    </div>
  );
};
