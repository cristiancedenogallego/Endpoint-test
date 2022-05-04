import * as fs from 'fs';
import {TextToCommandConverter} from './src/commandRunner/utils/TextToCommandConverter';
import {CommandRunner} from './src/commandRunner/utils/CommandRunner';


fs.readFile('./src/examples/basic.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const converter = new TextToCommandConverter(data);
  const commands = converter.parse();
  const runner = new CommandRunner(commands);
  runner.run();
});

