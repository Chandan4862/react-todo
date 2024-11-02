export type Todo = {
  id: string;
  completed: boolean;
  userId: string;
  todo: string;
};

export type Page = {
  page: number;
  limit: number;
};
