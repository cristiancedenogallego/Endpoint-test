import {TreeFolder} from "../directoryTree/entities";
import {Statement} from "./Statement";

export default class NotImplementedStatement implements Statement {
  constructor(private root: TreeFolder) {
  }
  run() {
    console.log('Statement not implemented yet');
    return this.root;
  }
}
