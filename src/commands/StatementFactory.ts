import {TreeFolder} from "../directoryTree/entities";
import CreateStatement from "../statements/CreateStatement";
import DeleteStatement from "../statements/DeleteStatement";
import {ListStatement} from "../statements/ListStatement";
import MoveStatement from "../statements/MoveStatement";
import NotImplementedStatement from "../statements/NotImplementedStatement";
import {Statement} from "../statements/Statement";


interface StatementTypes {
  [type: string]: typeof CreateStatement | typeof ListStatement | typeof DeleteStatement | typeof MoveStatement;
};

export default class StatementFactory {
  static createStatement(type: string, root: TreeFolder, params: string[]): Statement {
    const types: StatementTypes = {
      'CREATE': CreateStatement, 
      'LIST': ListStatement, 
      'DELETE': DeleteStatement, 
      'MOVE': MoveStatement, 
    };
    const StatementType = types[type] || NotImplementedStatement; 
    return new StatementType(root, params); 
  }
}
