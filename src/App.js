import { useState } from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { ListItem, ListItemAvatar, ListItemText,List } from "@mui/material";
function App() {
  const dummyData=[
    {id:1, title:"Todo 1", todoCategory:"House",    completed:false,isEditable:false},
    {id:2, title:"Todo 2" ,todoCategory:"Work" , completed:true ,isEditable:false},
    {id:3, title:"Todo 3",todoCategory:"House", completed:false ,isEditable:false},
  ]
  return (
    <div className="page">
      <h1 className="page-title">Todo List App </h1>
      <sub className="page-subtitle">Add your todos here</sub>
     <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" ,  p: 2, }}> 
     <TextField
        className="input-field"
        label="Todo"
        variant="outlined"
      />
   
     
     </Box>
     <Button variant="contained" className="add-button" >Add Todo</Button>
    {
      dummyData.map((todo)=>{
        return  <List sx={{ width: '100%', maxWidth: 360, }}>
        <ListItem>
        <ListItemAvatar>
      
        </ListItemAvatar>
        <ListItemText primary={todo.title} secondary={todo.todoCategory} />
      </ListItem>
      </List>
      })
    }
    </div>
  );
}

export default App;
