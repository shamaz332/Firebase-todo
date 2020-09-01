import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

  
export const Todo = (props) => {

    return (
        <div>
              <List>
      <ListItem button>
        <ListItemIcon>
          <CheckBoxIcon />
        </ListItemIcon>
        <ListItemText primary="Task ... 🍒" secondary={props.todo} />
      </ListItem>
     
    </List>
        </div>
    )
}
