import {TreeFolder} from "../directoryTree/entities";
import {Command} from "./entities";
import CreateStatement from '../statements/CreateStatement';
import {ListStatement} from "../statements/ListStatement";
import DeleteStatement from "../statements/DeleteStatement";
import MoveStatement from "../statements/MoveStatement";
import NotImplementedStatement from "../statements/NotImplementedStatement";


export class CommandRunner {
  tree:TreeFolder = {
    name: '',
    children: [],
  };

  constructor(private commands: Command[]) {
  }

  getStatementRunnerClass(command: Command) {
    switch(command.statement.toUpperCase()) {
      case 'CREATE':
        return CreateStatement;
      case 'LIST':
        return ListStatement;
      case 'DELETE':
        return DeleteStatement
      case 'MOVE':
        return MoveStatement;
      default:
        return NotImplementedStatement;
    }
  }

  run(): TreeFolder {
    this.commands.forEach((c: Command) => {
      console.log(c.query);
      const StatementRunnerClass = this.getStatementRunnerClass(c);
      const statementRunner = new StatementRunnerClass(this.tree, c.params);
      this.tree = statementRunner.run();
    })

    return this.tree;
  }
}
