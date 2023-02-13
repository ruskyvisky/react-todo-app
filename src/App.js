import { useState } from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import ListComponent from "./components/todo-listComponent";
function App() {
  const [todo, setTodo] = useState("");
  const [todoCategory, setTodoCategory] = useState("");
 
  const handleCategoryChange = (event) => {
    setTodoCategory(event.target.value);
    console.log(todoCategory)
  }
  const handleChange = (event) => {
   
    console.log(todo)
  };
  const dummyData = [
    {
      id: 1,
      title: "Todo 1",
      todoCategory: "House",
      completed: false,
      isEditable: true,
    },
    {
      id: 2,
      title: "write a code",
      todoCategory: "Work",
      completed: true,
      isEditable: true,
    },
    {
      id: 3,
      title: "Todo 3",
      todoCategory: "House",
      completed: false,
      isEditable: true,
    },
  ];
  return (
    <div className="page">
      <h1 className="page-title">Todo List App </h1>
      <sub className="page-subtitle">Add your todos here</sub>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          p: 2,
        }}
      >
        <TextField
          className="input-field"
          label="Todo"
          variant="outlined"
          onChange={(e) => {
            setTodo(e.target.value);
            
          }}
        />
      </Box>
      <div>
      <Button variant="contained" className="add-button" onClick={handleChange}>
        Add Todo
      </Button>
      </div>
     
      <Box sx={{ minWidth: 120, m: 3 }}>
        <FormControl fullWidth required>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={todoCategory}
            label="Category"
            onChange={(e) => {
              handleCategoryChange(e)
              setTodoCategory(e.target.value);
              console.log(todoCategory)
            }}
          >
            <MenuItem value={10}>House</MenuItem>
            <MenuItem value={20}>Work</MenuItem>
            <MenuItem value={30}>Other</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {dummyData.map((todo) => {
        return (
          <ListComponent
            key={todo.id}
            id={todo.id}
            title={todo.title}
            todoCategory={todo.todoCategory}
            completed={todo.completed}
            isEditable={todo.isEditable}
          />
        );
      })}
    </div>
  );
}

export default App;
