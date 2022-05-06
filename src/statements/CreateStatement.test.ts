import CreateStatement from './CreateStatement';

describe('CreateStatement', () => {
  test('Should create folder', () => {
    const root = {
      name: '',
      children: [],
    };

    const params = ['a'];
    const createStatement = new CreateStatement(root, params);
    expect(createStatement.run()).toEqual({
      name: '',
      children: [
        {
          name: 'a',
          children: [],
        }
      ],
    });
  });

  test('Should create nested folders', () => {
    const root = {
      name: '',
      children: [],
    };

    const params = ['a/b'];
    const createStatement = new CreateStatement(root, params);
    expect(createStatement.run()).toEqual({
      name: '',
      children: [
        {
          name: 'a',
          children: [{
            name: 'b',
            children: []
          }],
        }
      ],
    });
  });

  test('Should add childrens to existing nodes', () => {
    const root = {
      name: '',
      children: [{
        name: 'a',
        children: [
          {name: 'c', children: []}
        ]
      }],
    };

    const params = ['a/b'];
    const createStatement = new CreateStatement(root, params);
    expect(createStatement.run()).toEqual({
      name: '',
      children: [
        {
          name: 'a',
          children: [{
            name: 'c',
            children: [],
          }, {
            name: 'b',
            children: []
          }],
        }
      ],
    });
  });
});

