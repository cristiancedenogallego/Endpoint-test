import {TreeFolder} from "../directoryTree/entities";
import {Statement} from "./Statement";

export class ListStatement implements Statement {
  constructor(private root: TreeFolder) {
  }

  compareNodeNames(a: TreeFolder, b: TreeFolder): number {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  }

  printNode(root: TreeFolder, level = 0) {
    // This for the empty root
    if (root.name) {
      console.log(`${'-'.repeat(level)}${root.name}`);
    }

    root?.children?.sort(this.compareNodeNames).forEach((ch) => {
      this.printNode(ch, level + 1);
    })
  }

  run(): TreeFolder {
    this.printNode(this.root);
    return this.root;
  }
};
