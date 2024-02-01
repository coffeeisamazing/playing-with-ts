import axios, { AxiosResponse } from 'axios';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function fetchTodoData(): Promise<Todo[] | null> {
  try {
    const response: AxiosResponse<Todo[]> = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error fetching todo data:', error.message);
    }
    return null;
  }
}
