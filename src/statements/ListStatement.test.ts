import { ListStatement } from "./ListStatement";

describe('ListStatement', () => {
  beforeAll(() => {
    jest.spyOn(global.console, 'log');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should print nodes', () => {
    const root = {
      name: '',
      children: [{name: 'a', children: []}],
    };
    const statement = new ListStatement(root);
    statement.run();
    expect(console.log).toHaveBeenCalledWith('a');
  });

  test('Should print nested nodes', () => {
    const root = {
      name: '',
      children: [
        {
          name: 'a',
          children: [
            {
              name: 'b',
              children: []
            }
          ]
        }],
    };
    const statement = new ListStatement(root);
    statement.run();
    // @ts-ignore
    expect(console.log.mock.calls).toEqual([['a'], [' b']]);
  });
});
