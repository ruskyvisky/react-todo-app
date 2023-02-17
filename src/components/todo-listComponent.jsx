import React from "react";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

import Save from "@mui/icons-material/Save";
export default function ListComponent(todo) {

const [edit,setEdit]=useState(todo.title)
  return (
    <List sx={{ width: "100%", maxWidth: 360 }}>
      <ListItem
        key={todo.id}
        secondaryAction={
          <div>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => {
                todo.delTodo(todo.id);
              }}
            >
              <DeleteIcon color="error" />
            </IconButton>
            <IconButton edge="end">
              {todo.isEditable ? (
                <Edit color="primary" onClick={(e)=>{
                  todo.editTodo(todo.id)
                  
                }}/>
              ) : (
                <Save color="success" onClick={()=>{
                  
                  todo.saveTodo(todo.id, edit);
                  
                }} />
              )}
            </IconButton>
          </div>
        }
      >
        <Checkbox
          onClick={() => {
            todo.completeTodo(todo.id);
          }}
          edge="start"
          value={todo.completed}
          tabIndex={-1}
          disableRipple
        />
        {todo.completed ? (
          <ListItemText
            primary={<del>{todo.title}</del>}
            secondary={todo.todoCategory}
          />
        ) : (
          todo.isEditable ? (<ListItemText primary={todo.title} secondary={todo.todoCategory} />):
          <input type="text" value={edit} onChange={(e)=>{
            setEdit(e.target.value)
            
          }}/>

          
        )}
      </ListItem>
    </List>
  );
}
