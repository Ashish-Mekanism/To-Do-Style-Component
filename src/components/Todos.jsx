import { useState } from "react";
import {
  CategoryItem,
  CategoryList,
  CategoryTitle,
  CategoryWrapper,
  Checkbox,
  InputBox,
  MainContainer,
  Sidebar,
  TodoCategoryTitle,
  TodoList,
  TodoListContainer,
  TodolistItem,
  TodoName
} from "./styles/TodoStyle";

const categories = [
  "All Tasks",
  "Favorites",
  "Grocery",
  "Work",
  "Study",
  "Sports"
];
const Todos = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Tasks");
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (!newTask.trim()) return;

    const task = {
      text: newTask.trim(),
      category: selectedCategory,
      done: false,
      id: new Date().getTime()
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleTaskDone = (taskId) => {
    const updated = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(updated);
  };

  let filteredTasks;
  if (selectedCategory === "All Tasks") {
    filteredTasks = tasks;
  } else {
    filteredTasks = tasks.filter((task) => task.category === selectedCategory);
  }

  return (
    <MainContainer>
      <Sidebar>
        <CategoryWrapper>
          <CategoryList>
            {categories.map((category, index) => (
              <CategoryItem
                category={category}
                key={index}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </CategoryItem>
            ))}
            <CategoryItem color="gray">+ New Category</CategoryItem>
          </CategoryList>
        </CategoryWrapper>
      </Sidebar>

      <TodoList>
        <TodoListContainer>
          <CategoryTitle fontSize="large">{selectedCategory}</CategoryTitle>
          <InputBox
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
            placeholder="Add a new task..."
            value={newTask}
          />

          {filteredTasks.map((task, id) => (
            <TodolistItem key={id}>
              <Checkbox onClick={() => toggleTaskDone(task.id)}>
                {task.done ? "✅" : ""}
              </Checkbox>
              <TodoName done={task.done}>{task.text}</TodoName>

              <TodoCategoryTitle category={task.category}>
                {" "}
                {task.category}
              </TodoCategoryTitle>
            </TodolistItem>
          ))}
        </TodoListContainer>
      </TodoList>
    </MainContainer>
  );
};

export default Todos;
