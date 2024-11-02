import { Page, Todo } from "../../components/todoList/types";

export type TableProps = {
  list: Todo[];
  totalCount: number;
  pageDetails: Page;
  setPageDetails: (pageDetails: Page) => void;
};
