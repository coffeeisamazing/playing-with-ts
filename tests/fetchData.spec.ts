import axios, { AxiosResponse } from 'axios';
import { fetchTodoData, Todo } from '../src/fetchData';

jest.mock('axios');

describe('fetchTodoData', () => {
	it('fetches todo data successfully from the API', async () => {
		const todoData: Todo[] = [
			{
				userId: 1,
				id: 1,
				title: 'Buy groceries',
				completed: false,
			},
			{
				userId: 1,
				id: 2,
				title: 'Finish homework',
				completed: true,
			},
		];

		(axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({
			data: todoData,
			status: 200,
			statusText: 'OK',
			headers: {},
			config: {},
		} as AxiosResponse<Todo[]>);

		const result = await fetchTodoData();

		expect(result).toEqual(todoData);
	});

	it('handles errors when fetching todo data', async () => {
		const error = new Error('An error occurred while fetching data');

		(axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(error);

		const result = await fetchTodoData();

		expect(result).toBeNull();
	});
});
