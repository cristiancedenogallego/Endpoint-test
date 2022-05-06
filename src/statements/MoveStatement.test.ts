import MoveStatement from "./MoveStatement";

describe('MoveStatement', () => {
  beforeAll(() => {
    jest.spyOn(global.console, 'log');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should move folder', () => {
    const root = {
      name: '',
      children: [
        {
          name: 'a',
          children: [
            {name: 'b', children: [{name: 'c', children: []}]},
            {name: 'd', children: [{name: 'e', children: []}]}
          ],
        }
      ],
      
    };
    const params = ['a/d/e', 'a'];
    const statement = new MoveStatement(root, params);
    expect(statement.run()).toEqual({
      name: '',
      children: [
        {
          name: 'a',
          children: [
            {name: 'b', children: [{name: 'c', children: []}]},
            {name: 'd', children: []},
            {name: 'e', children: []}
          ]
        },
         
      ]
      
    });
  });


  test('Should show a message if the path does not exist', () => {
    const root = {
      name: '',
      children: [
        {
          name: 'a',
          children: [
            {name: 'b', children: [{name: 'c', children: []}]},
            {name: 'd', children: [{name: 'e', children: []}]}
          ],
        }
      ],
      
    };
    const params = ['a/d/f', 'r'];
    const statement = new MoveStatement(root, params);
    statement.run();
    expect(console.log).toHaveBeenCalledWith('The folder a/d/f does not exist')
  });
});

