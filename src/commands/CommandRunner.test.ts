import { CommandRunner } from "./CommandRunner";
import { Command } from "./entities";
import StatementFactory from "./StatementFactory";

jest.mock("./StatementFactory");

const mockedStatementFactory = StatementFactory as jest.Mocked<typeof StatementFactory>
const mockedRunStatement = jest.fn();

const commands: Command[] = [
  {
    statement: "CREATE",
    params: ["some"],
    query: "create some",
  },
];

describe("CommandRunner", () => {
  beforeAll(() => {
    mockedStatementFactory.createStatement.mockReturnValue({
      run: mockedRunStatement, 
    });
  });

  test("Should run factory createStatement with the proper params", () => {
    const runner = new CommandRunner(commands);
    runner.run();
    expect(StatementFactory.createStatement).toHaveBeenCalledWith(
      "CREATE",
      {
        name: "",
        children: [],
      },
      ["some"]
    );
  });

  test("Should run the statement returned for the factory", () => {
    const runner = new CommandRunner(commands);
    runner.run();

    expect(mockedRunStatement).toHaveBeenCalled();
  });

  test("Should update the tree after call the statement returned for the factory ", () => {
    const mockedTree = {
      name: 'root',
      children: []
    };
    mockedRunStatement.mockReturnValueOnce(mockedTree);
    const runner = new CommandRunner(commands);
    runner.run();
    expect(runner.tree).toEqual(mockedTree);
  });
});
