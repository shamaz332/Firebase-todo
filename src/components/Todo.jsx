import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import database from "../firebase";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
export const Todo = (props) => {
  const classes = useStyles();
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
