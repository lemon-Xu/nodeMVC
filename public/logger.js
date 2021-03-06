const log4js = require('log4js');

log4js.configure({
	appenders: { cheese: {type: 'file', filename: '123.log'} },
	categories: { default: { appenders: ['cheese'], level: 'error'}}
});


const logger = log4js.getLogger('cheese');
logger.trace('Entering cheese testing');
logger.debug('Got cheese.')
logger.info('Cheese is Comte.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');


