import {TreeFolder} from "../directoryTree/entities";
import {Statement} from "./Statement";

export default class DeleteStatement implements Statement {
  constructor(private root: TreeFolder, private params: string[]) {
  }

  run(): TreeFolder {
    const [path] = this.params;
    const subfolders = path.split('/');
    let pointer: TreeFolder = this.root;
    subfolders.some((sf: string, index: number) => {
      const childrenIndex = pointer.children.findIndex(c => c?.name === sf);
      if (childrenIndex > -1) {
        if (index === subfolders.length - 1) {
          pointer.children.splice(childrenIndex, 1);
          return true;
        } else {
          pointer = pointer.children[childrenIndex];
          return false;
        }
      } else {
        console.log(`Cannot delete ${path} - ${sf} does not exist`)
        return true;
      }
    })
    return this.root;
  }
}
