
const PM2Web = require(__dirname + "/server/app");

let pm2web = new PM2Web({});
pm2web.start();
