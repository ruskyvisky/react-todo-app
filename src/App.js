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
  const [todoList, setTodoList] = useState([]);
  const handleCategoryChange = (event) => {
    setTodoCategory(event.target.value);
    console.log(todoCategory)
  }
  const handleChange = (event) => {
   
    console.log(todo)
  };

const addTodo = () => {
  const newTodo = {
    id: todoList.length + 1,
    title: todo,
    todoCategory: todoCategory,
    completed: false,
    isEditable: true,
  };
  setTodoList([...todoList, newTodo]);
  console.log(todoList)
}
  
 
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
      <Button variant="contained" className="add-button" onClick={addTodo}>
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
            <MenuItem value={"House"}>House</MenuItem>
            <MenuItem value={"Work"}>Work</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {todoList.map((todo) => {
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
