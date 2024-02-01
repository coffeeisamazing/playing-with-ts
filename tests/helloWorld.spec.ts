import { sayHello } from '../src/helloWorld';

describe('sayHello', () => {
	it('returns Hello World', () => {
		expect(sayHello()).toBe('Hello World');
	});
});
