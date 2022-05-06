import DeleteStatement from "./DeleteStatement";

describe('DeleteStatement', () => {
  beforeAll(() => {
    jest.spyOn(global.console, 'log');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should delete folder', () => {
    const root = {
      name: '',
      children: [
        { name: 'b', children: [] }
      ],
    };
    const params = ['b'];
    const statement = new DeleteStatement(root, params)
    expect(statement.run()).toEqual({
      name: '',
      children: []
    })
  });

  test('Should show message if the folder don\'t exist', () => {
    const root = {
      name: '',
      children: [
        { name: 'b', children: [] }
      ],
    };
    const params = ['c'];
    const statement = new DeleteStatement(root, params);
    statement.run();
    expect(console.log).toHaveBeenCalledWith('Cannot delete c - c does not exist') 
  });
});

