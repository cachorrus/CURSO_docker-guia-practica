//https://www.npmjs.com/package/node-cron
const cron = require('node-cron');
const { syncDB } = require('./tasks/sync-db');

/*
let times = 0;

cron.schedule('1-59/5 * * * * *', () => {
    times++;
    console.log('Tick cada multiplo de 5: ', times);
});
*/
console.log('Inicio de la app');
cron.schedule('1-59/5 * * * * *', syncDB);
