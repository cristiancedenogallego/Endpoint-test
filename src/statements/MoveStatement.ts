import {TreeFolder} from "../directoryTree/entities";
import {Statement} from "./Statement";

export default class MoveStatement implements Statement {
  constructor(private root: TreeFolder, private params: string[]) {
  }

  removeNode(): TreeFolder {
    const [path] = this.params;
    const subfolders = path.split('/');
    let pointer: TreeFolder = this.root;
    let removed: TreeFolder[] = [];
    subfolders.some((sf: string, index: number) => {
      const childrenIndex = pointer.children.findIndex(c => c?.name === sf);
      if (childrenIndex > -1) {
        if (index === subfolders.length - 1) {
          removed = pointer.children.splice(childrenIndex, 1)
          return true;
        } else {
          pointer = pointer.children[childrenIndex];
          return false;
        }
      };

      return false;
    });
    return removed[0];
  }

  run(): TreeFolder {
    const [path, target] = this.params;
    const nodeToMove = this.removeNode();

    if (!nodeToMove) {
        console.log(`The folder ${path} does not exist`)
    }


    const subfolders = target.split('/');

    subfolders.some((sf: string, index: number) => {
      const children = this.root.children.find(c => c?.name === sf);
      if (children) {
        if (index === subfolders.length - 1 && nodeToMove) {
          children.children.push(nodeToMove)
        }
      } else {
        return false;
      }
    })

    return this.root;

  }
}
