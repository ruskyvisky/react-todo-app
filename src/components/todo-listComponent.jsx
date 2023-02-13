import React from 'react'
import { List, ListItem, ListItemText, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import Edit from '@mui/icons-material/Edit'
import Save from '@mui/icons-material/Save'
export default function listComponent(todo) {
  return (
    <List sx={{ width: "100%", maxWidth: 360 }}>
            <ListItem
              key={todo.id}
              secondaryAction={
                <div>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon color="error" />
                  </IconButton>
                  <IconButton edge="end">
                    {todo.isEditable ? (
                      <Edit color="primary" />
                    ) : (
                      <Save color="success" />
                    )}
                  </IconButton>
                </div>
              }
            >
              <ListItemText
                primary={todo.title}
                secondary={todo.todoCategory}
              />
            </ListItem>
          </List>
  )
}
