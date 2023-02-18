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
import { v4 as uuidv4 } from "uuid";
function App() {
  const [todo, setTodo] = useState("");
  const [todoCategory, setTodoCategory] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleCategoryChange = (event) => {
    setTodoCategory(event.target.value);
  };
  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const addTodoItem = () => {
    const newTodo = {
      id: uuidv4(),
      title: todo,
      todoCategory: todoCategory,
      completed: false,
      isEditable: true,
    };
    setTodoList([...todoList, newTodo]);
    setTodo("");
    setTodoCategory("");
  };

  const deleteTodoItem = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const completeTodoItem = (id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodoList(newTodoList);
  };
  const editTodoItem = (id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.isEditable = !todo.isEditable;
      }
      return todo;
    });
    setTodoList(newTodoList);
  };
  const saveTodoItem = (id, newTitle) => {
    const updatedTodos = todoList.map((t) => {
      if (t.id === id) {
        return { ...t, title: newTitle, isEditable: !t.isEditable };
      } else {
        return t;
      }
    });
    setTodoList(updatedTodos);
  };

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
          value={todo}
          variant="outlined"
          onChange={handleChange}
        />
      </Box>
      <div>
        <Button
          variant="contained"
          className="add-button"
          onClick={addTodoItem}
        >
          Add Todo
        </Button>
      </div>

      <Box sx={{ minWidth: 120, m: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={todoCategory}
            label="Category"
            onChange={(e) => {
              handleCategoryChange(e);
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
            delTodo={deleteTodoItem}
            completeTodo={completeTodoItem}
            editTodo={editTodoItem}
            saveTodo={saveTodoItem}
          />
        );
      })}
    </div>
  );
}

export default App;
