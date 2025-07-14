import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

export const Sidebar = styled.div`
  width: 15%;
  color: black;

  border-right: 1px solid #d1d5db;
  padding-top: 62px;
  background-color: white;
`;

export const CategoryWrapper = styled.div`
  padding-top: 70px;
  padding-left: 62px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const TodoList = styled.div`
  width: 85%;
  padding: 20px;
  color: black;
  background-color: white;
  display: flex;
  padding-top: 80px;
  padding-left: 70px;
`;

export const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const CategoryItem = styled.li`
  font-size: ${(props) => (props.category === "All Tasks" ? "30px" : "")};

  font-weight: ${(props) => (props.category === "All Tasks" ? "700" : "400")};

  padding: 12px 16px;
  cursor: pointer;
  font-family: "SF Pro";
  color: ${(props) => (props.color === "gray" ? "#ABABAB" : "black")};

  &:hover {
    color: red;
  }
`;

export const CategoryTitle = styled.h1`
  font-size: ${(props) => (props.fontSize === "large" ? "50px" : "30px")};
  font-family: "SF Pro";

  font-weight: 700;
  color: black;
`;

export const InputBox = styled.input`
  width: 35%;
  padding: 10px;
  background-color: #e1dede;
  font-family: "SF Pro";
  font-weight: 400;
  color: black;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  margin-top: 28px;
`;

export const TodoListContainer = styled.div`
  width: 100%;
`;

export const TodolistItem = styled.ul`
  padding: 10px;
  /* border-bottom: 1px solid #d1d5db; */
  font-family: "SF Pro";
  font-weight: 400;
  color: black;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  list-style: none;
  gap: 10px;
`;

export const Checkbox = styled.button`
  width: 40px;
  height: 40px;
  margin-right: 12px;
  border-radius: 15px;
  border: 3px solid #f87171;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  cursor: pointer;
  background-color: white;
  overflow: visible;
`;

export const TodoName = styled.li`
  font-family: "SF Pro";
  font-weight: 400;
  font-size: 30px;
  color: ${(props) => (props.done ? "#f87171" : "black")};
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
  transition: all 0.3s ease;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const TodoCategoryTitle = styled.div`
  font-size: ${(props) => (props.fontSize === "large" ? "50px" : "14px")};
  font-family: "SF Pro";
  font-weight: 300;
  color: white;
  /* margin-bottom: 20px; */
  background-color: ${(props) =>
    props.category === "Work"
      ? "#2F80ED"
      : props.category === "Favorites"
      ? "#cbde7f"
      : props.category === "Grocery"
      ? "#93ae27"
      : props.category === "Study"
      ? "#F2994A"
      : props.category === "Sports"
      ? "#9B51E0"
      : "Black"};
  border-radius: 40px;
  padding-top: 6px;
  /* padding-left: 34px; */
  text-align: center;
  width: 101px;
  height: 33px;
`;

export const TodoCategorydiv = styled.div`
  display: flex;
`;
