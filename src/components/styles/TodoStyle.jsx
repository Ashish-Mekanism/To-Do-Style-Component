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
  padding: 12px 16px;
  /* border-bottom: 1px solid #eee; */
  cursor: pointer;
  font-family: "SF Pro";
  font-weight: 400;
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
  width: 25px;
  height: 25px;
  margin-right: 12px;
  border-radius: 10px;
  border: 2px solid #f87171;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  cursor: pointer;
  background-color: white;
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
  background-color: #27ae60;
  border-radius: 10px;
  padding-left: 16px;
  width: 68px;
`;
