import {TextToCommandConverter} from './TextToCommandConverter';

describe('TextToCommandConverter', () => {
  test('Should convert text to commands', () => {
    const text = `
CREATE fruits
`;
    const converter = new TextToCommandConverter(text);
    expect(converter.parse()).toEqual([{
      statement: 'CREATE',
      params: ['fruits'],
      query: 'CREATE fruits',
    }]);
  });

  test('Should no convert empty lines', () => {
    const text = `

CREATE fruits

`;
    const converter = new TextToCommandConverter(text);
    expect(converter.parse()).toEqual([{
      statement: 'CREATE',
      params: ['fruits'],
      query: 'CREATE fruits',
    }]);
  });

  test('Should convert query with multiple params', () => {
    const text = `
MOVE fruits demo
`;
    const converter = new TextToCommandConverter(text);
    expect(converter.parse()).toEqual([{
      statement: 'MOVE',
      params: ['fruits', 'demo'],
      query: 'MOVE fruits demo',
    }]);
  });

  test('Should convert query without params', () => {
    const text = `LIST`;
    const converter = new TextToCommandConverter(text);
    expect(converter.parse()).toEqual([{
      statement: 'LIST',
      params: [],
      query: 'LIST',
    }]);
  });
})
