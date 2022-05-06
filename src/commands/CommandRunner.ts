import {TreeFolder} from "../directoryTree/entities";
import {Command} from "./entities";
import StatementFactory from "./StatementFactory";

export class CommandRunner {
  tree:TreeFolder = {
    name: '',
    children: [],
  };

  constructor(private commands: Command[]) {
  }

  run(): TreeFolder {
    this.commands.forEach((c: Command) => {
      console.log(c.query);
      const statement = StatementFactory.createStatement(c.statement.toUpperCase(), this.tree, c.params);
      this.tree = statement.run();
    });

    return this.tree;
  }
}
