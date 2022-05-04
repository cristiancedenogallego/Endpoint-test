import * as fs from 'fs';
import {TextToCommandConverter} from './src/commands/TextToCommandConverter';
import {CommandRunner} from './src/commands/CommandRunner';


const dataPath = process.argv[2] || './src/examples/basic.txt';

fs.readFile(dataPath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const converter = new TextToCommandConverter(data);
  const commands = converter.parse();
  const runner = new CommandRunner(commands);
  runner.run();
});

