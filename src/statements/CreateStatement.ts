import {TreeFolder} from '../directoryTree/entities';
import {Statement} from './Statement';

export default class CreateStatement implements Statement {
  constructor(private root: TreeFolder,  private params: string[]) {
  }

  run(): TreeFolder {
    const [path] = this.params;
    const subfolders = path.split('/');
    let pointer: TreeFolder = this.root;
    subfolders.forEach((sf) => {
      const children = pointer.children.find(c => c?.name === sf)
      if (children) {
        pointer = children;
      } else {
        const newNode = {
          name: sf,
          children: [],
        };
        pointer.children.push(newNode);
        pointer = newNode;
      }
    })
    return this.root;
  }
}
