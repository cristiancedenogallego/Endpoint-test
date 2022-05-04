import {Command} from "./entities";

export class TextToCommandConverter {
  constructor(private instructions: string) {
  }

  parse(): Command[] {
    const lines = this.instructions.split('\n');
    // Filter is necessary because we can receive empty lines
    const commands: Command[] = lines.filter(l => l).map((line): Command => {
      const [statement, ...params] = line.split(' ');
      return {
        statement,
        params,
        query: line,
      }
    });

    return commands;
  }
}
