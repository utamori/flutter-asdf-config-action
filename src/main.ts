import {getInput, exportVariable} from '@actions/core'
import {readFileSync} from 'node:fs'

async function run(): Promise<void> {
  const path = getInput('path')

  const content = readFileSync(path, {encoding: 'utf8'})

  for (const line of content.split('\n')) {
    if (line.trim() === '') continue

    const [name, versionStatus] = line.split(' ')

    if (name === 'flutter') {
      if (versionStatus.includes('-stable')) {
        exportVariable('FLUTTER_VERSION', versionStatus.replace(/-stable$/, ''))
        exportVariable('FLUTTER_CHANNEL', 'stable')
        break
      } else if (versionStatus.includes('.pre-beta')) {
        exportVariable(
          'FLUTTER_VERSION',
          versionStatus.replace(/\.pre-beta$/, '')
        )
        exportVariable('FLUTTER_CHANNEL', 'beta')
        break
      }
    }
  }
}

run()
