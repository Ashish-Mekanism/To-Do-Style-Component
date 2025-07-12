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

const Todos = () => {
  const categories = ["Favorites", "Grocery", "Work", "Study", "Sports"];

  const [tasks, setTasks] = useState([
    { text: "Task 1", done: false },
    { text: "Task 2", done: false },
    { text: "Task 3", done: false }
  ]);

  const toggleTaskDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  return (
    <MainContainer>
      <Sidebar>
        <CategoryWrapper>
          <CategoryTitle>All Tasks</CategoryTitle>
          <CategoryList>
            {categories.map((category, index) => (
              <CategoryItem key={index}>{category}</CategoryItem>
            ))}
            <CategoryItem color="gray">+ New Category</CategoryItem>
          </CategoryList>
        </CategoryWrapper>
      </Sidebar>

      <TodoList>
        <TodoListContainer>
          <CategoryTitle fontSize="large">All Tasks</CategoryTitle>
          <InputBox placeholder="Add a new task..." />

          {tasks.map((task, index) => (
            <TodolistItem key={index}>
              <Checkbox onClick={() => toggleTaskDone(index)}>
                {task.done ? "✅" : ""}
              </Checkbox>
              <TodoName done={task.done}>{task.text}</TodoName>
              {/* {categories.map((cat) => (
                <TodoCategoryTitle> {cat}</TodoCategoryTitle>
              ))} */}
              <TodoCategoryTitle> Work</TodoCategoryTitle>
            </TodolistItem>
          ))}
        </TodoListContainer>
      </TodoList>
    </MainContainer>
  );
};

export default Todos;
