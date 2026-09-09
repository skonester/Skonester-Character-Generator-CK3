const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
process.chdir(__dirname);
const cli = path.join(__dirname, 'node_modules/@neutralinojs/neu/bin/neu.js');
function neu(...args) {
  const result = spawnSync(process.execPath, [cli, ...args], { stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status || 1);
}
if (!fs.existsSync('bin/neutralino-win_x64.exe')) neu('update');
fs.mkdirSync('resources', { recursive: true });
for (const file of ['Culture-Forge.html', 'Dynasty Forge.html', 'skone2.html', 'v1_5kio_mapeditor.html', 'v3_8kio_editor_10.html', 'script.js', 'styles.css', 'favicon.ico']) {
  fs.copyFileSync(path.join('..', file), path.join('resources', file));
}
fs.copyFileSync('index.html', 'resources/index.html');
// Neutralino requires PNG for its window icon and executable icon patcher.
const iconConversion = spawnSync('powershell.exe', ['-NoProfile', '-NonInteractive', '-Command',
  "Add-Type -AssemblyName System.Drawing; $appIcon = [System.Drawing.Icon]::new((Join-Path (Get-Location) 'resources/favicon.ico')); $appBitmap = $appIcon.ToBitmap(); try { $appBitmap.Save((Join-Path (Get-Location) 'resources/favicon.png'), [System.Drawing.Imaging.ImageFormat]::Png) } finally { $appBitmap.Dispose(); $appIcon.Dispose() }"
], { stdio: 'inherit', windowsHide: true });
if (iconConversion.error) throw iconConversion.error;
if (iconConversion.status !== 0) process.exit(iconConversion.status || 1);
// Build only Windows; keep downloaded binaries available for future builds.
const constants = require('./node_modules/@neutralinojs/neu/src/constants');
constants.files.binaries = { win32: constants.files.binaries.win32 };
require('./node_modules/@neutralinojs/neu/src/modules/bundler').bundleApp({ embedResources: true }).then(() => {
  const output = 'dist/Skonester-CK3-Tools/Skonester-CK3-Tools-win_x64.exe';
  if (!fs.existsSync(output)) throw new Error('Windows executable was not produced');
  fs.copyFileSync(output, '../Skonester-CK3-Tools.exe');
  console.log('Built: ' + path.resolve('../Skonester-CK3-Tools.exe'));
});
