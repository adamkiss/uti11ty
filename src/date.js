const {DateTime} = require('luxon')

const dateFrom = (dateString, format = null) => DateTime.fromFormat(dateString, format === 'time' ? 'dd.mm.YYYY HH:mm' : (format || 'dd.mm.YYYY'))
const dateFormat = (value, format = 'dd.mm.YYYY', locale) => value.toFormat(format, {locale})

module.exports = {
	dateFrom,
	dateFormat,
	plugin: ec => {
		ec.addFilter('date', dateFrom)
		ec.addFilter('format', dateFormat)
	}
}
