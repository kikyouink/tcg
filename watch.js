var path = require('path')
  var Chokidar = require('chokidar');
  var watcher = Chokidar.watch([path.join(__dirname, './src')], {
    // ignored: /(^|[\/\\])\../, 
    persistent: true,
    usePolling: true,
  });
  var log = console.dir.bind(console);
  var watchAction = function({event, eventPath}){
    log(`Has been ${event}ed, file: ${eventPath}`);
    // 这里进行文件更改后的操作
  }
  watcher
  .on('ready', () => log(`Initial scan complete. Ready for changes.`))
  .on('add', path => log(`File ${path} has been added`))
  .on('change', path => watchAction({event: 'change', eventPath: path}))
  .on('unlink', path => watchAction({event: 'remove', eventPath: path}));