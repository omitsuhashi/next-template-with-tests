import Task from '../../../models/task';

describe('task model', () => {
  it('should be able to construct', function () {
    const t1 = new Task('a', 'b', 'c');
    const t2 = new Task('d', 'e', 'f', [t1.id]);
    expect(t1.children).toStrictEqual([]);
    expect(t2.children).toStrictEqual([t1.id]);
  });
});
