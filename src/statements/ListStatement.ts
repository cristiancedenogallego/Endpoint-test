import {TreeFolder} from "../directoryTree/entities";
import {Statement} from "./Statement";

export class ListStatement implements Statement {
  constructor(private root: TreeFolder) {
  }

  printNode(root: TreeFolder, level = 0) {
    // This for the empty root
    if (root.name) {
      console.log(`${'-'.repeat(level)}${root.name}`);
    }

    root?.children?.forEach((ch) => {
      this.printNode(ch, level + 1);
    })
  }

  run(): TreeFolder {
    this.printNode(this.root);
    return this.root;
  }
};
