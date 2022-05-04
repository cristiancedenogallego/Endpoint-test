import {TreeFolder} from "../directoryTree/entities";

export interface Statement {
  run: () => TreeFolder;
}
