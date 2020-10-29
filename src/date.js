const {DateTime} = require('luxon')

const dateFrom = (dateString, format = null) => DateTime.fromFormat(dateString, format === 'time' ? 'd.M.y h:mm' : (format || 'd.M.y'))
const dateFormat = (value, format = 'dd.MM.yyyy', locale = 'sk') => value.toFormat(format, {locale})

module.exports = {
	dateFrom,
	dateFormat,
	plugin: ec => {
		ec.addFilter('date', dateFrom)
		ec.addFilter('format', dateFormat)
	}
}
