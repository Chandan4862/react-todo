import React, { useEffect } from "react";
import { Page, Todo } from "./types";
import Table from "../../presentation/table";

const TodoList: React.FC = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [totolCount, setTotalCount] = React.useState<number>(0);
  const [pageDetails, setPageDetails] = React.useState<Page>({
    page: 1,
    limit: 10,
  });

  useEffect(() => {
    console.log("fetching data");
    fetch(
      `https://dummyjson.com/todos?limit=${pageDetails.limit}&skip=${
        (pageDetails.page - 1) * pageDetails.limit
      }`
    )
      .then((response) => response.json())
      .then((json) => {
        setTodos(json.todos);
        setTotalCount(json.total);
      });
  }, [pageDetails.limit, pageDetails.page]);

  return (
    <div className="container">
      <h1>Todo List</h1>
      <Table
        list={todos}
        totalCount={totolCount}
        pageDetails={pageDetails}
        setPageDetails={setPageDetails}
      />
    </div>
  );
};

export default TodoList;
