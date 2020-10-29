const date = require('./src/date')

const functions = {
	parseDate: date.dateFrom,
	slugify: require('./src/slugify')
}

module.exports = {
	phpPlugin: require('./src/php-plugin'),
	markdownPlugin: require('./src/markdown'),
	datePlugin: date.plugin,
	phpBrowserSyncConfig: require('./src/php-browser-sync-config'),
	functions
}
