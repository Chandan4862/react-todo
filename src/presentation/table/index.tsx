import React, { useMemo } from "react";
import { TableProps } from "./types";
import Paginator from "../paginator";

const Table: React.FC<TableProps> = ({
  list,
  totalCount,
  pageDetails,
  setPageDetails,
}) => {
  const totalPages = useMemo(
    () => Math.ceil(totalCount / pageDetails.limit),
    [pageDetails.limit, totalCount]
  );
  const showPaginationControl = totalPages > 1 ? true : false;

  const handelPageChange = (page: number) => {
    setPageDetails({ ...pageDetails, page });
  };
  return (
    <div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Task ID</th>
              <th>Todo</th>
              <th>Completed</th>
              <th>User ID</th>
            </tr>
          </thead>
          <tbody>
            {list.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.todo}</td>
                <td>{todo.completed ? "Yes" : "No"}</td>
                <td>{todo.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showPaginationControl && (
        <Paginator
          currentPage={pageDetails.page}
          totalPages={totalPages}
          onChange={handelPageChange}
        />
      )}
    </div>
  );
};

export default Table;
