module.exports = {
	proxy: process.env.npm_package_config_host,
	server: false,
	snippetOptions: {
		rule: {
			match: /<\/head>/i,
			fn: function (snippet, match) {
				return snippet + match;
			}
		}
	}
}
