import Task from '../../../models/task';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { TASK_API } from '../../../constants/api';

const server = setupServer(
  rest.get(TASK_API.getById('a'), (req, res, context) => {
    return res(
      context.delay(100),
      context.json({
        id: 'a',
        name: 'b',
        description: 'c',
      }),
    );
  }),
  rest.get(TASK_API.getById('b'), (req, res, context) => {
    return res(
      context.delay(100),
      context.json({
        id: 'd',
        name: 'e',
        description: 'f',
      }),
    );
  }),
  rest.get(TASK_API.getById('failed'), (req, res, context) => {
    return res(
      context.delay(100),
      context.status(403),
      context.json({
        id: 'failed',
        name: 'g',
        description: 'h',
      }),
    );
  }),
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('task model', () => {
  it('should be able to construct', function () {
    const t1 = new Task('a', 'b', 'c');
    const t2 = new Task('d', 'e', 'f', [t1.id]);
    expect(t1.children).toStrictEqual([]);
    expect(t2.children).toStrictEqual([t1.id]);
  });
});
