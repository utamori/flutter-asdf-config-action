import { getInput, exportVariable } from '@actions/core'
import { readFileSync } from "node:fs";

async function run(): Promise<void> {

  const path = getInput('path');

  const content = readFileSync(path, { encoding: 'utf8' });


  for (const line of content.split('\n')) {
    if (line.trim() === '') continue;

    const [name, versionStatus] = line.split(' ');

    if (name === 'flutter') {
      const [version, channel] = versionStatus.split('-');
      exportVariable('FLUTTER_VERSION', version)
      exportVariable('FLUTTER_CHANNEL', channel)
      break;
    }

  }

}

run()
